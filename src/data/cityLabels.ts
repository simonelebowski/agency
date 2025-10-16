// /data/cityLabels.ts
export const CITY_LABELS = {
  london:  { en: "London",  ar: "لندن" },
  edinburgh:  { en: "Edinburgh",  ar: "إدنبرة"},
  worthing:  { en: "Worthing",  ar: "وورثينج"},
  leeds:  { en: "Leeds",  ar: "ليدز" },
  oxford:  { en: "Oxford",  ar: "أوكسفورد" },
  dublin:  { en: "Dublin",  ar: "دبلن" },
  toronto: { en: "Toronto", ar: "تورونتو" },
} as const;

export function cityLabel(code: keyof typeof CITY_LABELS, lang: "en"|"ar") {
  return CITY_LABELS[code]?.[lang] ?? code;
}
