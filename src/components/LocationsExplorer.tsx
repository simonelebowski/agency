"use client";
import * as React from "react";
import type { Lang, Country, CountryCode } from "@/data/locations";
import { locationsCatalog } from "@/data/locations";

type Props = { lang: Lang };

const PROGRAMS = ["General English","Intensive","IELTS","Cambridge","TOEFL","Business","Junior","Online","Advanced","Evening"];

export default function LocationsExplorer({ lang }: Props) {
  const isRTL = lang === "ar";
  const [country, setCountry] = React.useState<CountryCode>(locationsCatalog[0].code);
  const [program, setProgram] = React.useState<string>("");

  const countries = locationsCatalog;
  const activeCountry: Country | undefined = countries.find(c => c.code === country);

  // compute filtered city list with school counts
  const cities = React.useMemo(() => {
    if (!activeCountry) return [];
    return activeCountry.cities.map(city => {
      const visibleSchools = program
        ? city.schools.filter(s => s.programs.includes(program))
        : city.schools;
      return { ...city, count: visibleSchools.length, schools: visibleSchools };
    }).filter(c => c.count > 0 || !program); // hide empty cities on filter
  }, [activeCountry, program]);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <header className="rounded-2xl border bg-white/80 p-6">
        <h1 className="text-2xl font-bold">
          {isRTL ? "المواقع والشركاء" : "Locations & partners"}
        </h1>
        <p className="text-slate-700 mt-2">
          {isRTL
            ? "استكشف الدول والمدن والمعاهد الشريكة داخل السعودية وخارجها."
            : "Explore countries, cities, and partner schools in KSA and abroad."}
        </p>

        {/* Country tabs */}
        <div className="mt-4 flex flex-wrap gap-2">
          {countries.map((c) => (
            <button
              key={c.code}
              onClick={() => setCountry(c.code)}
              className={[
                "text-sm px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50",
                country === c.code ? "border-indigo-600" : ""
              ].join(" ")}
            >
              {c.name[lang]}
            </button>
          ))}
        </div>

        {/* Program filter */}
        <div className="mt-3">
          <label className="text-sm text-slate-700 me-2">
            {isRTL ? "البرنامج:" : "Program:"}
          </label>
          <select
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className="rounded-xl border p-2 bg-white text-sm"
          >
            <option value="">{isRTL ? "الكل" : "All"}</option>
            {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </header>

      {/* Cities */}
      <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(!activeCountry || cities.length === 0) && (
          <div className="col-span-full text-slate-600">
            {isRTL ? "لا توجد نتائج مطابقة." : "No matching results."}
          </div>
        )}

        {cities.map((city) => (
          <article key={city.slug} className="rounded-2xl border bg-white/80 p-5 hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-semibold">{city.name[lang]}</h2>
                {city.summary?.[lang] && (
                  <p className="text-sm text-slate-600 mt-1">{city.summary[lang]}</p>
                )}
              </div>
              <div className="ms-3 text-xs rounded-lg border bg-white px-2 py-1">
                {city.count} {isRTL ? "معهد" : "schools"}
              </div>
            </div>

            {/* Programs present in this city (chips) */}
            <div className="mt-3 flex flex-wrap gap-2">
              {Array.from(new Set(city.schools.flatMap(s => s.programs)))
                .slice(0, 6) // cap chips to keep tidy
                .map((p) => (
                  <span key={p} className="text-xs px-2 py-1 rounded-lg border bg-white">
                    {p}
                  </span>
                ))}
            </div>

            {/* Schools list (compact) */}
            <ul className="mt-3 text-sm text-slate-700 space-y-1">
              {city.schools.slice(0, 4).map((s) => (
                <li key={s.slug} className="flex items-center justify-between">
                  <span>{s.name}</span>
                  <a
                    href={
                      lang === "ar"
                        ? `/locations/${activeCountry!.code}/${city.slug}#${s.slug}`
                        : `/en/locations/${activeCountry!.code}/${city.slug}#${s.slug}`
                    }
                    className="text-indigo-600 hover:underline"
                  >
                    {isRTL ? "التفاصيل" : "Details"}
                  </a>
                </li>
              ))}
            </ul>

            {/* City details link */}
            <div className="mt-4 flex justify-end">
              <a
                href={
                  lang === "ar"
                    ? `/locations/${activeCountry!.code}/${city.slug}`
                    : `/en/locations/${activeCountry!.code}/${city.slug}`
                }
                className="text-sm px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50"
              >
                {isRTL ? "عرض كل المعاهد" : "View all schools"}
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
