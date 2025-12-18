
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, service, otherService, source, otherSource, message } = request.body;

    if (!name || !email || !service || !source || !message) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'peddamallanavadeep@gmail.com',
      subject: 'New Contact Form Submission from your Website',
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service of Interest:</strong> ${service === 'Other' ? otherService : service}</p>
        <p><strong>How they heard about us:</strong> ${source === 'Other' ? otherSource : source}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return response.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}
