import nodemailer from "nodemailer";
import type { InsertContactMessage } from "@shared/schema";

function parsePort(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseSecure(value: string | undefined): boolean {
  return String(value).toLowerCase() === "true";
}

export function getEmailConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !to) {
    return {
      enabled: false as const,
      reason:
        "Missing email env vars. Required: SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL.",
    };
  }

  return {
    enabled: true as const,
    host,
    port: parsePort(process.env.SMTP_PORT, 587),
    secure: parseSecure(process.env.SMTP_SECURE),
    user,
    pass,
    to,
    from: process.env.CONTACT_FROM_EMAIL ?? user,
  };
}

export async function sendContactEmail(message: InsertContactMessage): Promise<void> {
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

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
