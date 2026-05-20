import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Payload = {
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string, now: number) {
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

function sanitizeInput(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

async function sendLeadByEmail(payload: Required<Pick<Payload, "company" | "email" | "phone" | "message">>) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!host || !port || !user || !pass || !to) {
    console.warn("[KBP] SMTP non configure, demande non envoyee par email.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user,
      pass
    }
  });

  const from = process.env.SMTP_FROM ?? user;

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `[KBP] Nouvelle demande de devis - ${payload.company}`,
    text: [
      "Nouvelle demande de devis recue.",
      "",
      `Entreprise: ${payload.company}`,
      `Email: ${payload.email}`,
      `Telephone: ${payload.phone}`,
      "",
      "Message:",
      payload.message
    ].join("\n")
  });
}

export async function POST(request: Request) {
  const data = (await request.json()) as Payload;
  const now = Date.now();
  const ip = getClientIp(request);

  if (isRateLimited(ip, now)) {
    return NextResponse.json({ error: "Trop de tentatives, merci de reessayer plus tard." }, { status: 429 });
  }

  // Honeypot field: if filled, treat as bot and return success to avoid signal.
  if (data.website && data.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!data.company || !data.email || !data.phone || !data.message) {
    return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
  }

  if (!isValidEmail(data.email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  const company = sanitizeInput(data.company);
  const email = sanitizeInput(data.email);
  const phone = sanitizeInput(data.phone);
  const message = data.message.trim();

  if (company.length < 2 || company.length > 120 || phone.length < 6 || phone.length > 30 || message.length < 10 || message.length > 2000) {
    return NextResponse.json({ error: "Donnees invalides" }, { status: 400 });
  }

  console.info("[KBP] Nouvelle demande de devis", {
    company,
    email,
    phone,
    messageLength: message.length,
    ip,
    createdAt: new Date().toISOString()
  });

  try {
    await sendLeadByEmail({ company, email, phone, message });
  } catch (error) {
    console.error("[KBP] Erreur envoi SMTP", error);
    return NextResponse.json({ error: "Impossible d'envoyer votre demande pour le moment." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
