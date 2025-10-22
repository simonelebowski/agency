"use client";
import * as React from "react";

/** =======================
 *  DATA (EN + AR)
 *  ======================= */
type Lang = "en" | "ar";
type L<T = string> = { en: T; ar: T };

type FAQ  = { q: string; a: string };

type ServiceBlock = {
  id: string;                           // anchor id
  title: L;
  summary: L;
  paras: L<string[]>;
  faqs: { en: FAQ[]; ar: FAQ[] };
  notes: L;
  cta: L<{ primary: { label: string; href: string }, secondary?: { label: string; href: string } }>;
};

const SERVICES: ServiceBlock[] = [
  {
    id: "course-placement",
    title: { en: "Course Placement", ar: "توجيه واختيار الدورة" },
    summary: {
en: "Matching you with an accredited school that fits your level, timing, and budget.",
ar: "مطابقة معهد معتمد يلائم مستواك وتوقيتك وميزانيتك.",
    },
    paras: {
en: [
"We begin with your level, goals, constraints and timing. From there, we narrow to a short list of accredited schools that genuinely fit.",
"Each option is explained in plain language: weekly hours, class size, term dates, and the exact fee breakdown. You always know what you’re paying for and when.",
"When you choose, we coordinate the offer letter and enrollment and keep you informed at every step.",
],
ar: [
"نبدأ من مستواك وأهدافك وقيودك وتوقيتك. ثم نختصر الخيارات إلى قائمة معاهد معتمدة تناسبك فعليًا.",
"نشرح كل خيار بلغة واضحة: الساعات الأسبوعية وحجم الفصول وتواريخ الدراسة وتفصيل الرسوم بدقة. تعرف دائمًا ماذا ستدفع ومتى.",
"عند اختيارك، ننسّق خطاب القبول والتسجيل ونوافيك بالتحديثات في كل خطوة.",
],
},
    faqs: {
      en: [
        { q: "Are schools accredited?", a: "Yes—British Council, ACCET, Languages Canada, and more." },
        { q: "Can I apply to more than one school?", a: "Yes. We can prepare multiple applications so you can decide after receiving offers." },
        { q: "What if I don't know my level or the right course?", a: "No problem. We begin with a short chat about your goals and background, then suggest an online placement test. Based on the results, we recommend suitable levels and programs—from general English to academic or exam prep." }
      ],
      ar: [
        { q: "هل المعاهد معتمدة؟", a: "نعم—مثل British Council و ACCET و Languages Canada وغيرها." },
        { q: "هل يمكن التقديم على أكثر من معهد؟", a: "نعم، يمكننا تجهيز طلبات متعددة لتقرر بعد استلام العروض." },
        { q: "ماذا لو لم أعرف مستواي أو الدورة المناسبة؟", a: "لا مشكلة. نبدأ بمكالمة قصيرة عن أهدافك وخلفيتك، ثم نرشح اختبار مستوى بسيط عبر الإنترنت. بناءً على النتيجة نوصي بالمستوى والدورة الأنسب—سواء لغة عامة أو أكاديمية أو تحضيرية للاختبارات." }
      ],
    },
    notes: {
      en: "Contact us to discover all the courses available for you.",
      ar: "تواصل معنا لاكتشاف جميع الدورات المناسبة لك.",
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
paras: {
en: [
"You receive a tailored checklist based on course length, funding, and travel history. We clarify each document’s purpose and acceptable format.",
"We review forms and financial statements so details are consistent and easy to verify. If an interview is expected, we practice concise answers to the core questions.",
"No agency can guarantee a visa; our role is to raise quality and completeness so officers can decide quickly.",
],
ar: [
"تحصل على قائمة مستندات مخصصة حسب مدة الدورة والتمويل وسجل السفر. نوضح الغرض من كل مستند وصيغته المقبولة.",
"نراجع النماذج وكشوف الحساب لضمان الاتساق وسهولة التحقق. وإذا كانت هناك مقابلة، نتدرّب على إجابات مختصرة للأسئلة الأساسية.",
"لا يمكن لأي جهة ضمان التأشيرة؛ دورنا رفع جودة واكتمال الملف ليسهل البت فيه.",
],
},
    faqs: {
      en: [
        { q: "Do you guarantee approval?", a: "No agency can guarantee a visa. We help you submit a stronger, more complete file." },
        { q: "Can you fill out the application for me?", a: "We guide you through each field and review it before submission, but the applicant must submit personally for data accuracy and consent." },
        { q: "What if my visa was refused before?", a: "We review the previous refusal letter and highlight what can be improved before reapplying." },
      ],
      ar: [
        { q: "هل تضمنون القبول؟", a: "لا جهة تضمن التأشيرة. نساعدك على تقديم ملف أقوى وأكثر اكتمالاً." },
        { q: "هل تملؤون الطلب بالنيابة عني؟", a: "نرشدك في كل خانة ونراجع النموذج قبل التقديم، لكن يجب أن يقدّم الطالب الطلب بنفسه لضمان دقة البيانات والموافقة." },
        { q: "ماذا لو رُفضت تأشيرتي من قبل؟", a: "نراجع خطاب الرفض السابق ونبيّن نقاط التحسين قبل إعادة التقديم." },
      ],
    },
        notes: {
      en: "Contact us to start your visa preparation checklist.",
      ar: "تواصل معنا لبدء تجهيز قائمة التأشيرة الخاصة بك.",
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
paras: {
en: [
"We capture your preferences—budget, distance, privacy, and meal plans—then source options that truly match.",
"You get a simple brief for each: location, commute, house rules, payment schedule, and what’s included (utilities, internet, meals).",
"Once you choose, we handle reservations, confirmations, and arrival notes so check-in feels simple.",
],
ar: [
"نحدّد تفضيلاتك—الميزانية والقرب والخصوصية وخطة الوجبات—ثم نوفر خيارات تطابقها فعليًا.",
"نقدّم لكل خيار ملخصًا واضحًا: الموقع والتنقل وقواعد السكن وجدول الدفعات وما يشمله (الخدمات والإنترنت والوجبات).",
"بعد اختيارك، نتولى الحجز والتأكيدات وملاحظات الوصول ليكون تسجيل الدخول سهلاً.",
],
},
faqs: {
  en: [
    { q: "Do you inspect the options?", a: "We rely on vetted partner agencies and verified listings with recent photos." },
    { q: "Can I change my host family?", a: "Yes, within the first two weeks if there’s a clear mismatch, subject to availability." },
    { q: "Are utilities included?", a: "Almost always. We list any extra costs—like laundry or extra meals—upfront." },
  ],
  ar: [
    { q: "هل تفحصون أماكن السكن؟", a: "نعم، نعمل مع جهات معتمدة وقوائم موثقة بصور حديثة." },
    { q: "هل يمكنني تغيير العائلة المضيفة؟", a: "نعم، خلال أول أسبوعين في حال عدم التوافق، حسب توفر البدائل." },
    { q: "هل تشمل الأسعار الخدمات؟", a: "في الغالب نعم، ونوضح أي تكاليف إضافية مثل الغسيل أو الوجبات الإضافية." },
  ]
},
    notes: {
      en: "Contact us to see verified housing options for your dates.",
      ar: "تواصل معنا للاطلاع على خيارات السكن الموثوقة لتواريخك.",
    },
    cta: {
            en: { primary: { label: "See housing options", href: "https://wa.me/966500000000" }, secondary: { label: "Contact form", href: "/en/contact" } },
                  ar: { primary: { label: "خيارات السكن", href: "https://wa.me/966500000000" }, secondary: { label: "نموذج التواصل", href: "/contact" } },
    }
  },
  {
    id: "airport-pickup",
    title: { en: "Airport Pickup", ar: "الاستقبال بالمطار" },
    summary: {
      en: "Meet-and-greet at arrivals, flight monitoring, and safe drop-off. 24/7 escalation if needed.",
      ar: "استقبال عند الوصول، متابعة الرحلة، وتوصيل آمن. تصعيد على مدار الساعة عند الحاجة.",
    },
paras: {
en: [
"Share your flight and destination; we schedule a vetted driver who monitors your arrival.",
"We send precise meeting instructions and a direct contact so you know exactly where to go after landing.",
"If plans change, we coordinate adjustments and keep you updated in real time.",
],
ar: [
"شاركنا رحلتك ووجهتك؛ نرتّب سائقًا معتمدًا يتابع وصولك.",
"نرسل تعليمات لقاء دقيقة ووسيلة تواصل مباشرة لتعرف إلى أين تتجه بعد الهبوط.",
"إذا تغيرت الخطة، ننسّق التعديلات ونبقيك على اطلاع لحظة بلحظة.",
],
},
faqs: {
  en: [
    { q: "How do I recognize the driver?", a: "You’ll receive a name, phone number, and photo or plate number 24h before arrival." },
    { q: "What if my flight is delayed?", a: "We track your flight in real time and adjust pickup automatically." },
    { q: "Can I bring extra luggage?", a: "Yes—just mention it in advance so we assign an appropriate vehicle." },
    { q: "Do you offer return to airport?", a: "Yes, choose the 'Return' tier when booking for both arrival and departure." },
  ],
  ar: [
    { q: "كيف أتعرف على السائق؟", a: "نرسل الاسم ورقم الهاتف وصورة أو رقم اللوحة قبل 24 ساعة من الوصول." },
    { q: "ماذا لو تأخرت الرحلة؟", a: "نتابع رحلتك مباشرة ونضبط موعد الاستقبال تلقائيًا." },
    { q: "هل يمكنني حمل حقائب إضافية؟", a: "نعم، فقط أبلغنا مسبقًا لنرتب سيارة مناسبة." },
    { q: "هل توفرون العودة للمطار؟", a: "نعم، اختر باقة “ذهاب وعودة” عند الحجز." },
  ]
},
    notes: {
      en: "Contact us to book your airport pickup in advance.",
      ar: "تواصل معنا لحجز خدمة الاستقبال بالمطار مسبقًا.",
    },
    cta: {
      en: { primary: { label: "Book pickup", href: "https://wa.me/966500000000" } },
      ar: { primary: { label: "احجز الاستقبال", href: "https://wa.me/966500000000" } },
    },
  },
];

/** =======================
 *  UI HELPERS (no deps)
 *  ======================= */
function SectionCard({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border bg-white/80 p-6">{children}</div>;
}

/** =======================
 *  MAIN PAGE  *
 *  ======================= */
export default function ServicesAllPage({lang}: { lang: Lang }) {
  const isRTL = lang === "ar";

  // Smooth scroll for anchor jumps
  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.style.scrollBehavior = "auto";
      }
    };
  }, []);

