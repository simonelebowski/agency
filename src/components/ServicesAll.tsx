// "use client";
// import * as React from "react";

// /** =======================
//  *  DATA (EN + AR)
//  *  ======================= */
// type Lang = "en" | "ar";
// type L<T = string> = { en: T; ar: T };

// type Tier = { name: L; price: L; includes: L<string[]>; note?: L };
// type Step = { title: string; desc: string };
// type FAQ  = { q: string; a: string };

// type ServiceBlock = {
//   id: string;                           // anchor id
//   title: L;
//   summary: L;
//   included: L<string[]>;
//   steps: { en: Step[]; ar: Step[] };
//   tiers: Tier[];
//   faqs?: { en: FAQ[]; ar: FAQ[] };
//   cta: L<{ primary: { label: string; href: string }, secondary?: { label: string; href: string } }>;
// };

// const SERVICES: ServiceBlock[] = [
//   {
//     id: "course-placement",
//     title: { en: "Course Placement", ar: "توجيه واختيار الدورة" },
//     summary: {
//       en: "We assess your level and goals, compare accredited schools with transparent fees, and secure your offer letter.",
//       ar: "نقيّم مستواك وأهدافك، ونقارن المعاهد المعتمدة برسوم واضحة، ونؤمّن خطاب القبول.",
//     },
//     included: {
//       en: ["Level check & goals", "3–5 school shortlist with pros/cons", "Offer letter & enrollment", "Fee breakdown & due dates"],
//       ar: ["تقييم المستوى والأهداف", "قائمة مختصرة 3–5 معاهد مع المزايا والعيوب", "خطاب القبول والتسجيل", "تفصيل الرسوم ومواعيد السداد"],
//     },
//     steps: {
//       en: [
//         { title: "Consult", desc: "Quick call + level check & constraints" },
//         { title: "Match",  desc: "Shortlist 3–5 schools with pricing & calendar" },
//         { title: "Enroll", desc: "Offer letter + invoice guidance" },
//       ],
//       ar: [
//         { title: "استشارة", desc: "مكالمة سريعة + فحص مستوى والقيود" },
//         { title: "مطابقة",  desc: "قائمة مختصرة 3–5 معاهد مع الأسعار والتقويم" },
//         { title: "تسجيل",   desc: "خطاب القبول + إرشادات الفاتورة" },
//       ],
//     },
//     tiers: [
//       {
//         name: { en: "Starter", ar: "بداية" },
//         price: { en: "Free", ar: "مجاني" },
//         includes: {
//           en: ["Consultation", "Shortlist", "Offer letter"],
//           ar: ["استشارة", "قائمة مختصرة", "خطاب قبول"],
//         },
//         note: {
//           en: "Schools pay us a referral fee. You pay tuition directly.",
//           ar: "العمولة من المعهد. الرسوم الدراسية تدفعها مباشرةً.",
//         },
//       },
//       {
//         name: { en: "Plus", ar: "بلس" },
//         price: { en: "SAR 499", ar: "499 ر.س" },
//         includes: {
//           en: ["Everything in Starter", "Payment reminders", "Basic visa document check"],
//           ar: ["كل ما في بداية", "تذكير بمواعيد الدفع", "تحقق أساسي لمستندات التأشيرة"],
//         },
//       },
//     ],
//     faqs: {
//       en: [
//         { q: "Are schools accredited?", a: "Yes—British Council, ACCET, Languages Canada, and more." },
//         { q: "Any hidden fees?", a: "No. We show all school fees and optional service fees upfront." },
//       ],
//       ar: [
//         { q: "هل المعاهد معتمدة؟", a: "نعم—مثل British Council و ACCET و Languages Canada وغيرها." },
//         { q: "هل توجد رسوم مخفية؟", a: "لا. نعرض جميع الرسوم الدراسية ورسوم الخدمات بشكل واضح." },
//       ],
//     },
//     cta: {
//       en: { primary: { label: "Get matched", href: "https://wa.me/966500000000" }, secondary: { label: "Contact form", href: "/en/contact" } },
//       ar: { primary: { label: "اطلب الترشيحات", href: "https://wa.me/966500000000" }, secondary: { label: "نموذج التواصل", href: "/contact" } },
//     },
//   },
//   {
//     id: "visa-guidance",
//     title: { en: "Visa Guidance", ar: "إرشاد التأشيرة" },
//     summary: {
//       en: "Tailored document checklist, form review, and mock interview—no agency can guarantee a visa, but we raise your readiness.",
//       ar: "قائمة مستندات مخصصة، ومراجعة النماذج، ومقابلة تجريبية—لا أحد يضمن التأشيرة، لكن نرفع جاهزيتك.",
//     },
//     included: {
//       en: ["Document checklist & templates", "Form & statement review", "Mock interview (Q&A)"],
//       ar: ["قائمة مستندات ونماذج", "مراجعة النماذج وكشوف الحساب", "مقابلة تجريبية (أسئلة وأجوبة)"],
//     },
//     steps: {
//       en: [
//         { title: "Checklist", desc: "We tailor what you need to prepare" },
//         { title: "Review", desc: "We check forms & financials" },
//         { title: "Practice", desc: "Mock interview & feedback" },
//       ],
//       ar: [
//         { title: "القائمة", desc: "نحدد ما يلزمك من مستندات" },
//         { title: "المراجعة", desc: "نراجع النماذج والمالية" },
//         { title: "التدريب", desc: "مقابلة تجريبية وملاحظات" },
//       ],
//     },
//     tiers: [
//       {
//         name: { en: "Basic", ar: "أساسي" },
//         price: { en: "SAR 399", ar: "399 ر.س" },
//         includes: {
//           en: ["Checklist", "Form review"],
//           ar: ["قائمة المستندات", "مراجعة النماذج"],
//         },
//       },
//       {
//         name: { en: "Premium", ar: "بريميوم" },
//         price: { en: "SAR 899", ar: "899 ر.س" },
//         includes: {
//           en: ["Everything in Basic", "Mock interview", "Priority responses"],
//           ar: ["كل ما في أساسي", "مقابلة تجريبية", "أولوية الرد"],
//         },
//       },
//     ],
//     faqs: {
//       en: [{ q: "Do you guarantee approval?", a: "No agency can guarantee a visa. We help you submit a stronger, more complete file." }],
//       ar: [{ q: "هل تضمنون القبول؟", a: "لا جهة تضمن التأشيرة. نساعدك على تقديم ملف أقوى وأكثر اكتمالاً." }],
//     },
//     cta: {
//       en: { primary: { label: "Start visa checklist", href: "https://wa.me/966500000000" } },
//       ar: { primary: { label: "ابدأ قائمة التأشيرة", href: "https://wa.me/966500000000" } },
//     },
//   },
//   {
//     id: "accommodation",
//     title: { en: "Accommodation", ar: "السكن" },
//     summary: {
//       en: "We shortlist homestay, residence, or private rentals, handle booking and confirmations, and share arrival instructions.",
//       ar: "نرشح السكن العائلي أو الطلابي أو الخاص، ونتولى الحجز والتأكيدات، ونزوّدك بإرشادات الوصول.",
//     },
//     included: {
//       en: ["3–4 matched options", "Booking & confirmations", "Arrival instructions & contacts"],
//       ar: ["3–4 خيارات مناسبة", "الحجز والتأكيدات", "إرشادات الوصول وبيانات التواصل"],
//     },
//     steps: {
//       en: [
//         { title: "Profile", desc: "Budget, location, preferences" },
//         { title: "Options", desc: "Shortlist + photos & terms" },
//         { title: "Book", desc: "Reservation & confirmation pack" },
//       ],
//       ar: [
//         { title: "الملف", desc: "الميزانية والموقع والتفضيلات" },
//         { title: "الخيارات", desc: "قائمة مختصرة + صور وشروط" },
//         { title: "الحجز", desc: "الحجز وحزمة التأكيد" },
//       ],
//     },
//     tiers: [
//       {
//         name: { en: "Finder", ar: "بحث" },
//         price: { en: "SAR 299", ar: "299 ر.س" },
//         includes: {
//           en: ["3–4 options", "Booking support"],
//           ar: ["3–4 خيارات", "دعم الحجز"],
//         },
//       },
//       {
//         name: { en: "Concierge", ar: "خدمة شاملة" },
//         price: { en: "SAR 699", ar: "699 ر.س" },
//         includes: {
//           en: ["Everything in Finder", "Lease review", "Move-in checklist"],
//           ar: ["كل ما في بحث", "مراجعة العقد", "قائمة الانتقال"],
//         },
//       },
//     ],
//     cta: {
//       en: { primary: { label: "See housing options", href: "https://wa.me/966500000000" }, secondary: { label: "Contact form", href: "/en/contact" } },
//       ar: { primary: { label: "خيارات السكن", href: "https://wa.me/966500000000" }, secondary: { label: "نموذج التواصل", href: "/contact" } },
//     },
//   },
//   {
//     id: "airport-pickup",
//     title: { en: "Airport Pickup", ar: "الاستقبال بالمطار" },
//     summary: {
//       en: "Meet-and-greet at arrivals, flight monitoring, and safe drop-off. 24/7 escalation if needed.",
//       ar: "استقبال عند الوصول، متابعة الرحلة، وتوصيل آمن. تصعيد على مدار الساعة عند الحاجة.",
//     },
//     included: {
//       en: ["Meet & greet", "Flight monitoring", "Emergency contact"],
//       ar: ["استقبال وترحيب", "متابعة الرحلة", "وسيلة تواصل للطوارئ"],
//     },
//     steps: {
//       en: [
//         { title: "Details", desc: "Share flight & destination" },
//         { title: "Confirm", desc: "Assign driver & tracking" },
//         { title: "Arrive", desc: "Meet at gate & drop-off" },
//       ],
//       ar: [
//         { title: "البيانات", desc: "مشاركة الرحلة والوجهة" },
//         { title: "تأكيد", desc: "تحديد السائق والتتبع" },
//         { title: "وصول", desc: "استقبال عند البوابة والتوصيل" },
//       ],
//     },
//     tiers: [
//       {
//         name: { en: "One-way", ar: "اتجاه واحد" },
//         price: { en: "SAR 199", ar: "199 ر.س" },
//         includes: {
//           en: ["Pickup to housing/school"],
//           ar: ["استقبال إلى السكن/المعهد"],
//         },
//       },
//       {
//         name: { en: "Return", ar: "ذهاب وعودة" },
//         price: { en: "SAR 349", ar: "349 ر.س" },
//         includes: {
//           en: ["Pickup + return to airport"],
//           ar: ["استقبال + العودة للمطار"],
//         },
//       },
//     ],
//     cta: {
//       en: { primary: { label: "Book pickup", href: "https://wa.me/966500000000" } },
//       ar: { primary: { label: "احجز الاستقبال", href: "https://wa.me/966500000000" } },
//     },
//   },
// ];

