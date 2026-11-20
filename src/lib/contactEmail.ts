// src/lib/contactEmail.ts
// The email you receive when someone submits the contact form.
// Colours come from the site theme; layout uses tables and inline styles
// because email clients (Gmail, Outlook, Apple Mail) ignore most modern CSS.

import { palette } from '@/theme/theme';

const SITE_URL = 'https://kalhara.vercel.app';
const LOGO_URL = `${SITE_URL}/assets/email-falcon-gold.png`;

const { navy, gold, neutral, white } = palette;

const SERIF = "Georgia, 'Times New Roman', Times, serif";
const SANS = "'Segoe UI', Helvetica, Arial, sans-serif";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] as string,
  );

interface ContactEmail {
  name: string;
  email: string;
  message: string;
}

export function contactEmailText({ name, email, message }: ContactEmail) {
  return `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
}

export function contactEmailHtml({ name, email, message }: ContactEmail) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br />');
  const firstName = escapeHtml(name.split(/\s+/)[0]);
  const replyHref = escapeHtml(
    `mailto:${email}?subject=${encodeURIComponent('Re: Your message via kalhara.vercel.app')}`,
  );
  const received = new Date().toLocaleString('en-GB', {
    timeZone: 'Asia/Colombo',
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  const preheader = escapeHtml(`${name}: ${message.slice(0, 110)}`);

  const detailRow = (label: string, value: string, last = false) => `
    <tr>
      <td style="padding:14px 0;${last ? '' : `border-bottom:1px solid ${neutral[200]};`}width:110px;vertical-align:top;font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${neutral[500]};">${label}</td>
      <td style="padding:14px 0;${last ? '' : `border-bottom:1px solid ${neutral[200]};`}vertical-align:top;font-family:${SANS};font-size:15px;color:${navy[900]};">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>New message from your portfolio</title>
</head>
<body style="margin:0;padding:0;background-color:${neutral[200]};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${preheader}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${neutral[200]}" style="background-color:${neutral[200]};">
    <tr>
      <td align="center" style="padding:32px 12px;">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;border-collapse:separate;">

          <!-- Gold top rule -->
          <tr>
            <td height="4" bgcolor="${gold[500]}" style="height:4px;line-height:4px;font-size:0;border-radius:8px 8px 0 0;background:${gold[500]};background-image:linear-gradient(90deg, ${gold[600]}, ${gold[300]}, ${gold[600]});">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td align="center" bgcolor="${navy[700]}" style="padding:40px 32px 34px;background-color:${navy[700]};background-image:radial-gradient(circle at 50% 0%, ${navy[600]} 0%, ${navy[700]} 45%, ${navy[900]} 100%);">
              <img src="${LOGO_URL}" width="96" height="96" alt="Kalhara Batangala" style="display:block;width:96px;height:96px;border:0;outline:none;margin:0 auto 18px;" />
              <div style="font-family:${SERIF};font-size:24px;letter-spacing:6px;text-transform:uppercase;color:${white};">Kalhara <span style="color:${gold[500]};">Batangala</span></div>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:16px auto 14px;">
                <tr>
                  <td width="36" height="1" bgcolor="${gold[600]}" style="width:36px;height:1px;line-height:1px;font-size:0;">&nbsp;</td>
                  <td style="padding:0 10px;font-family:${SERIF};font-size:10px;line-height:1px;color:${gold[500]};">&#9670;</td>
                  <td width="36" height="1" bgcolor="${gold[600]}" style="width:36px;height:1px;line-height:1px;font-size:0;">&nbsp;</td>
                </tr>
              </table>
              <div style="font-family:${SANS};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${navy[200]};">Engineer &nbsp;&middot;&nbsp; Researcher</div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td bgcolor="${white}" style="padding:40px 40px 12px;background-color:${white};">
              <div style="font-family:${SANS};font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${gold[700]};">New enquiry &nbsp;&middot;&nbsp; Portfolio contact form</div>
              <h1 style="margin:10px 0 6px;font-family:${SERIF};font-size:28px;font-weight:normal;line-height:1.3;color:${navy[700]};">${safeName} has sent you a message</h1>
              <div style="font-family:${SANS};font-size:13px;color:${neutral[500]};">${received} &nbsp;(Sri Lanka time)</div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:26px;border-top:1px solid ${neutral[200]};">
                ${detailRow('Name', safeName)}
                ${detailRow('Email', `<a href="mailto:${safeEmail}" style="color:${gold[700]};text-decoration:none;font-weight:600;">${safeEmail}</a>`, true)}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td bgcolor="${white}" style="padding:16px 40px 8px;background-color:${white};">
              <div style="font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${neutral[500]};margin-bottom:10px;">Message</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td bgcolor="${neutral[50]}" style="padding:22px 24px;background-color:${neutral[50]};border-left:3px solid ${gold[500]};border-radius:0 6px 6px 0;font-family:${SANS};font-size:15px;line-height:1.7;color:${neutral[900]};">${safeMessage}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Reply button -->
          <tr>
            <td align="center" bgcolor="${white}" style="padding:32px 40px 44px;background-color:${white};">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" bgcolor="${navy[700]}" style="border-radius:6px;background-color:${navy[700]};border:1px solid ${gold[500]};">
                    <a href="${replyHref}" style="display:inline-block;padding:14px 34px;font-family:${SANS};font-size:13px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${gold[300]};text-decoration:none;">Reply to ${firstName} &nbsp;&rarr;</a>
                  </td>
                </tr>
              </table>
              <div style="margin-top:14px;font-family:${SANS};font-size:12px;color:${neutral[400]};">Or simply hit reply, it goes straight to ${safeEmail}</div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" bgcolor="${navy[900]}" style="padding:28px 32px;background-color:${navy[900]};border-radius:0 0 8px 8px;border-top:1px solid ${gold[600]};">
              <div style="font-family:${SERIF};font-size:14px;font-style:italic;letter-spacing:1px;color:${gold[400]};">Innovation. Inspiration. Excellence.</div>
              <div style="margin-top:10px;font-family:${SANS};font-size:12px;color:${navy[300]};">
                Sent from the contact form at
                <a href="${SITE_URL}" style="color:${gold[300]};text-decoration:none;">kalhara.vercel.app</a>
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;
}
