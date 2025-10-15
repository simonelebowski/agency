import { courses } from "./courses";
import type { CityCode, Course } from "./courses";

export type Offering = Course & { city: CityCode };

export const allOfferings = Object.entries(courses).flatMap(
  ([city, list]) => (list as Course[]).map(o => ({ ...o, city: city as CityCode }))
);

// Common selectors
// export const getCityOfferings = (city: CityCode) =>
//   allOfferings.filter(o => o.city === city);

export const getOfferingByCitySlug = (city: CityCode, slug: string) =>
  allOfferings.find(o => o.city === city && o.slug === slug);

// export const getFacetValues = () => {
//   const cities = Array.from(new Set(allOfferings.map(o => o.city))).sort();
//   const levels = Array.from(new Set(allOfferings.map(o => o.level))).sort();
//   const types  = Array.from(new Set(allOfferings.map(o => o.type ))).sort();
//   return { cities, levels, types };
// };
