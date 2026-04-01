import { randomUUID } from "crypto";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactMessages = [];

const insertContactMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function parsePort(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseSecure(value) {
  return String(value).toLowerCase() === "true";
}

function getEmailConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !to) {
    return {
      enabled: false,
      reason:
        "Missing email env vars. Required: SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL.",
    };
  }

  return {
    enabled: true,
    host,
    port: parsePort(process.env.SMTP_PORT, 587),
    secure: parseSecure(process.env.SMTP_SECURE),
    user,
    pass,
    to,
    from: process.env.CONTACT_FROM_EMAIL ?? user,
  };
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendContactEmail(message) {
  const config = getEmailConfig();
  if (!config.enabled) {
    throw new Error(config.reason);
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  const submittedAt = new Date().toISOString();
  const subject = `Portfolio Contact: ${message.name}`;

  const text = [
    "New portfolio contact message",
    "",
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    message.message,
  ].join("\n");

  const html = `
    <h2>New portfolio contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(message.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(message.email)}</p>
    <p><strong>Submitted:</strong> ${submittedAt}</p>
    <p><strong>Message:</strong></p>
    <pre style="font-family:inherit;white-space:pre-wrap;line-height:1.5;">${escapeHtml(
      message.message,
    )}</pre>
  `;

  await transporter.sendMail({
    from: config.from,
    to: config.to,
    replyTo: message.email,
    subject,
    text,
    html,
  });
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      data: contactMessages,
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const validatedData = insertContactMessageSchema.parse(req.body ?? {});
    const entry = {
      ...validatedData,
      id: randomUUID(),
      timestamp: new Date().toISOString(),
    };

    contactMessages.unshift(entry);
    await sendContactEmail(validatedData);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully. We'll get back to you soon!",
      data: entry,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const details = error.issues.map((issue) => issue.message).join("; ");
      return res.status(400).json({
        success: false,
        error: details,
      });
    }

    if (error instanceof Error && error.message.includes("Missing email env vars")) {
      const config = getEmailConfig();
      return res.status(500).json({
        success: false,
        error: "Contact email is not configured on the server.",
        details: config.enabled ? undefined : config.reason,
      });
    }

    return res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    });
  }
}
