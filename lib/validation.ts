import { z } from 'zod';

export const SERVICE_OPTIONS = [
  'Audit & Assurance',
  'Income Tax Services (NBR)',
  'VAT & Customs Advisory',
  'Company Formation & RJSC/BIDA Compliance',
  'Accounting & Bookkeeping',
  'Payroll & Labour Compliance',
  'Business Advisory & Consultancy',
  'Internal Audit, Risk & Forensic Support',
  'Transfer Pricing & International Tax',
  'Not sure',
] as const;

export const PREFERRED_CONTACT_OPTIONS = ['Phone', 'WhatsApp', 'Email'] as const;

// Normalizes spaces/hyphens before testing BD mobile format: +8801XXXXXXXXX or 01XXXXXXXXX (operators 013-019)
const bdPhoneRegex = /^(?:\+?880|0)1[3-9]\d{8}$/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(100, 'Full name cannot exceed 100 characters.'),
  email: z
    .string()
    .trim()
    .min(1, 'Email address is required.')
    .email('Please enter a valid email address (e.g., name@company.com).'),
  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required.')
    .refine(
      (val) => {
        const cleaned = val.replace(/[\s-]/g, '');
        return bdPhoneRegex.test(cleaned);
      },
      {
        message: 'Enter a valid Bangladesh phone number (+8801XXXXXXXXX or 01XXXXXXXXX).',
      }
    ),
  companyName: z
    .string()
    .trim()
    .max(150, 'Company name cannot exceed 150 characters.')
    .optional()
    .or(z.literal('')),
  serviceInterested: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: 'Please select a service area.' }),
  }),
  preferredContact: z.enum(PREFERRED_CONTACT_OPTIONS, {
    errorMap: () => ({ message: 'Please select your preferred contact method.' }),
  }),
  message: z
    .string()
    .trim()
    .min(20, 'Please provide at least 20 characters describing your requirement.')
    .max(1500, 'Message cannot exceed 1,500 characters.'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to be contacted regarding your enquiry.',
  }),
  // Honeypot field - must remain empty for legitimate human users
  website_url: z.string().optional().or(z.literal('')),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Strips HTML tags, script injections, and control characters from user strings
 */
export function sanitizeText(input: string | undefined): string {
  if (!input) return '';
  return input
    .replace(/<[^>]*>?/gm, '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim();
}
