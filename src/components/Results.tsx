"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CourseCard from "@/components/CourseCard";
import { filters } from "@/data/filters";

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

export default function Results({ lang, initialQuery }: { lang: Lang; initialQuery: Record<string, any> }) {
  const t = ui[lang];

  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  // read filters from URL
  const city  = sp.get("city")  ?? initialQuery.city  ?? "";
  const level = sp.get("level") ?? initialQuery.level ?? "";
  const type  = sp.get("type")  ?? initialQuery.type  ?? "";
  const sort  = sp.get("sort")  ?? initialQuery.sort  ?? "relevance";
  const urlPage = parseInt(sp.get("page") ?? initialQuery.page ?? "1", 10);

  // local state for appended items
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(urlPage);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // rebuild API url
  const apiUrl = useMemo(() => {
    const params = new URLSearchParams();
    if (city)  params.set("city", city);
    if (level) params.set("level", level);
    if (type)  params.set("type", type);
    if (sort)  params.set("sort", sort);
    params.set("page", String(page));
    return `/api/courses?${params.toString()}`;
  }, [city, level, type, sort, page]);

  // when filters change → reset and fetch page 1
  useEffect(() => {
    setItems([]);
    setPage(urlPage); // sync with URL (usually 1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, level, type, sort]);

  // fetch current page and append
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(apiUrl)
      .then(r => r.json())
      .then(json => {
        if (cancelled) return;
        // if page === 1 after filters change, start fresh
        setItems(prev => page === 1 ? json.items : [...prev, ...json.items]);
        setTotalPages(json.totalPages);
        setTotal(json.total);
      })
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [apiUrl, page]);

  // set one filter and reset to page 1 (also update URL)
  const setFilter = (k: string, v: string) => {
    const next = new URLSearchParams(sp.toString());
    v ? next.set(k, v) : next.delete(k);
    next.delete("page");
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  };

  // Load more → increment page + write to URL (?page=2) for share/back
  const loadMore = () => {
    const nextPage = Math.min(totalPages, page + 1);
    setPage(nextPage);
    const next = new URLSearchParams(sp.toString());
    next.set("page", String(nextPage));
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  };

  const isAr = lang === "ar";

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold mb-6">{t.title}</h1>

      {/* Filters (example – swap for your real selects) */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <select className="rounded-xl border p-3 bg-white" value={city} onChange={e=>setFilter("city", e.target.value)}>
          <option value="">{t.filters.city}</option>
          {filters.cities.map((city, index) => (
            <option value={city.toLowerCase()}>{city}</option>
          ))}
          {/* map cities from your data */}
        </select>
        <select className="rounded-xl border p-3 bg-white" value={level} onChange={e=>setFilter("level", e.target.value)}>
          <option value="">{t.filters.level}</option>
        </select>
        <select className="rounded-xl border p-3 bg-white" value={type} onChange={e=>setFilter("type", e.target.value)}>
          <option value="">{t.filters.type}</option>
        </select>
        <select className="rounded-xl border p-3 bg-white lg:col-start-5" value={sort} onChange={e=>setFilter("sort", e.target.value)}>
          <option value="relevance">{t.sorts.relevance}</option>
          <option value="priceAsc">{t.sorts.priceAsc}</option>
          <option value="priceDesc">{t.sorts.priceDesc}</option>
          <option value="soonest">{t.sorts.soonest}</option>
        </select>
      </div>

      {/* Count */}
      <div className="mt-3 text-sm text-slate-600" aria-live="polite">
        {isAr ? `${total} نتيجة` : `${total} results`}
      </div>

      {/* Results grid */}
      <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((course: any) => (
          <CourseCard
            key={`${course.slug}-${course.city}`}
            course={course}
            lang={lang}
            href={isAr
              ? `/courses/${course.city.toLowerCase()}/${course.slug}`
              : `/en/courses/${course.city.toLowerCase()}/${course.slug}`}
          />
        ))}
      </div>

      {/* Load more */}
      {page < totalPages && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-5 py-3 rounded-xl border bg-white hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (isAr ? "جار التحميل..." : "Loading...") : (isAr ? "عرض المزيد" : "Load more")}
          </button>
        </div>
      )}
    </div>
  );
}