// /** =======================
//  *  UI HELPERS (no deps)
//  *  ======================= */
// const IconDot = () => <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />;

// function SectionCard({ children }: { children: React.ReactNode }) {
//   return <div className="rounded-2xl border bg-white/80 p-6">{children}</div>;
// }

// function TierCard({ title, price, items, note }: { title: string; price: string; items: string[]; note?: string }) {
//   return (
//     <div className="rounded-xl border bg-white p-4">
//       <div className="flex items-center justify-between">
//         <div className="font-semibold">{title}</div>
//         <div className="text-sm">{price}</div>
//       </div>
//       <ul className="mt-2 text-sm list-disc ps-6 space-y-1">
//         {items.map((x, i) => <li key={i}>{x}</li>)}
//       </ul>
//       {note && <div className="mt-2 text-xs text-slate-500">{note}</div>}
//     </div>
//   );
// }

// /** =======================
//  *  MAIN PAGE COMPONENT
//  *  ======================= */
// export default function ServicesAll({ lang }: { lang: Lang }) {
//   const isRTL = lang === "ar";

//   return (
//     <div dir={isRTL ? "rtl" : "ltr"} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       {/* Page header */}
//       <header className="rounded-2xl border bg-white/80 p-6">
//         <div className="inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full border bg-white">
//           <IconDot /> {isRTL ? "خدماتنا" : "Our Services"}
//         </div>
//         <h1 className="text-2xl font-bold mt-3">
//           {isRTL ? "خدمات تفصيلية: من الترشيح حتى الوصول" : "Detailed services: from placement to arrival"}
//         </h1>
//         <p className="text-slate-700 mt-2">
//           {isRTL
//             ? "اختَر الخدمة التي تحتاجها واقرأ التفاصيل الكاملة والأسعار وخطوات العمل."
//             : "Pick the service you need and see full details, pricing, and steps."}
//         </p>

