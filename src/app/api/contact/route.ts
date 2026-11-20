// /src/app/api/contact/route.ts

import { Resend } from 'resend';
import { contactEmailHtml, contactEmailText } from '@/lib/contactEmail';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

export async function POST(req: Request) {
  // Created per request so a missing key fails this request, not the whole build
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set');
    return Response.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = field(body.name, 200);
  const email = field(body.email, 320);
  const message = field(body.message, 5000);

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return Response.json({ error: 'Please provide your name, a valid email and a message.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: 'portfolio@resend.dev', // Your verified Resend domain
    to: 'kalharabatangala@gmail.com', // Your email
    replyTo: email,
    subject: 'Message from Portfolio Website',
    text: contactEmailText({ name, email, message }),
    html: contactEmailHtml({ name, email, message }),
  });

  if (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send message.' }, { status: 502 });
  }

  return Response.json({ success: true });
}
