// Types
export type Lang = "ar" | "en";
export type CountryCode = "uk" | "us" | "ireland" | "canada" | "ksa";

export type School = {
  slug: string;               // unique within the city
  name: string;
  address?: string;
  phone?: string;
  website?: string;
  programs: string[];         // e.g. ["General English","IELTS","Intensive","Junior"]
  map?: string;               // Google Maps embed URL
};

export type City = {
  slug: string;               // url-friendly: "london"
  name: { en: string; ar: string };
  summary?: { en: string; ar: string };
  schools: School[];
};

export type Country = {
  code: CountryCode;
  name: { en: string; ar: string };
  cities: City[];
};

// Example catalog (add as many as you need)
export const locationsCatalog: Country[] = [
  {
    code: "uk",
    name: { en: "United Kingdom", ar: "المملكة المتحدة" },
    cities: [
      {
        slug: "london",
        name: { en: "London", ar: "لندن" },
        summary: {
          en: "Our largest hub: many central campuses and exam centres.",
          ar: "أكبر مركز لدينا: العديد من الحرم المركزية ومراكز الاختبارات.",
        },
        schools: [
          {
            slug: "city-language-school",
            name: "City Language School",
            address: "Holborn, London",
            programs: ["General English","Intensive","IELTS","Cambridge"],
            map: "https://maps.google.com/maps?q=Holborn%20London&t=&z=14&ie=UTF8&iwloc=&output=embed",
          },
          {
            slug: "kensington-college",
            name: "Kensington College",
            address: "Kensington, London",
            programs: ["General English","Business","Junior"],
          },
        ],
      },
      {
        slug: "oxford",
        name: { en: "Oxford", ar: "أوكسفورد" },
        schools: [
          {
            slug: "oxford-language-centre",
            name: "Oxford Language Centre",
            programs: ["General English","Intensive","Cambridge"],
          },
        ],
      },
      {
        slug: "edinburgh",
        name: { en: "Edinburgh", ar: "إدنبرة" },
        schools: [
          {
            slug: "oxford-language-centre",
            name: "Oxford Language Centre",
            programs: ["General English","Intensive","Cambridge"],
          },
        ],
      },
      {
        slug: "leeds",
        name: { en: "Leeds", ar: "ليدز" },
        schools: [
          {
            slug: "oxford-language-centre",
            name: "Oxford Language Centre",
            programs: ["General English","Intensive","Cambridge"],
          },
        ],
      },
      {
        slug: "worthing",
        name: { en: "Worthing", ar: "وورثينغ" },
        schools: [
          {
            slug: "oxford-language-centre",
            name: "Oxford Language Centre",
            programs: ["General English","Intensive","Cambridge"],
          },
        ],
      },
    ],
  },
  {
    code: "us",
    name: { en: "United States", ar: "الولايات المتحدة" },
    cities: [
      {
        slug: "new-york",
        name: { en: "New York", ar: "نيويورك" },
        schools: [
          {
            slug: "manhattan-english",
            name: "Manhattan English",
            programs: ["General English","Intensive","TOEFL"],
          },
        ],
      },
    ],
  },
  {
    code: "ireland",
    name: { en: "Ireland", ar: "إيرلندا" },
    cities: [
      {
        slug: "dublin",
        name: { en: "Dublin", ar: "دبلن" },
        schools: [
          {
            slug: "enterprise-language-college",
            name: "Enterprise Language College",
            programs: ["Business","General English"],
          },
        ],
      },
      {
        slug: "cork",
        name: { en: "Cork", ar: "كورك" },
        schools: [
          {
            slug: "enterprise-language-college",
            name: "Enterprise Language College",
            programs: ["Business","General English"],
          },
        ],
      },
    ],
  },
  {
    code: "canada",
    name: { en: "Canada", ar: "كندا" },
    cities: [
      {
        slug: "toronto",
        name: { en: "Toronto", ar: "تورونتو" },
        schools: [
          {
            slug: "north-language-online",
            name: "North Language Online",
            programs: ["Online","Advanced","General English"],
          },
        ],
      },
      {
        slug: "vancouver",
        name: { en: "Vancouver", ar: "فانكوفر" },
        schools: [
          {
            slug: "north-language-online",
            name: "North Language Online",
            programs: ["Online","Advanced","General English"],
          },
        ],
      },
    ],
  },
  {
    code: "ksa",
    name: { en: "Saudi Arabia", ar: "السعودية" },
    cities: [
      {
        slug: "riyadh",
        name: { en: "Riyadh", ar: "الرياض" },
        schools: [
          {
            slug: "bright-path-partner",
            name: "Bright Path Partner Center",
            programs: ["General English","IELTS","Evening"],
          },
        ],
      },
      {
        slug: "jeddah",
        name: { en: "Jeddah", ar: "جدة" },
        schools: [
          { slug: "focus-ielts-institute", name: "Focus IELTS Institute", programs: ["IELTS","Academic Prep"] },
        ],
      },
    ],
  },
];