//         {/* Table of contents */}
//         <nav className="mt-4 text-sm">
//           <ul className="flex flex-wrap gap-2">
//             {SERVICES.map(s => (
//               <li key={s.id}>
//                 <a className="px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50"
//                    href={`#${s.id}`}>{s.title[lang]}</a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </header>

//       {/* Service sections */}
//       <div className="mt-6 space-y-8">
//         {SERVICES.map((s) => (
//           <section key={s.id} id={s.id} className="scroll-mt-24">
//             <SectionCard>
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h2 className="text-xl font-semibold">{s.title[lang]}</h2>
//                   <p className="text-slate-700 mt-1">{s.summary[lang]}</p>
//                 </div>
//                 <a
//                   href={s.cta[lang].primary.href}
//                   className="h-9 px-3 rounded-xl bg-green-600 text-white hover:bg-green-700 text-sm flex items-center"
//                 >
//                   {s.cta[lang].primary.label}
//                 </a>
//               </div>

//               <div className="mt-5 grid lg:grid-cols-12 gap-5">
//                 {/* Left: details */}
//                 <div className="lg:col-span-7 space-y-5">
//                   <div className="rounded-xl border bg-white p-4">
//                     <div className="font-semibold">{isRTL ? "يشمل" : "What’s included"}</div>
//                     <ul className="mt-2 list-disc ps-6 text-sm text-slate-700 space-y-1">
//                       {s.included[lang].map((x, i) => <li key={i}>{x}</li>)}
//                     </ul>
//                   </div>

