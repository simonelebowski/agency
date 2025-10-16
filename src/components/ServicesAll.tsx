"use client";
import * as React from "react";

/** =======================
 *  DATA (EN + AR)
 *  ======================= */
type Lang = "en" | "ar";
type L<T = string> = { en: T; ar: T };

type Tier = { name: L; price: L; includes: L<string[]>; note?: L };
type Step = { title: string; desc: string };
type FAQ  = { q: string; a: string };

type ServiceBlock = {
  id: string;                           // anchor id
  title: L;
  summary: L;
  included: L<string[]>;
  steps: { en: Step[]; ar: Step[] };
  tiers: Tier[];
  faqs?: { en: FAQ[]; ar: FAQ[] };
  cta: L<{ primary: { label: string; href: string }, secondary?: { label: string; href: string } }>;
};

const SERVICES: ServiceBlock[] = [
  {
    id: "course-placement",
    title: { en: "Course Placement", ar: "توجيه واختيار الدورة" },
    summary: {
      en: "We assess your level and goals, compare accredited schools with transparent fees, and secure your offer letter.",
      ar: "نقيّم مستواك وأهدافك، ونقارن المعاهد المعتمدة برسوم واضحة، ونؤمّن خطاب القبول.",
    },
    included: {
      en: ["Level check & goals", "3–5 school shortlist with pros/cons", "Offer letter & enrollment", "Fee breakdown & due dates"],
      ar: ["تقييم المستوى والأهداف", "قائمة مختصرة 3–5 معاهد مع المزايا والعيوب", "خطاب القبول والتسجيل", "تفصيل الرسوم ومواعيد السداد"],
    },
    steps: {
      en: [
        { title: "Consult", desc: "Quick call + level check & constraints" },
        { title: "Match",  desc: "Shortlist 3–5 schools with pricing & calendar" },
        { title: "Enroll", desc: "Offer letter + invoice guidance" },
      ],
      ar: [
        { title: "استشارة", desc: "مكالمة سريعة + فحص مستوى والقيود" },
        { title: "مطابقة",  desc: "قائمة مختصرة 3–5 معاهد مع الأسعار والتقويم" },
        { title: "تسجيل",   desc: "خطاب القبول + إرشادات الفاتورة" },
      ],
    },
    tiers: [
      {
        name: { en: "Starter", ar: "بداية" },
        price: { en: "Free", ar: "مجاني" },
        includes: {
          en: ["Consultation", "Shortlist", "Offer letter"],
          ar: ["استشارة", "قائمة مختصرة", "خطاب قبول"],
        },
        note: {
          en: "Schools pay us a referral fee. You pay tuition directly.",
          ar: "العمولة من المعهد. الرسوم الدراسية تدفعها مباشرةً.",
        },
      },
      {
        name: { en: "Plus", ar: "بلس" },
        price: { en: "SAR 499", ar: "499 ر.س" },
        includes: {
          en: ["Everything in Starter", "Payment reminders", "Basic visa document check"],
          ar: ["كل ما في بداية", "تذكير بمواعيد الدفع", "تحقق أساسي لمستندات التأشيرة"],
        },
      },
    ],
    faqs: {
      en: [
        { q: "Are schools accredited?", a: "Yes—British Council, ACCET, Languages Canada, and more." },
        { q: "Any hidden fees?", a: "No. We show all school fees and optional service fees upfront." },
      ],
      ar: [
        { q: "هل المعاهد معتمدة؟", a: "نعم—مثل British Council و ACCET و Languages Canada وغيرها." },
        { q: "هل توجد رسوم مخفية؟", a: "لا. نعرض جميع الرسوم الدراسية ورسوم الخدمات بشكل واضح." },
      ],
    },
    cta: {
      en: { primary: { label: "Get matched", href: "https://wa.me/966500000000" }, secondary: { label: "Contact form", href: "/en/contact" } },
      ar: { primary: { label: "اطلب الترشيحات", href: "https://wa.me/966500000000" }, secondary: { label: "نموذج التواصل", href: "/contact" } },
    },
  },
  {
    id: "visa-guidance",
    title: { en: "Visa Guidance", ar: "إرشاد التأشيرة" },
    summary: {
      en: "Tailored document checklist, form review, and mock interview—no agency can guarantee a visa, but we raise your readiness.",
      ar: "قائمة مستندات مخصصة، ومراجعة النماذج، ومقابلة تجريبية—لا أحد يضمن التأشيرة، لكن نرفع جاهزيتك.",
    },
    included: {
      en: ["Document checklist & templates", "Form & statement review", "Mock interview (Q&A)"],
      ar: ["قائمة مستندات ونماذج", "مراجعة النماذج وكشوف الحساب", "مقابلة تجريبية (أسئلة وأجوبة)"],
    },
    steps: {
      en: [
        { title: "Checklist", desc: "We tailor what you need to prepare" },
        { title: "Review", desc: "We check forms & financials" },
        { title: "Practice", desc: "Mock interview & feedback" },
      ],
      ar: [
        { title: "القائمة", desc: "نحدد ما يلزمك من مستندات" },
        { title: "المراجعة", desc: "نراجع النماذج والمالية" },
        { title: "التدريب", desc: "مقابلة تجريبية وملاحظات" },
      ],
    },
    tiers: [
      {
        name: { en: "Basic", ar: "أساسي" },
        price: { en: "SAR 399", ar: "399 ر.س" },
        includes: {
          en: ["Checklist", "Form review"],
          ar: ["قائمة المستندات", "مراجعة النماذج"],
        },
      },
      {
        name: { en: "Premium", ar: "بريميوم" },
        price: { en: "SAR 899", ar: "899 ر.س" },
        includes: {
          en: ["Everything in Basic", "Mock interview", "Priority responses"],
          ar: ["كل ما في أساسي", "مقابلة تجريبية", "أولوية الرد"],
        },
      },
    ],
    faqs: {
      en: [{ q: "Do you guarantee approval?", a: "No agency can guarantee a visa. We help you submit a stronger, more complete file." }],
      ar: [{ q: "هل تضمنون القبول؟", a: "لا جهة تضمن التأشيرة. نساعدك على تقديم ملف أقوى وأكثر اكتمالاً." }],
    },
    cta: {
      en: { primary: { label: "Start visa checklist", href: "https://wa.me/966500000000" } },
      ar: { primary: { label: "ابدأ قائمة التأشيرة", href: "https://wa.me/966500000000" } },
    },
  },
  {
    id: "accommodation",
    title: { en: "Accommodation", ar: "السكن" },
    summary: {
      en: "We shortlist homestay, residence, or private rentals, handle booking and confirmations, and share arrival instructions.",
      ar: "نرشح السكن العائلي أو الطلابي أو الخاص، ونتولى الحجز والتأكيدات، ونزوّدك بإرشادات الوصول.",
    },
    included: {
      en: ["3–4 matched options", "Booking & confirmations", "Arrival instructions & contacts"],
      ar: ["3–4 خيارات مناسبة", "الحجز والتأكيدات", "إرشادات الوصول وبيانات التواصل"],
    },
    steps: {
      en: [
        { title: "Profile", desc: "Budget, location, preferences" },
        { title: "Options", desc: "Shortlist + photos & terms" },
        { title: "Book", desc: "Reservation & confirmation pack" },
      ],
      ar: [
        { title: "الملف", desc: "الميزانية والموقع والتفضيلات" },
        { title: "الخيارات", desc: "قائمة مختصرة + صور وشروط" },
        { title: "الحجز", desc: "الحجز وحزمة التأكيد" },
      ],
    },
    tiers: [
      {
        name: { en: "Finder", ar: "بحث" },
        price: { en: "SAR 299", ar: "299 ر.س" },
        includes: {
          en: ["3–4 options", "Booking support"],
          ar: ["3–4 خيارات", "دعم الحجز"],
        },
      },
      {
        name: { en: "Concierge", ar: "خدمة شاملة" },
        price: { en: "SAR 699", ar: "699 ر.س" },
        includes: {
          en: ["Everything in Finder", "Lease review", "Move-in checklist"],
          ar: ["كل ما في بحث", "مراجعة العقد", "قائمة الانتقال"],
        },
      },
    ],
    cta: {
      en: { primary: { label: "See housing options", href: "https://wa.me/966500000000" }, secondary: { label: "Contact form", href: "/en/contact" } },
      ar: { primary: { label: "خيارات السكن", href: "https://wa.me/966500000000" }, secondary: { label: "نموذج التواصل", href: "/contact" } },
    },
  },
  {
    id: "airport-pickup",
    title: { en: "Airport Pickup", ar: "الاستقبال بالمطار" },
    summary: {
      en: "Meet-and-greet at arrivals, flight monitoring, and safe drop-off. 24/7 escalation if needed.",
      ar: "استقبال عند الوصول، متابعة الرحلة، وتوصيل آمن. تصعيد على مدار الساعة عند الحاجة.",
    },
    included: {
      en: ["Meet & greet", "Flight monitoring", "Emergency contact"],
      ar: ["استقبال وترحيب", "متابعة الرحلة", "وسيلة تواصل للطوارئ"],
    },
    steps: {
      en: [
        { title: "Details", desc: "Share flight & destination" },
        { title: "Confirm", desc: "Assign driver & tracking" },
        { title: "Arrive", desc: "Meet at gate & drop-off" },
      ],
      ar: [
        { title: "البيانات", desc: "مشاركة الرحلة والوجهة" },
        { title: "تأكيد", desc: "تحديد السائق والتتبع" },
        { title: "وصول", desc: "استقبال عند البوابة والتوصيل" },
      ],
    },
    tiers: [
      {
        name: { en: "One-way", ar: "اتجاه واحد" },
        price: { en: "SAR 199", ar: "199 ر.س" },
        includes: {
          en: ["Pickup to housing/school"],
          ar: ["استقبال إلى السكن/المعهد"],
        },
      },
      {
        name: { en: "Return", ar: "ذهاب وعودة" },
        price: { en: "SAR 349", ar: "349 ر.س" },
        includes: {
          en: ["Pickup + return to airport"],
          ar: ["استقبال + العودة للمطار"],
        },
      },
    ],
    cta: {
      en: { primary: { label: "Book pickup", href: "https://wa.me/966500000000" } },
      ar: { primary: { label: "احجز الاستقبال", href: "https://wa.me/966500000000" } },
    },
  },
];

