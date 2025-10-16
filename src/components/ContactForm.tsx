"use client";
import * as React from "react";

type Lang = "ar" | "en";

const LABELS = {
  en: {
    heading: "Send us a message",
    name: "Full name",
    email: "Email",
    phone: "Phone (optional)",
    message: "How can we help?",
    submit: "Send message",
    sending: "Sending...",
    success: "Thanks! We received your message and will reply shortly.",
    error: "Something went wrong. Please try again or use WhatsApp.",
  },
  ar: {
    heading: "أرسل لنا رسالة",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "الجوال (اختياري)",
    message: "كيف نساعدك؟",
    submit: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    success: "شكرًا! استلمنا رسالتك وسنرد قريبًا.",
    error: "حدث خطأ. حاول مرة أخرى أو تواصل عبر واتساب.",
  },
};

export default function ContactForm({ lang }: { lang: Lang }) {
  const L = LABELS[lang];
  const isRTL = lang === "ar";

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "sending" | "ok" | "err">("idle");

  const onChange =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("err");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });
      if (!res.ok) throw new Error("Bad status");
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("err");
    }
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="rounded-2xl border bg-white/80 p-6">
      <h2 className="text-lg font-semibold">{L.heading}</h2>
      <form onSubmit={onSubmit} className="mt-4 grid gap-3">
        <label className="block">
          <span className="text-sm text-slate-700">{L.name}</span>
          <input
            value={form.name}
            onChange={onChange("name")}
            required
            className="mt-1 w-full rounded-xl border p-3 bg-white"
            placeholder={lang === "ar" ? "الاسم" : "John Doe"}
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-700">{L.email}</span>
          <input
            type="email"
            value={form.email}
            onChange={onChange("email")}
            required
            className="mt-1 w-full rounded-xl border p-3 bg-white"
            placeholder="name@email.com"
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-700">{L.phone}</span>
          <input
            type="tel"
            value={form.phone}
            onChange={onChange("phone")}
            className="mt-1 w-full rounded-xl border p-3 bg-white"
            placeholder={lang === "ar" ? "05xxxxxxxx" : "+9665xxxxxxxx"}
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-700">{L.message}</span>
          <textarea
            value={form.message}
            onChange={onChange("message")}
            required
            rows={5}
            className="mt-1 w-full rounded-xl border p-3 bg-white"
            placeholder={lang === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-xl bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 disabled:opacity-60"
          >
            {status === "sending" ? L.sending : L.submit}
          </button>
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border px-4 py-2 bg-white hover:bg-slate-50"
          >
            WhatsApp
          </a>
        </div>

        {status === "ok" && (
          <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl p-3">
            {L.success}
          </div>
        )}
        {status === "err" && (
          <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
            {L.error}
          </div>
        )}
      </form>
    </div>
  );
}