//                   <div className="rounded-xl border bg-white p-4">
//                     <div className="font-semibold">{isRTL ? "الخطوات" : "Steps"}</div>
//                     <ol className="mt-2 grid sm:grid-cols-2 gap-3 text-sm">
//                       {s.steps[lang].map((st, i) => (
//                         <li key={i} className="rounded-lg border bg-white p-3">
//                           <div className="text-xs text-slate-500">{isRTL ? `خطوة ${i + 1}` : `Step ${i + 1}`}</div>
//                           <div className="font-medium">{st.title}</div>
//                           <div className="text-slate-600">{st.desc}</div>
//                         </li>
//                       ))}
//                     </ol>
//                   </div>

//                   {s.faqs && (
//                     <div className="rounded-xl border bg-white p-4">
//                       <div className="font-semibold">{isRTL ? "الأسئلة الشائعة" : "FAQs"}</div>
//                       <div className="mt-2 space-y-2">
//                         {s.faqs[lang].map((f, i) => (
//                           <details key={i} className="rounded-lg border bg-white p-3">
//                             <summary className="cursor-pointer font-medium">{f.q}</summary>
//                             <p className="text-sm text-slate-600 mt-1">{f.a}</p>
//                           </details>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Right: pricing + secondary CTA */}
//                 <aside className="lg:col-span-5 space-y-4">
//                   <div className="rounded-xl border bg-white p-4">
//                     <div className="font-semibold">{isRTL ? "الباقات" : "Packages"}</div>
//                     <div className="mt-3 grid sm:grid-cols-2 gap-3">
//                       {s.tiers.map((t, i) => (
//                         <TierCard
//                           key={i}
//                           title={t.name[lang]}
//                           price={t.price[lang]}
//                           items={t.includes[lang]}
//                           note={t.note?.[lang]}
//                         />
//                       ))}
//                     </div>
//                   </div>

//                   {s.cta[lang].secondary && (
//                     <a
//                       href={s.cta[lang].secondary!.href}
//                       className="w-full text-center px-4 py-2 rounded-xl border bg-white hover:bg-slate-50 text-sm inline-block"
//                     >
//                       {s.cta[lang].secondary!.label}
//                     </a>
//                   )}
//                 </aside>
//               </div>
//             </SectionCard>
//           </section>
//         ))}
//       </div>

//       {/* Final CTA */}
//       <section className="mt-8 rounded-2xl border bg-white/80 p-6 flex flex-wrap items-center justify-between gap-3">
//         <div>
//           <div className="font-semibold">{isRTL ? "جاهز للبدء؟" : "Ready to start?"}</div>
//           <div className="text-sm text-slate-600">
//             {isRTL ? "احجز استشارة مجانية 15 دقيقة أو تواصل عبر واتساب." : "Book a free 15-minute consult or chat on WhatsApp."}
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <a href="https://wa.me/966500000000" className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700">WhatsApp</a>
//           <a href={isRTL ? "/contact" : "/en/contact"} className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-50">
//             {isRTL ? "نموذج التواصل" : "Contact form"}
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------------------------- 

// "use client";
// import * as React from "react";

// type Lang = "en" | "ar";
// type L<T = string> = { en: T; ar: T };

// type Service = {
//   id: string;
//   title: L;
//   dek?: L;
//   paras: L<string[]>;
//   callout?: L;
//   footnotes?: L<string[]>;
//   // optional, if you want a soft header image per section
//   image?: string; // e.g. "/images/placement.jpg"
// };

