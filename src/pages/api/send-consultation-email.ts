import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { 
    name, 
    email, 
    company, 
    message, 
    consultationType,
    date, 
    time 
  } = req.body;

  // Configure your email transport
  const transporter = createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Email to the company
  const companyMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.COMPANY_EMAIL, // Your company email address
    subject: `New Consultation Request: ${name}`,
    html: `
      <h1>New Consultation Request</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Consultation Type:</strong> ${consultationType}</p>
      <p><strong>Scheduled Date:</strong> ${date} at ${time}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No additional message provided'}</p>
    `,
  };

  // Email to the client (confirmation)
  const clientMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Your Consultation Scheduled for ${date}`,
    html: `
      <h1>Thank you for scheduling a consultation</h1>
      <p>Dear ${name},</p>
      <p>Your ${consultationType} has been scheduled for <strong>${date} at ${time}</strong>.</p>
      ${company ? `<p>Company: ${company}</p>` : ''}
      <p>We look forward to speaking with you about:</p>
      <p><em>${message || 'No additional details provided'}</em></p>
      <p>If you need to reschedule or have any questions, please reply to this email.</p>
      <p>Best regards,</p>
      <p>Your Company Team</p>
    `,
  };

  try {
    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(clientMailOptions);
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ message: 'Error sending emails' });
  }
}