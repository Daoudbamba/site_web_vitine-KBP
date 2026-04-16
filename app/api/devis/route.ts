import { NextResponse } from "next/server";

type Payload = {
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const data = (await request.json()) as Payload;

  if (!data.company || !data.email || !data.phone || !data.message) {
    return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
  }

  if (!isValidEmail(data.email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  console.info("[KBP] Nouvelle demande de devis", {
    company: data.company,
    email: data.email,
    phone: data.phone,
    messageLength: data.message.length,
    createdAt: new Date().toISOString()
  });

  return NextResponse.json({ ok: true });
}