// const SERVICES: Service[] = [
//   {
//     id: "course-placement",
//     title: { en: "Course Placement", ar: "توجيه واختيار الدورة" },
//     dek: {
//       en: "Matching you with an accredited school that fits your level, timing, and budget.",
//       ar: "مطابقة معهد معتمد يلائم مستواك وتوقيتك وميزانيتك.",
//     },
//     paras: {
//       en: [
//         "We begin with your level, goals, constraints and timing. From there, we narrow to a short list of accredited schools that genuinely fit.",
//         "Each option is explained in plain language: weekly hours, class size, term dates, and the exact fee breakdown. You always know what you’re paying for and when.",
//         "When you choose, we coordinate the offer letter and enrollment and keep you informed at every step.",
//       ],
//       ar: [
//         "نبدأ من مستواك وأهدافك وقيودك وتوقيتك. ثم نختصر الخيارات إلى قائمة معاهد معتمدة تناسبك فعليًا.",
//         "نشرح كل خيار بلغة واضحة: الساعات الأسبوعية وحجم الفصول وتواريخ الدراسة وتفصيل الرسوم بدقة. تعرف دائمًا ماذا ستدفع ومتى.",
//         "عند اختيارك، ننسّق خطاب القبول والتسجيل ونوافيك بالتحديثات في كل خطوة.",
//       ],
//     },
//     callout: {
//       en: "Clear options, transparent fees, no surprises.",
//       ar: "خيارات واضحة ورسوم شفافة بلا مفاجآت.",
//     },
//     image: "/images/services/placement.jpg",
//   },
//   {
//     id: "visa-guidance",
//     title: { en: "Visa Guidance", ar: "إرشاد التأشيرة" },
//     dek: {
//       en: "Preparing a complete, consistent file and feeling confident for the interview.",
//       ar: "إعداد ملف كامل ومتسق والثقة في المقابلة.",
//     },
//     paras: {
//       en: [
//         "You receive a tailored checklist based on course length, funding, and travel history. We clarify each document’s purpose and acceptable format.",
//         "We review forms and financial statements so details are consistent and easy to verify. If an interview is expected, we practice concise answers to the core questions.",
//         "No agency can guarantee a visa; our role is to raise quality and completeness so officers can decide quickly.",
//       ],
//       ar: [
//         "تحصل على قائمة مستندات مخصصة حسب مدة الدورة والتمويل وسجل السفر. نوضح الغرض من كل مستند وصيغته المقبولة.",
//         "نراجع النماذج وكشوف الحساب لضمان الاتساق وسهولة التحقق. وإذا كانت هناك مقابلة، نتدرّب على إجابات مختصرة للأسئلة الأساسية.",
//         "لا يمكن لأي جهة ضمان التأشيرة؛ دورنا رفع جودة واكتمال الملف ليسهل البت فيه.",
//       ],
//     },
//     callout: {
//       en: "Clarity and consistency are what officers look for.",
//       ar: "الوضوح والاتساق هما ما يبحث عنه موظف التأشيرات.",
//     },
//     image: "/images/services/visa.jpg",
//   },
//   {
//     id: "accommodation",
//     title: { en: "Accommodation", ar: "السكن" },
//     dek: {
//       en: "Homestay, residence, or private rentals—booked and confirmed for your dates.",
//       ar: "عائلة مضيفة أو سكن طلابي أو خاص—مع الحجز والتأكيد وفق تواريخك.",
//     },
//     paras: {
//       en: [
//         "We capture your preferences—budget, distance, privacy, and meal plans—then source options that truly match.",
//         "You get a simple brief for each: location, commute, house rules, payment schedule, and what’s included (utilities, internet, meals).",
//         "Once you choose, we handle reservations, confirmations, and arrival notes so check-in feels simple.",
//       ],
//       ar: [
//         "نحدّد تفضيلاتك—الميزانية والقرب والخصوصية وخطة الوجبات—ثم نوفر خيارات تطابقها فعليًا.",
//         "نقدّم لكل خيار ملخصًا واضحًا: الموقع والتنقل وقواعد السكن وجدول الدفعات وما يشمله (الخدمات والإنترنت والوجبات).",
//         "بعد اختيارك، نتولى الحجز والتأكيدات وملاحظات الوصول ليكون تسجيل الدخول سهلاً.",
//       ],
//     },
//     image: "/images/services/housing.jpg",
//   },
//   {
//     id: "airport-pickup",
//     title: { en: "Airport Pickup", ar: "الاستقبال بالمطار" },
//     dek: {
//       en: "A reliable meet-and-greet at arrivals with flight tracking and safe drop-off.",
//       ar: "استقبال موثوق عند الوصول مع تتبع الرحلة وتوصيل آمن.",
//     },
//     paras: {
//       en: [
//         "Share your flight and destination; we schedule a vetted driver who monitors your arrival.",
//         "We send precise meeting instructions and a direct contact so you know exactly where to go after landing.",
//         "If plans change, we coordinate adjustments and keep you updated in real time.",
//       ],
//       ar: [
//         "شاركنا رحلتك ووجهتك؛ نرتّب سائقًا معتمدًا يتابع وصولك.",
//         "نرسل تعليمات لقاء دقيقة ووسيلة تواصل مباشرة لتعرف إلى أين تتجه بعد الهبوط.",
//         "إذا تغيرت الخطة، ننسّق التعديلات ونبقيك على اطلاع لحظة بلحظة.",
//       ],
//     },
//     image: "/images/services/pickup.jpg",
//   },
// ];

