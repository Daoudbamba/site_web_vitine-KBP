"use client";

import { useState } from "react";

type FormState = {
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  company: "",
  email: "",
  phone: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-white p-8 shadow-soft" aria-describedby="contact-status">
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-kbp-slate">
          Entreprise
        </label>
        <input
          id="company"
          required
          value={form.company}
          onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-kbp-ink outline-none transition focus:border-kbp-red"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-kbp-slate">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-kbp-ink outline-none transition focus:border-kbp-red"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-kbp-slate">
          Telephone
        </label>
        <input
          id="phone"
          required
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-kbp-ink outline-none transition focus:border-kbp-red"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase tracking-wider text-kbp-slate">
          Besoin
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-kbp-ink outline-none transition focus:border-kbp-red"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-2xl bg-kbp-red px-6 py-3 text-lg font-semibold text-white transition hover:bg-kbp-redDark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Envoi en cours..." : "Demander un devis"}
      </button>

      <p id="contact-status" role="status" className="text-sm text-kbp-slate">
        {status === "success" && "Votre demande a ete envoyee. Nous revenons vers vous rapidement."}
        {status === "error" && "Une erreur est survenue, merci de reessayer."}
      </p>
    </form>
  );
}
