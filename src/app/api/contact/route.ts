// /src/app/api/contact/route.ts


import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  // Insert to Supabase
  const { data, error } = await supabase.from('contacts').insert([{ name, email, message }]);

  if (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }

  // Send email
  try {
    await resend.emails.send({
      from: 'portfolio@resend.dev', // Your verified Resend domain
      to: 'kalharabatangala@gmail.com', // Your email
      subject: 'Message from Portfolio Website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <img src="https://kalhara.vercel.app/assets/email-profile.webp" alt="Kalhara Profile" style="max-width: 100px; margin-bottom: 20px;" />
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
      //html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });
  } catch (emailError) {
    console.error('Email error:', emailError);
    // Optional: Continue even if email fails
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