// function Hairline() {
//   return (
//     <hr className="my-16 border-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
//   );
// }

// export default function ServicesEditorialPlus({ lang }: { lang: Lang }) {
//   const isRTL = lang === "ar";

//   return (
//     <div
//       dir={isRTL ? "rtl" : "ltr"}
//       className="relative"
//       // subtle paper-like gradient background
//       style={{
//         background:
//           "radial-gradient(60rem 30rem at 50% -10%, rgba(99,102,241,0.08), transparent 60%), radial-gradient(50rem 25rem at 100% 10%, rgba(79,70,229,0.06), transparent 60%)",
//       }}
//     >
//       {/* HERO */}
//       <header className="relative">
//         {/* soft hero image band (optional: replace src) */}
//         <div className="relative h-56 w-full overflow-hidden">
//           <img
//             src="/images/services/hero.jpg"
//             alt=""
//             className="h-full w-full object-cover opacity-60"
//             style={{
//               maskImage: "linear-gradient(to bottom, black 70%, transparent)",
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-transparent" />
//         </div>

//         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-16 pb-6">
//           <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm">
//             <p className="text-xs tracking-wide text-slate-500">
//               {isRTL ? "خدمات برايت باث" : "Bright Path Services"}
//             </p>
//             <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
//               {isRTL
//                 ? "رحلة سلسة من التخطيط حتى الوصول"
//                 : "A smooth path from plan to arrival"}
//             </h1>
//             <p className="mt-2 text-slate-700 leading-7">
//               {isRTL
//                 ? "شرح تحريري هادئ مع لمسات بصرية خفيفة—لا بطاقات ولا جداول."
//                 : "Editorial clarity with gentle visuals—no cards, no tables."}
//             </p>
//             {/* sticky TOC on desktop */}
//             <nav className="mt-4 hidden lg:block">
//               <ul
//                 className={`text-sm text-slate-600 grid grid-cols-4 gap-2 ${
//                   isRTL ? "text-right" : "text-left"
//                 }`}
//               >
//                 {SERVICES.map((s) => (
//                   <li key={s.id} className="truncate">
//                     <a
//                       className="underline-offset-4 hover:underline"
//                       href={`#${s.id}`}
//                     >
//                       {s.title[lang]}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* BODY */}
//       <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
//         {SERVICES.map((s, idx) => (
//           <section key={s.id} id={s.id} className="scroll-mt-28">
//             {/* optional soft section image */}
//             {s.image && (
//               <div className="relative h-44 w-full overflow-hidden rounded-2xl shadow-sm">
//                 <img
//                   src={s.image}
//                   alt=""
//                   className="h-full w-full object-cover opacity-70"
//                   style={{ filter: "grayscale(15%)" }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
//               </div>
//             )}

//             <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
//               {s.title[lang]}
//             </h2>
//             {s.dek?.[lang] && (
//               <p className="mt-1 italic text-slate-700">{s.dek[lang]}</p>
//             )}

//             {/* flowing copy with drop cap on first paragraph */}
//             <div className="mt-4 space-y-5 text-[17px] leading-8 text-slate-800">
//               {s.paras[lang].map((p, i) => (
//                 <p
//                   key={i}
//                   className={
//                     i === 0
//                       ? "first-letter:text-4xl first-letter:font-semibold first-letter:leading-[0.9] first-letter:me-1.5 first-letter:text-indigo-700"
//                       : ""
//                   }
//                 >
//                   {p}
//                 </p>
//               ))}
//             </div>

//             {/* pull quote */}
//             {s.callout?.[lang] && (
//               <figure
//                 className={`mt-6 ${
//                   isRTL ? "border-r-2 pr-4" : "border-l-2 pl-4"
//                 } border-indigo-300`}
//               >
//                 <blockquote className="text-slate-900">
//                   “{s.callout[lang]}”
//                 </blockquote>
//               </figure>
//             )}

//             {/* footnotes */}
//             {s.footnotes?.[lang]?.length ? (
//               <ul
//                 className={`mt-4 text-xs text-slate-500 space-y-1 ${
//                   isRTL ? "list-[rtl-custom]" : "list-[ltr-custom]"
//                 } ps-5`}
//               >
//                 {s.footnotes[lang].map((n, i) => (
//                   <li key={i} className="relative">
//                     <span
//                       className="absolute -start-4 top-3 h-px w-3 bg-slate-300"
//                       aria-hidden
//                     />
//                     {n}
//                   </li>
//                 ))}
//               </ul>
//             ) : null}