/** =======================
 *  UI HELPERS (no deps)
 *  ======================= */
const IconDot = () => <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />;

function SectionCard({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border bg-white/80 p-6">{children}</div>;
}

function TierCard({ title, price, items, note }: { title: string; price: string; items: string[]; note?: string }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="font-semibold">{title}</div>
        <div className="text-sm">{price}</div>
      </div>
      <ul className="mt-2 text-sm list-disc ps-6 space-y-1">
        {items.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
      {note && <div className="mt-2 text-xs text-slate-500">{note}</div>}
    </div>
  );
}

/** =======================
 *  MAIN PAGE COMPONENT
 *  ======================= */
export default function ServicesAll({ lang }: { lang: Lang }) {
  const isRTL = lang === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <header className="rounded-2xl border bg-white/80 p-6">
        <div className="inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full border bg-white">
          <IconDot /> {isRTL ? "خدماتنا" : "Our Services"}
        </div>
        <h1 className="text-2xl font-bold mt-3">
          {isRTL ? "خدمات تفصيلية: من الترشيح حتى الوصول" : "Detailed services: from placement to arrival"}
        </h1>
        <p className="text-slate-700 mt-2">
          {isRTL
            ? "اختَر الخدمة التي تحتاجها واقرأ التفاصيل الكاملة والأسعار وخطوات العمل."
            : "Pick the service you need and see full details, pricing, and steps."}
        </p>

        {/* Table of contents */}
        <nav className="mt-4 text-sm">
          <ul className="flex flex-wrap gap-2">
            {SERVICES.map(s => (
              <li key={s.id}>
                <a className="px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50"
                   href={`#${s.id}`}>{s.title[lang]}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Service sections */}
      <div className="mt-6 space-y-8">
        {SERVICES.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <SectionCard>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{s.title[lang]}</h2>
                  <p className="text-slate-700 mt-1">{s.summary[lang]}</p>
                </div>
                <a
                  href={s.cta[lang].primary.href}
                  className="h-9 px-3 rounded-xl bg-green-600 text-white hover:bg-green-700 text-sm flex items-center"
                >
                  {s.cta[lang].primary.label}
                </a>
              </div>

              <div className="mt-5 grid lg:grid-cols-12 gap-5">
                {/* Left: details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="rounded-xl border bg-white p-4">
                    <div className="font-semibold">{isRTL ? "يشمل" : "What’s included"}</div>
                    <ul className="mt-2 list-disc ps-6 text-sm text-slate-700 space-y-1">
                      {s.included[lang].map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                  </div>

                  <div className="rounded-xl border bg-white p-4">
                    <div className="font-semibold">{isRTL ? "الخطوات" : "Steps"}</div>
                    <ol className="mt-2 grid sm:grid-cols-2 gap-3 text-sm">
                      {s.steps[lang].map((st, i) => (
                        <li key={i} className="rounded-lg border bg-white p-3">
                          <div className="text-xs text-slate-500">{isRTL ? `خطوة ${i + 1}` : `Step ${i + 1}`}</div>
                          <div className="font-medium">{st.title}</div>
                          <div className="text-slate-600">{st.desc}</div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {s.faqs && (
                    <div className="rounded-xl border bg-white p-4">
                      <div className="font-semibold">{isRTL ? "الأسئلة الشائعة" : "FAQs"}</div>
                      <div className="mt-2 space-y-2">
                        {s.faqs[lang].map((f, i) => (
                          <details key={i} className="rounded-lg border bg-white p-3">
                            <summary className="cursor-pointer font-medium">{f.q}</summary>
                            <p className="text-sm text-slate-600 mt-1">{f.a}</p>
                          </details>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: pricing + secondary CTA */}
                <aside className="lg:col-span-5 space-y-4">
                  <div className="rounded-xl border bg-white p-4">
                    <div className="font-semibold">{isRTL ? "الباقات" : "Packages"}</div>
                    <div className="mt-3 grid sm:grid-cols-2 gap-3">
                      {s.tiers.map((t, i) => (
                        <TierCard
                          key={i}
                          title={t.name[lang]}
                          price={t.price[lang]}
                          items={t.includes[lang]}
                          note={t.note?.[lang]}
                        />
                      ))}
                    </div>
                  </div>

                  {s.cta[lang].secondary && (
                    <a
                      href={s.cta[lang].secondary!.href}
                      className="w-full text-center px-4 py-2 rounded-xl border bg-white hover:bg-slate-50 text-sm inline-block"
                    >
                      {s.cta[lang].secondary!.label}
                    </a>
                  )}
                </aside>
              </div>
            </SectionCard>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <section className="mt-8 rounded-2xl border bg-white/80 p-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-semibold">{isRTL ? "جاهز للبدء؟" : "Ready to start?"}</div>
          <div className="text-sm text-slate-600">
            {isRTL ? "احجز استشارة مجانية 15 دقيقة أو تواصل عبر واتساب." : "Book a free 15-minute consult or chat on WhatsApp."}
          </div>
        </div>
        <div className="flex gap-2">
          <a href="https://wa.me/966500000000" className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700">WhatsApp</a>
          <a href={isRTL ? "/contact" : "/en/contact"} className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-50">
            {isRTL ? "نموذج التواصل" : "Contact form"}
          </a>
        </div>
      </section>
    </div>
  );
}
