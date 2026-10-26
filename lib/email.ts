import nodemailer from 'nodemailer';
import { siteConfig } from '@/content/site';
import { ContactFormValues } from './validation';

export interface EmailDeliveryResult {
  delivered: boolean;
  provider: 'resend' | 'smtp' | 'simulated-dev';
  referenceId: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function buildFirmNotificationHtml(data: ContactFormValues, submittedAt: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Consultation Enquiry — ${escapeHtml(siteConfig.firmName)}</title>
</head>
<body style="margin:0;padding:24px;background-color:#F8FAFF;font-family:Inter,Arial,sans-serif;color:#111827;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#FFFFFF;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="background:linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%);padding:24px 32px;color:#FFFFFF;">
        <p style="margin:0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;opacity:0.9;">New Website Consultation Enquiry</p>
        <h1 style="margin:6px 0 0;font-size:20px;font-weight:700;">${escapeHtml(siteConfig.firmName)}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px;">
        <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
          <tr style="border-bottom:1px solid #E5E7EB;">
            <td style="width:180px;color:#4B5563;font-weight:600;">Client Name</td>
            <td style="color:#111827;font-weight:600;">${escapeHtml(data.fullName)}</td>
          </tr>
          <tr style="border-bottom:1px solid #E5E7EB;">
            <td style="color:#4B5563;font-weight:600;">Company / Organization</td>
            <td style="color:#111827;">${escapeHtml(data.companyName || 'Individual / Not specified')}</td>
          </tr>
          <tr style="border-bottom:1px solid #E5E7EB;">
            <td style="color:#4B5563;font-weight:600;">Phone (BD)</td>
            <td style="color:#111827;">${escapeHtml(data.phone)}</td>
          </tr>
          <tr style="border-bottom:1px solid #E5E7EB;">
            <td style="color:#4B5563;font-weight:600;">Email Address</td>
            <td style="color:#111827;">${escapeHtml(data.email)}</td>
          </tr>
          <tr style="border-bottom:1px solid #E5E7EB;">
            <td style="color:#4B5563;font-weight:600;">Service Required</td>
            <td style="color:#4F46E5;font-weight:600;">${escapeHtml(data.serviceInterested)}</td>
          </tr>
          <tr style="border-bottom:1px solid #E5E7EB;">
            <td style="color:#4B5563;font-weight:600;">Preferred Contact</td>
            <td style="color:#111827;">${escapeHtml(data.preferredContact)}</td>
          </tr>
          <tr style="border-bottom:1px solid #E5E7EB;">
            <td style="color:#4B5563;font-weight:600;">Submitted At (BST)</td>
            <td style="color:#4B5563;">${escapeHtml(submittedAt)}</td>
          </tr>
        </table>

        <div style="margin-top:20px;padding:16px;background:#EEF2FF;border-radius:8px;border-left:4px solid #4F46E5;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;color:#1E1B4B;">Enquiry Message</p>
          <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;color:#111827;">${escapeHtml(data.message)}</p>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildAutoReplyHtml(data: ContactFormValues): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>We Received Your Enquiry — ${escapeHtml(siteConfig.firmName)}</title>
</head>
<body style="margin:0;padding:24px;background-color:#F8FAFF;font-family:Inter,Arial,sans-serif;color:#111827;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#FFFFFF;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="background:#1E1B4B;padding:24px 32px;color:#FFFFFF;border-bottom:4px solid #7C3AED;">
        <h1 style="margin:0;font-size:18px;font-weight:700;">${escapeHtml(siteConfig.firmName)}</h1>
        <p style="margin:4px 0 0;font-size:12px;color:#EDE9FE;">Chartered Accountants • ${escapeHtml(siteConfig.location.addressLine)}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px;font-size:14px;line-height:1.65;color:#111827;">
        <p style="margin:0 0 16px;">Dear <strong>${escapeHtml(data.fullName)}</strong>,</p>
        <p style="margin:0 0 16px;">Thank you for contacting <strong>${escapeHtml(siteConfig.firmName)}</strong> regarding <strong>${escapeHtml(data.serviceInterested)}</strong>. This is an automated confirmation that your enquiry has been received in strict confidence.</p>
        <p style="margin:0 0 16px;">Our office will review your message and respond via your preferred channel (<strong>${escapeHtml(data.preferredContact)}</strong>) within <strong>1 business day</strong> (Office Hours: ${escapeHtml(siteConfig.contact.hours)}).</p>
        <div style="margin:20px 0;padding:14px 16px;background:#F8FAFF;border:1px solid #E5E7EB;border-radius:8px;font-size:12px;color:#4B5563;">
          <strong>Important Notice:</strong> Submitting an enquiry through our website or receiving this acknowledgement does not establish a formal Chartered Accountant–Client engagement until an independence check is completed and a written Engagement Letter is signed.
        </div>
        <p style="margin:0;">Warm regards,<br /><strong>Office of ${escapeHtml(siteConfig.ownerName)}</strong><br />${escapeHtml(siteConfig.firmName)}</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendContactEmails(data: ContactFormValues): Promise<EmailDeliveryResult> {
  const submittedAt = new Date().toLocaleString('en-BD', { timeZone: 'Asia/Dhaka' });
  const firmHtml = buildFirmNotificationHtml(data, submittedAt);
  const autoReplyHtml = buildAutoReplyHtml(data);

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.emailHref;
  const referenceId = `ENQ-${Date.now().toString(36).toUpperCase()}`;

  // 1. Primary Option: Resend REST API
  if (process.env.RESEND_API_KEY) {
    const firmResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject: `[Website Enquiry] ${data.serviceInterested} — ${data.fullName}`,
        html: firmHtml,
      }),
    });

    if (!firmResponse.ok) {
      const errText = await firmResponse.text();
      throw new Error(`Resend API error: ${errText}`);
    }

    // Best-effort auto-reply to sender
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [data.email],
        subject: `We received your enquiry — ${siteConfig.firmName}`,
        html: autoReplyHtml,
      }),
    }).catch(() => null);

    return {
      delivered: true,
      provider: 'resend',
      referenceId,
    };
  }

  // 2. Fallback Option: Nodemailer SMTP
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `[Website Enquiry] ${data.serviceInterested} — ${data.fullName}`,
      html: firmHtml,
    });

    await transporter
      .sendMail({
        from: fromEmail,
        to: data.email,
        subject: `We received your enquiry — ${siteConfig.firmName}`,
        html: autoReplyHtml,
      })
      .catch(() => null);

    return {
      delivered: true,
      provider: 'smtp',
      referenceId,
    };
  }

  // 3. Local Development / Unconfigured Environment Fallback (logs cleanly without crashing)
  console.info(
    `[Contact API] Enquiry ${referenceId} validated and queued (configure RESEND_API_KEY or SMTP_HOST in .env.local for live email dispatch):`,
    {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      serviceInterested: data.serviceInterested,
      preferredContact: data.preferredContact,
    }
  );

  return {
    delivered: true,
    provider: 'simulated-dev',
    referenceId,
  };
}
