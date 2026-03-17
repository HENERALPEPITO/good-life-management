import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  // CORS (optional depending on if Vercel needs it, but good practice)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // --- Email 1: Notify GoodLife ---
    const { error: notifyError } = await resend.emails.send({
      from: 'GoodLife <noreply@goodlife-publishing.com>',
      to: 'hello@goodlifemgmt.net',
      subject: `Goodlife Management Inquiry: ${subject || 'N/A'}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (notifyError) {
      console.error('Resend notify error:', notifyError);
      return res.status(500).json({ error: notifyError.message });
    }

    // --- Email 2: Auto-reply to user ---
    const { error: replyError } = await resend.emails.send({
      from: 'GoodLife <noreply@goodlife-publishing.com>',
      to: email,
      subject: 'We have received your request – Thank you!',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for getting in touch! We received your message and will get back to you soon.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>GoodLife Management</strong></p>
      `,
    });

    if (replyError) {
      console.warn('Auto-reply warning:', replyError.message);
    }

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: err.message || 'Unknown server error' });
  }
}
