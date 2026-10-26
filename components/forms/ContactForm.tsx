'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  RotateCcw,
  Lock,
} from 'lucide-react';
import {
  contactFormSchema,
  ContactFormValues,
  SERVICE_OPTIONS,
  PREFERRED_CONTACT_OPTIONS,
} from '@/lib/validation';

interface ContactFormProps {
  defaultService?: (typeof SERVICE_OPTIONS)[number];
}

export function ContactForm({ defaultService = 'Audit & Assurance' }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [spamFiltered, setSpamFiltered] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      serviceInterested: defaultService,
      preferredContact: 'Phone',
      message: '',
      consent: false,
      website_url: '',
    },
  });

  const messageValue = watch('message') || '';
  const charCount = messageValue.length;

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    setSpamFiltered(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setServerError(
          data?.error || 'Could not submit your enquiry. Please verify your inputs and try again.'
        );
        setSubmitState('error');
        return;
      }

      if (data.spamFiltered) {
        setSpamFiltered(true);
      }
      setReferenceId(data.referenceId || 'ENQ-RECEIVED');
      setSubmitState('success');
    } catch {
      setServerError(
        'Network error while submitting your enquiry. Please check your connection and retry.'
      );
      setSubmitState('error');
    }
  };

  const handleReset = () => {
    reset();
    setSubmitState('idle');
    setServerError(null);
    setReferenceId(null);
    setSpamFiltered(false);
  };

  if (submitState === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border-2 border-[#16A34A]/30 bg-white p-8 sm:p-10 text-center shadow-indigo-lg"
      >
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#16A34A]/10 text-[#16A34A] transition-transform duration-300 scale-105">
          <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
        </div>

        <h3 className="mt-5 font-heading text-2xl font-extrabold text-indigo-950">
          We&apos;ll respond within 1 business day
        </h3>

        <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-600 max-w-lg mx-auto">
          Thank you for reaching out. Your consultation enquiry has been logged in strict confidence, and a confirmation notice has been queued for your email address.
        </p>

        {referenceId && !spamFiltered && (
          <div className="mt-5 inline-block rounded-xl border border-borderline bg-surface px-4 py-2 text-xs font-semibold text-indigo-950 tabular-nums">
            Enquiry Reference: <span className="text-indigo-600">{referenceId}</span>
          </div>
        )}

        <div className="mt-7">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-xl border border-borderline bg-white px-5 py-2.5 text-xs font-bold text-indigo-950 transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
          >
            <RotateCcw className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
            <span>Submit another enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-borderline bg-white p-6 sm:p-8 lg:p-10 shadow-indigo-lg"
    >
      <div className="border-b border-borderline pb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
          Confidential Consultation Request
        </span>
        <h2 className="mt-1 font-heading text-2xl font-extrabold text-indigo-950">
          Send Us Your Enquiry
        </h2>
        <p className="mt-1 text-sm text-ink-600">
          Fields marked with <span className="text-[#DC2626] font-bold">*</span> are required. We respond within 1 business day (Sun–Thu).
        </p>
      </div>

      {/* Server-Level Error Banner with Retry */}
      {submitState === 'error' && serverError && (
        <div
          role="alert"
          aria-live="assertive"
          className="mt-6 flex items-start justify-between gap-4 rounded-xl border border-[#DC2626]/40 bg-[#DC2626]/5 p-4 text-sm text-[#DC2626]"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-bold">Submission could not be completed</p>
              <p className="mt-0.5 text-xs sm:text-sm">{serverError}</p>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="shrink-0 rounded-lg border border-[#DC2626]/40 bg-white px-3 py-1.5 text-xs font-bold text-[#DC2626] hover:bg-[#DC2626]/10"
          >
            Retry
          </button>
        </div>
      )}

      {/* Honeypot Field (Hidden from real users, traps automated bots) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website_url">Leave this field blank</label>
        <input
          id="website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website_url')}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-indigo-950">
            Full Name <span className="text-[#DC2626]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g., Tanvir Ahmed"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            {...register('fullName')}
            className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus:ring-2 ${
              errors.fullName
                ? 'border-[#DC2626] focus:ring-[#DC2626]'
                : 'border-borderline bg-surface focus:border-indigo-600 focus:bg-white focus:ring-violet-600'
            }`}
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              role="alert"
              aria-live="polite"
              className="mt-1.5 flex items-center gap-1 text-xs font-medium text-[#DC2626]"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.fullName.message}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-indigo-950">
            Email Address <span className="text-[#DC2626]">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
            className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-[#DC2626] focus:ring-[#DC2626]'
                : 'border-borderline bg-surface focus:border-indigo-600 focus:bg-white focus:ring-violet-600'
            }`}
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              aria-live="polite"
              className="mt-1.5 flex items-center gap-1 text-xs font-medium text-[#DC2626]"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        {/* Phone (BD Format) */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-indigo-950">
            Phone Number (BD) <span className="text-[#DC2626]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="017XXXXXXXX or +88017XXXXXXXX"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
            {...register('phone')}
            className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm tabular-nums text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus:ring-2 ${
              errors.phone
                ? 'border-[#DC2626] focus:ring-[#DC2626]'
                : 'border-borderline bg-surface focus:border-indigo-600 focus:bg-white focus:ring-violet-600'
            }`}
          />
          <p id="phone-hint" className="mt-1 text-[11px] text-ink-600">
            Format: +8801XXXXXXXXX or 01XXXXXXXXX
          </p>
          {errors.phone && (
            <p
              id="phone-error"
              role="alert"
              aria-live="polite"
              className="mt-1 flex items-center gap-1 text-xs font-medium text-[#DC2626]"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.phone.message}</span>
            </p>
          )}
        </div>

        {/* Company Name (Optional) */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-semibold text-indigo-950">
            Company / Organization <span className="text-xs font-normal text-ink-600">(Optional)</span>
          </label>
          <input
            id="companyName"
            type="text"
            autoComplete="organization"
            placeholder="e.g., Apex Trading Ltd. or Individual"
            {...register('companyName')}
            className="mt-1.5 w-full rounded-xl border border-borderline bg-surface px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>
      </div>

      {/* Service Interested In */}
      <div className="mt-5">
        <label htmlFor="serviceInterested" className="block text-sm font-semibold text-indigo-950">
          Service Interested In <span className="text-[#DC2626]">*</span>
        </label>
        <select
          id="serviceInterested"
          aria-invalid={!!errors.serviceInterested}
          {...register('serviceInterested')}
          className="mt-1.5 w-full rounded-xl border border-borderline bg-surface px-4 py-3 text-sm font-medium text-ink-900 transition-colors focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-600"
        >
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceInterested && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-[#DC2626]">
            {errors.serviceInterested.message}
          </p>
        )}
      </div>

      {/* Preferred Contact Method (Radio) */}
      <fieldset className="mt-5">
        <legend className="block text-sm font-semibold text-indigo-950">
          Preferred Contact Method <span className="text-[#DC2626]">*</span>
        </legend>
        <div className="mt-2 grid grid-cols-3 gap-3">
          {PREFERRED_CONTACT_OPTIONS.map((method) => (
            <label
              key={method}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-borderline bg-surface px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-indigo-950 transition-colors hover:bg-indigo-50 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50"
            >
              <input
                type="radio"
                value={method}
                {...register('preferredContact')}
                className="h-4 w-4 accent-indigo-600 focus:ring-violet-600"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message with Live Character Counter (20 - 1500 chars) */}
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <label htmlFor="message" className="block text-sm font-semibold text-indigo-950">
            How can we help you? <span className="text-[#DC2626]">*</span>
          </label>
          <span
            aria-live="polite"
            className={`text-xs font-semibold tabular-nums ${
              charCount > 1500 || (charCount > 0 && charCount < 20)
                ? 'text-[#DC2626]'
                : charCount >= 20
                ? 'text-[#16A34A]'
                : 'text-ink-600'
            }`}
          >
            {charCount} / 1,500 chars (min 20)
          </span>
        </div>
        <textarea
          id="message"
          rows={4}
          placeholder="Briefly describe your entity type (Company, SME, NGO, or Individual), the income/financial year concerned, and the service you require..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
          className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:outline-none focus:ring-2 ${
            errors.message
              ? 'border-[#DC2626] focus:ring-[#DC2626]'
              : 'border-borderline bg-surface focus:border-indigo-600 focus:bg-white focus:ring-violet-600'
          }`}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            aria-live="polite"
            className="mt-1.5 flex items-center gap-1 text-xs font-medium text-[#DC2626]"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.message.message}</span>
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-borderline bg-surface p-3.5 text-xs sm:text-sm text-ink-900">
          <input
            id="consent"
            type="checkbox"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            {...register('consent')}
            className="mt-0.5 h-4 w-4 shrink-0 rounded accent-indigo-600 focus:ring-violet-600"
          />
          <span>
            I agree to be contacted regarding my enquiry; my data is kept confidential.{' '}
            <span className="text-[#DC2626]">*</span>
          </span>
        </label>
        {errors.consent && (
          <p
            id="consent-error"
            role="alert"
            aria-live="polite"
            className="mt-1.5 flex items-center gap-1 text-xs font-medium text-[#DC2626]"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{errors.consent.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-gradient px-6 py-4 text-base font-bold text-white shadow-indigo transition-all hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>Send Confidential Enquiry</span>
            </>
          )}
        </button>

        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-ink-600">
          <Lock className="h-3.5 w-3.5 text-indigo-600 shrink-0" aria-hidden="true" />
          <span>Protected by professional secrecy &amp; strict server-side validation.</span>
        </p>
      </div>
    </form>
  );
}
