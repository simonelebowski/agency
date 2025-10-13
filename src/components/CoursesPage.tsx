"use client";
import React from "react";
import { courses as allCourses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

type Lang = "ar" | "en";

const ui = {
  en: {
    dir: "ltr" as const,
    title: "Find your English course",
    filters: { city: "City", level: "Level", type: "Type", sort: "Sort" },
    sorts: {
      relevance: "Relevance",
      priceAsc: "Price: Low → High",
      priceDesc: "Price: High → Low",
      soonest: "Soonest start",
    },
    empty: "No courses match your filters.",
  },
  ar: {
    dir: "rtl" as const,
    title: "ابحث عن دورتك",
    filters: {
      city: "المدينة",
      level: "المستوى",
      type: "النوع",
      sort: "ترتيب",
    },
    sorts: {
      relevance: "الملاءمة",
      priceAsc: "السعر: من الأقل إلى الأعلى",
      priceDesc: "السعر: من الأعلى إلى الأقل",
      soonest: "أقرب تاريخ بدء",
    },
    empty: "لا توجد دورات مطابقة للخيارات.",
  },
};

export default function CoursesPage({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const [city, setCity] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [type, setType] = React.useState("");
  const [sort, setSort] = React.useState<
    "relevance" | "priceAsc" | "priceDesc" | "soonest"
  >("relevance");

  // Build dynamic filter options from data
  const cities = React.useMemo(
    () => Array.from(new Set(allCourses.map((c) => c.city))),
    []
  );
  const levels = React.useMemo(
    () => Array.from(new Set(allCourses.map((c) => c.level))),
    []
  );
  const types = React.useMemo(
    () => Array.from(new Set(allCourses.map((c) => c.type))),
    []
  );

  const filtered = React.useMemo(() => {
    let arr = allCourses.filter(
      (c) =>
        (!city || c.city === city) &&
        (!level || c.level === level) &&
        (!type || c.type === type)
    );

    switch (sort) {
      case "priceAsc":
        arr = [...arr].sort((a, b) => a.priceSAR - b.priceSAR);
        break;
      case "priceDesc":
        arr = [...arr].sort((a, b) => b.priceSAR - a.priceSAR);
        break;
      case "soonest":
        arr = [...arr].sort(
          (a, b) => +new Date(a.startDates[0]) - +new Date(b.startDates[0])
        );
        break;
      default:
        // relevance (keep data order or add your own ranking)
        break;
    }
    return arr;
  }, [city, level, type, sort]);

  return (
    <div dir={t.dir} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold mb-6">{t.title}</h1>

      {/* Filters */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-xl border p-3 bg-white"
        >
          <option value="">{t.filters.city}</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="rounded-xl border p-3 bg-white"
        >
          <option value="">{t.filters.level}</option>
          {levels.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-xl border p-3 bg-white"
        >
          <option value="">{t.filters.type}</option>
          {types.map((tp) => (
            <option key={tp} value={tp}>
              {tp}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
          className="rounded-xl border p-3 bg-white lg:col-start-5"
        >
          <option value="relevance">{t.sorts.relevance}</option>
          <option value="priceAsc">{t.sorts.priceAsc}</option>
          <option value="priceDesc">{t.sorts.priceDesc}</option>
          <option value="soonest">{t.sorts.soonest}</option>
        </select>
      </div>

      {/* Results */}
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.length === 0 && (
          <div className="col-span-full text-slate-600">{t.empty}</div>
        )}
        {filtered.map((course) => (
          <CourseCard
            key={course.slug}
            course={course}
            lang={lang}
            href={
              lang === "ar"
                ? `/courses/${course.city.toLowerCase()}/${course.slug}`
                : `/en/courses/${course.city.toLowerCase()}/${course.slug}`
            }
          />
        ))}
      </div>
    </div>
  );
}