const Hairline = () => (
<hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} lang={lang} className="min-h-screen bg-[radial-gradient(60rem_30rem_at_50%_-10%,rgba(99,102,241,0.06),transparent_60%),radial-gradient(50rem_25rem_at_100%_10%,rgba(79,70,229,0.05),transparent_60%)]">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Page header */}
        <header className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm">
          <p className="text-xs tracking-wide text-slate-500">
            {isRTL ? "خدمات برايت باث" : "Bright Path Services"}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold mt-2">
            {isRTL ? "خدمات تفصيلية: من الترشيح حتى الوصول" : "Detailed services: from placement to arrival"}
          </h1>
          <p className="text-slate-700 mt-2">
            {isRTL ? "اختَر الخدمة التي تحتاجها واقرأ التفاصيل الكاملة والأسعار وخطوات العمل." : "Pick the service you need and see full details, pricing, and steps."}
          </p>

          {/* TOC */}
          <nav className="mt-4" aria-label={isRTL ? "جدول المحتويات" : "Table of contents"}>
            <ul className="flex flex-wrap gap-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    className="px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                    href={`#${s.id}`}
                  >
                    {s.title[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Sections */}
        <main className="mt-6 space-y-10">
          {SERVICES.map((s, idx) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <SectionCard>
                <header>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{s.title[lang]}</h2>
                  </div>
                  <p className="mt-1 italic text-slate-700">{s.summary[lang]}</p>
                </header>

                {/* Copy */}
                <div className="mt-4 space-y-5 text-[17px] leading-8 text-slate-800">
                  {s.paras[lang].map((p, i) => (
                    <p
                      key={i}
                      className={i === 0 ? "first-letter:text-4xl first-letter:font-semibold first-letter:leading-[0.9] first-letter:me-1.5 first-letter:text-indigo-700" : ""}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {/* FAQs */}
                {s.faqs && s.faqs[lang]?.length ? (
                  <div className="mt-6 rounded-xl border bg-white p-4">
                    <div className="font-semibold">{isRTL ? "الأسئلة الشائعة" : "FAQs"}</div>
                    <div className="mt-2 space-y-2">
                      {s.faqs[lang].map((f, i) => (
                        <details key={i} className="rounded-lg border bg-white p-3">
                          <summary className="cursor-pointer font-medium focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded">
                            {f.q}
                          </summary>
                          <p className="text-sm text-slate-600 mt-1">{f.a}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                ) : null}

                {/* Per-section CTA */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm text-slate-600">
                    {s.notes[lang]}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={s.cta[lang].primary.href}
                      className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                    >
                      {s.cta[lang].primary.label}
                    </a>
                    {s.cta[lang].secondary ? (
                      <a
                        href={s.cta[lang].secondary.href}
                        className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-300"
                      >
                        {s.cta[lang].secondary!.label}
                      </a>
                    ) : null}
                  </div>
                </div>
              </SectionCard>

              {idx < SERVICES.length - 1 && <Hairline />}
            </section>
          ))}
        </main>

        {/* Final CTA */}
        <section className="mt-8 rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-semibold">{isRTL ? "جاهز للبدء؟" : "Ready to start?"}</div>
            <div className="text-sm text-slate-600">{isRTL ? "احجز استشارة مجانية 15 دقيقة أو تواصل عبر واتساب." : "Book a free 15-minute consult or chat on WhatsApp."}</div>
          </div>
          <div className="flex gap-2">
            <a href="https://wa.me/966500000000" className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 focus-visible:outline-none focus-visible:ring focus-visible:ring-green-300">WhatsApp</a>
            <a href={isRTL ? "/contact" : "/en/contact"} className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-300">{isRTL ? "نموذج التواصل" : "Contact form"}</a>
          </div>
        </section>
      </div>
    </div>
  );
}
