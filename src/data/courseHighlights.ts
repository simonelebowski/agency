export type Lang = "ar" | "en";

export type CourseKey =
  | "standard-general-english"
  | "intensive-general-english"
  | "ielts"
  | "combination-course"
  | "cambridge-preparation";

type L<T> = { en: T; ar: T };

export const courseHighlights: Record<CourseKey, L> = {
  "standard-general-english": {
    en: [
      "Focus on all four skills",
      "Practical communication",
      "Small group classes",
      "Flexible schedule",
      "MOE-compliant",
    ],
    ar: [
      "التركيز على المهارات الأربع",
      "تواصل عملي وفعّال",
      "صفوف صغيرة",
      "جدول دراسي مرن",
      "متوافق مع متطلبات وزارة التعليم",
    ],
  },
  "intensive-general-english": {
    en: [
      "Faster progress",
      "Extra study hours",
      "Interactive lessons",
      "Academic & career focus",
      "MOE-compliant",
    ],
    ar: [
      "تقدّم أسرع",
      "ساعات دراسة إضافية",
      "دروس تفاعلية",
      "مناسب للأهداف الأكاديمية والمهنية",
      "متوافق مع متطلبات وزارة التعليم",
    ],
  },
  ielts: {
    en: [
      "Expert IELTS teachers",
      "Test strategies & practice",
      "Academic English focus",
      "University & visa preparation",
      "MOE-compliant",
    ],
    ar: [
      "مدرّسون متخصصون في الآيلتس",
      "استراتيجيات وتدريب على الاختبار",
      "تركيز على اللغة الأكاديمية",
      "تحضير للجامعة والتأشيرة",
      "متوافق مع متطلبات وزارة التعليم",
    ],
  },
  "combination-course": {
    en: [
      "Group & private lessons",
      "Personalized learning",
      "Flexible schedule",
      "Focus on specific needs",
      "MOE-compliant",
    ],
    ar: [
      "دروس جماعية وفردية",
      "تعلم مخصص حسب الحاجة",
      "جدول مرن",
      "تركيز على احتياجات محددة",
      "متوافق مع متطلبات وزارة التعليم",
    ],
  },
  "cambridge-preparation": {
    en: [
      "Cambridge exam preparation",
      "One-to-one support",
      "Focused test practice",
      "Small class sizes",
      "MOE-compliant",
    ],
    ar: [
      "تحضير لاختبارات كامبريدج",
      "دروس فردية داعمة",
      "تدريب مكثّف على الاختبار",
      "صفوف صغيرة",
      "متوافق مع متطلبات وزارة التعليم",
    ],
  },
} as const;
