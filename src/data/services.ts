// /data/services.ts
export type Lang = "ar" | "en";
export type ServiceSlug = "course-placement" | "visa-guidance" | "accommodation" | "airport-pickup";

type L<T = string> = { en: T; ar: T };

export type ServiceRecord = {
  slug: ServiceSlug;
  icon: "cap" | "stamp" | "building" | "plane";
  title: L;
  summary: L;
  bullets: L<string[]>;
  pricing?: Array<{ name: L; price: L; includes: L<string[]> }>;
  faqs?: L<{ q: string; a: string }[]>;
};

export const servicesList: ServiceRecord[] = [
  {
    slug: "course-placement",
    icon: "cap",
    title: { en: "Course Placement", ar: "توجيه واختيار الدورة" },
    summary: {
      en: "Personalized matching with accredited schools and clear pricing.",
      ar: "مطابقة شخصية مع معاهد معتمدة وأسعار واضحة.",
    },
    bullets: {
      en: ["Level check & goals", "3–5 school shortlist", "Offer letter & enrollment"],
      ar: ["تقييم المستوى والأهداف", "قائمة مختصرة 3–5 معاهد", "خطاب قبول وإتمام التسجيل"],
    },
    pricing: [
      {
        name: { en: "Starter", ar: "بداية" },
        price: { en: "Free", ar: "مجاني" },
        includes: {
          en: ["Consultation", "Shortlist", "Offer letter"],
          ar: ["استشارة", "قائمة مختصرة", "خطاب قبول"],
        },
      },
      {
        name: { en: "Plus", ar: "بلس" },
        price: { en: "SAR 499", ar: "499 ر.س" },
        includes: {
          en: ["Everything in Starter", "Payment reminders", "Basic visa check"],
          ar: ["كل ما في بداية", "تذكير بالدفع", "تحقق تأشيرة أساسي"],
        },
      },
    ],
    faqs: {
      en: [{ q: "Are schools accredited?", a: "Yes—British Council, ACCET, Languages Canada, etc." }],
      ar: [{ q: "هل المعاهد معتمدة؟", a: "نعم—مثل British Council و ACCET و Languages Canada." }],
    },
  },
  {
    slug: "visa-guidance",
    icon: "stamp",
    title: { en: "Visa Guidance", ar: "إرشاد التأشيرة" },
    summary: {
      en: "Document checklist, form review, and interview prep.",
      ar: "قائمة المستندات ومراجعة النماذج والاستعداد للمقابلة.",
    },
    bullets: {
      en: ["Tailored document list", "Form & statement review", "Mock interview"],
      ar: ["قائمة مستندات مخصصة", "مراجعة النماذج وكشوف الحساب", "مقابلة تجريبية"],
    },
    pricing: [
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
  },
  {
    slug: "accommodation",
    icon: "building",
    title: { en: "Accommodation", ar: "السكن" },
    summary: {
      en: "Homestay, residence, or private rentals—booked for you.",
      ar: "عائلة مضيفة أو سكن طلابي أو خاص—مع الحجز نيابةً عنك.",
    },
    bullets: {
      en: ["3–4 matched options", "Booking & confirmations", "Arrival instructions"],
      ar: ["3–4 خيارات مناسبة", "الحجز والتأكيدات", "إرشادات الوصول"],
    },
  },
  {
    slug: "airport-pickup",
    icon: "plane",
    title: { en: "Airport Pickup", ar: "الاستقبال بالمطار" },
    summary: {
      en: "Meet-and-greet and safe arrival support.",
      ar: "استقبال وترحيب ودعم للوصول الآمن.",
    },
    bullets: {
      en: ["Flight monitoring", "WhatsApp contact", "Escalation 24/7"],
      ar: ["متابعة الرحلة", "تواصل واتساب", "تصعيد 24/7"],
    },
  },
];
