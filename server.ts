import express from 'express';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send', async (req, res) => {
  // Hard timeout — client will never hang indefinitely
  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      console.error('Request timed out');
      res.status(504).json({ error: 'Request timed out' });
    }
  }, 10000);

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      clearTimeout(timeout);
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // --- Email 1: Notify GoodLife ---
    const { error: notifyError } = await resend.emails.send({
      from: 'GoodLife <noreply@goodlife-publishing.com>',
      to: 'hello@goodlife-publishing.com',
      subject: `Goodlife Management Inquiry`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (notifyError) {
      clearTimeout(timeout);
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
      // Don't fail the whole request if auto-reply fails — just log it
      console.warn('Auto-reply warning:', replyError.message);
    }

    clearTimeout(timeout);
    return res.status(200).json({ success: true, message: 'Message sent successfully' });

  } catch (err: any) {
    clearTimeout(timeout);
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: err.message || 'Unknown server error' });
  }
});

async function startServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  // Vite MUST come after API routes or it intercepts /api/send
  app.use(vite.middlewares);

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();