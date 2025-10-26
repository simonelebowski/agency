import { courses } from "./courses";
import { courseDescriptions } from "./courseDescriptions";
import { courseHighlights } from "./courseHighlights";
import type { CityCode, Course } from "./courses";

export const cityToCountry: Record<CityCode, string> = {
  london: "UK",
  oxford: "UK",
  edinburgh: "UK",
  leeds: "UK",
  worthing: "UK",
  dublin: "Ireland",
  cork: "Ireland",
  toronto: "Canada",
  vancouver: "Canada",
};

type L<T = string> = { en: T; ar: T };

export type Offering = Course & {
  city: CityCode;
  country: string;
  description: L<string>;
  highlights: L<string>;
};

export const allOfferings = Object.entries(courses).flatMap(([city, list]) =>
  (list as Course[]).map((o) => ({
    ...o,
    city: city as CityCode,
    country: cityToCountry[city as CityCode],
    description: courseDescriptions[o.slug] ?? { en: "", ar: "" },
    highlights: courseHighlights[o.slug] ?? { en: "", ar: "" },
  }))
);

// Common selectors
// export const getCityOfferings = (city: CityCode) =>
//   allOfferings.filter(o => o.city === city);

export const getOfferingByCitySlug = (city: CityCode, slug: string) =>
  allOfferings.find((o) => o.city === city && o.slug === slug);

// export const getFacetValues = () => {
//   const cities = Array.from(new Set(allOfferings.map(o => o.city))).sort();
//   const levels = Array.from(new Set(allOfferings.map(o => o.level))).sort();
//   const types  = Array.from(new Set(allOfferings.map(o => o.type ))).sort();
//   return { cities, levels, types };
// };
