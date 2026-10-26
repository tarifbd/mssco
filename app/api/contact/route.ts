import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';
import { contactFormSchema, sanitizeText } from '@/lib/validation';
import { sendContactEmails } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // 1. Extract client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    const rateStatus = checkRateLimit(clientIp);
    if (!rateStatus.allowed) {
      return NextResponse.json(
        {
          ok: false,
          error: `Too many requests from your network. Please wait ${rateStatus.resetInSeconds} seconds before trying again.`,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateStatus.resetInSeconds),
          },
        }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { ok: false, error: 'Invalid request payload.' },
        { status: 400 }
      );
    }

    // 2. Honeypot Anti-Spam Check: if the hidden `website_url` field is filled, silently trap the bot
    if (typeof body.website_url === 'string' && body.website_url.trim().length > 0) {
      return NextResponse.json(
        {
          ok: true,
          spamFiltered: true,
          message: 'Enquiry received.',
        },
        { status: 200 }
      );
    }

    // 3. Server-Side Zod Validation
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          ok: false,
          error: 'Please check the highlighted form fields and try again.',
          fieldErrors,
        },
        { status: 422 }
      );
    }

    // 4. Input Sanitization
    const cleanData = {
      ...parsed.data,
      fullName: sanitizeText(parsed.data.fullName),
      email: sanitizeText(parsed.data.email).toLowerCase(),
      phone: sanitizeText(parsed.data.phone).replace(/[\s-]/g, ''),
      companyName: sanitizeText(parsed.data.companyName),
      message: sanitizeText(parsed.data.message),
    };

    // 5. Email Delivery (Firm Notification + Auto-Reply)
    const delivery = await sendContactEmails(cleanData);

    return NextResponse.json(
      {
        ok: true,
        referenceId: delivery.referenceId,
        provider: delivery.provider,
        message: "Thank you. We've received your enquiry and will respond within 1 business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      {
        ok: false,
        error: 'An unexpected server error occurred while sending your message. Please try again or reach us directly via WhatsApp/Phone.',
      },
      { status: 500 }
    );
  }
}