//             {idx < SERVICES.length - 1 && <Hairline />}
//           </section>
//         ))}
//       </main>

//       {/* END CTA */}
//       <footer className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20">
//         <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm border">
//           <div className="flex flex-wrap items-center justify-between gap-3">
//             <div>
//               <div className="font-medium text-slate-900">
//                 {isRTL ? "هل تريد الخطوة التالية؟" : "Want the next step?"}
//               </div>
//               <p className="text-sm text-slate-600">
//                 {isRTL
//                   ? "راسلنا أو تواصل عبر واتساب—نرد خلال 24–48 ساعة."
//                   : "Message us or say hi on WhatsApp—we reply in 24–48h."}
//               </p>
//             </div>
//             <div className="flex gap-2">
//               <a
//                 href="https://wa.me/966500000000"
//                 className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
//               >
//                 WhatsApp
//               </a>
//               <a
//                 href={isRTL ? "/contact" : "/en/contact"}
//                 className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-50"
//               >
//                 {isRTL ? "تواصل معنا" : "Contact us"}
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// ----------------NEW-------------------------------------------------------------------------------------------------------------- 

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
  paras: L<string[]>;
  faqs?: { en: FAQ[]; ar: FAQ[] };
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
    { q: "When should I book housing?", a: "Ideally 3–6 weeks before arrival. Some cities fill faster in summer." },
    { q: "Can I change my host family?", a: "Yes, within the first two weeks if there’s a clear mismatch, subject to availability." },
    { q: "Do you inspect the options?", a: "We rely on vetted partner agencies and verified listings with recent photos." },
    { q: "Are utilities included?", a: "Almost always. We list any extra costs—like laundry or extra meals—upfront." },
  ],
  ar: [
    { q: "متى يُفضل حجز السكن؟", a: "من الأفضل قبل الوصول بـ3 إلى 6 أسابيع. بعض المدن تزدحم في الصيف." },
    { q: "هل يمكنني تغيير العائلة المضيفة؟", a: "نعم، خلال أول أسبوعين في حال عدم التوافق، حسب توفر البدائل." },
    { q: "هل تفحصون أماكن السكن؟", a: "نعم، نعمل مع جهات معتمدة وقوائم موثقة بصور حديثة." },
    { q: "هل تشمل الأسعار الخدمات؟", a: "في الغالب نعم، ونوضح أي تكاليف إضافية مثل الغسيل أو الوجبات الإضافية." },
  ]
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

// function TierCard({ title, price, items, note }: { title: string; price: string; items: string[]; note?: string }) {
//   return (
//     <div className="rounded-xl border bg-white p-4">
//       <div className="flex items-center justify-between">
//         <div className="font-semibold">{title}</div>
//         <div className="text-sm">{price}</div>
//       </div>
//       <ul className="mt-2 text-sm list-disc ps-6 space-y-1">
//         {items.map((x, i) => <li key={i}>{x}</li>)}
//       </ul>
//       {note && <div className="mt-2 text-xs text-slate-500">{note}</div>}
//     </div>
//   );
// }

// const ICONS: Record<string, string> = {
// "course-placement": "🎓",
// "visa-guidance": "🛂",
// accommodation: "🏠",
// "airport-pickup": "✈️",
// };


// function Hairline() {
// return (
// <hr className="my-16 border-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
// );
// }


// function Motif({ children }: { children: React.ReactNode }) {
// return (
// <div className="rounded-2xl border bg-white/70 backdrop-blur p-4 shadow-sm w-fit">
// <div className="text-3xl leading-none">{children}</div>
// </div>
// );
// }

/** =======================
 *  MAIN PAGE COMPONENT
 *  ======================= */
// export default function ServicesAll({ lang }: { lang: Lang }) {
//   const isRTL = lang === "ar";

//   return (
//     <div dir={isRTL ? "rtl" : "ltr"} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       {/* Page header */}
//       <header className="rounded-2xl border bg-white/80 p-6"> 
//         <h1 className="text-2xl font-bold mt-3">
//           {isRTL ? "خدمات تفصيلية: من الترشيح حتى الوصول" : "Detailed services: from placement to arrival"}
//         </h1>
//         <p className="text-slate-700 mt-2">
//           {isRTL
//             ? "اختَر الخدمة التي تحتاجها واقرأ التفاصيل الكاملة والأسعار وخطوات العمل."
//             : "Pick the service you need and see full details, pricing, and steps."}
//         </p>

//         {/* Table of contents */}
//         <nav className="mt-4 text-sm">
//           <ul className="flex flex-wrap gap-2">
//             {SERVICES.map(s => (
//               <li key={s.id}>
//                 <a className="px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50"
//                    href={`#${s.id}`}>{s.title[lang]}</a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </header>

      
//       {/* Service sections */}
//       <main className="mt-6 space-y-8">
//         {SERVICES.map((s) => (
//           <section key={s.id} id={s.id} className="scroll-mt-24">
//             <SectionCard>
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h2 className="text-xl font-semibold">{s.title[lang]}</h2>
//                   <p className="mt-1 italic text-slate-700">{s.summary[lang]}</p>
//                   {/* <p className="text-slate-700 mt-1">{s.summary[lang]}</p> */}
//                   <div className="mt-4 space-y-5 text-[17px] leading-8 text-slate-800">
// {s.paras[lang].map((p, i) => (
// <p
// key={i}
// className={
// i === 0
// ? "first-letter:text-4xl first-letter:font-semibold first-letter:leading-[0.9] first-letter:me-1.5 first-letter:text-indigo-700"
// : ""
// }
// >
// {p}
// </p>
// ))}
// </div>
//                 </div>
//               </div>

//               <div className="mt-5 grid lg:grid-cols-12 gap-5">
//                 <div className="lg:col-span-7 space-y-5">
//                   {s.faqs && (
//                     <div className="rounded-xl border bg-white p-4">
//                       <div className="font-semibold">{isRTL ? "الأسئلة الشائعة" : "FAQs"}</div>
//                       <div className="mt-2 space-y-2">
//                         {s.faqs[lang].map((f, i) => (
//                           <details key={i} className="rounded-lg border bg-white p-3">
//                             <summary className="cursor-pointer font-medium">{f.q}</summary>
//                             <p className="text-sm text-slate-600 mt-1">{f.a}</p>
//                           </details>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </SectionCard>
//           </section>
//         ))}
//       </main>

//       {/* Final CTA */}
//       <section className="mt-8 rounded-2xl border bg-white/80 p-6 flex flex-wrap items-center justify-between gap-3">
//         <div>
//           <div className="font-semibold">{isRTL ? "جاهز للبدء؟" : "Ready to start?"}</div>
//           <div className="text-sm text-slate-600">
//             {isRTL ? "احجز استشارة مجانية 15 دقيقة أو تواصل عبر واتساب." : "Book a free 15-minute consult or chat on WhatsApp."}
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <a href="https://wa.me/966500000000" className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700">WhatsApp</a>
//           <a href={isRTL ? "/contact" : "/en/contact"} className="px-4 py-2 rounded-xl border bg-white hover:bg-slate-50">
//             {isRTL ? "نموذج التواصل" : "Contact form"}
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }



/** =======================
 *  MAIN PAGE (with preview controls)
 *  ======================= */
export default function ServicesAllPage() {
  const [lang, setLang] = React.useState<Lang>("en");
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
      {/* Toolbar */}
      <div className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3">
          <div className="text-sm text-slate-700">Preview controls</div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-700" htmlFor="lang">Language</label>
            <select
              id="lang"
              className="text-sm rounded-md border px-2 py-1 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </div>

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

                <div className="mt-6 grid gap-5 lg:grid-cols-12">
                  {/* Steps */}
                  {/* <div className="lg:col-span-5">
                    <div className="rounded-xl border bg-white p-4">
                      <div className="font-semibold mb-3">{isRTL ? "الخطوات" : "Steps"}</div>
                      <ol className="space-y-3">
                        {s.steps[lang].map((st, i) => (
                          <li key={i} className="relative ps-6">
                            <span className="absolute -start-0.5 top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                              {i + 1}
                            </span>
                            <div className="font-medium">{st.title}</div>
                            <div className="text-sm text-slate-600">{st.desc}</div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div> */}

                  {/* Tiers / Pricing */}
                  {/* <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                    {s.tiers.map((t, i) => (
                      <div key={i} className="rounded-xl border bg-white p-4">
                        <div className="flex items-baseline justify-between gap-3">
                          <div className="font-semibold">{t.name[lang]}</div>
                          <div className="text-sm text-slate-700">{t.price[lang]}</div>
                        </div>
                        <ul className="mt-3 space-y-1 text-sm text-slate-700">
                          {t.includes[lang].map((it, k) => (
                            <li key={k} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" aria-hidden />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                        {t.note?.[lang] && (
                          <p className="mt-3 text-xs text-slate-500">{t.note[lang]}</p>
                        )}
                      </div>
                    ))}
                  </div> */}
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
                    {isRTL ? "ماذا بعد؟" : "What’s next?"}
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
