'use client'
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Section from "./Section";
import { filters } from "@/data/filters";

export default function CourseSearch({ t }: {t: any}) {
const [filterSelection, setFilterSelection] = useState({ level: "", city: "", type: "" });

  const router = useRouter();
  const pathname = usePathname() || "/";
  // If current path starts with /en use English catalog, otherwise Arabic
  const catalogPath = pathname.startsWith("/en") ? "/en/courses" : "/courses";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams();
    if (filterSelection.city) params.set("city", filterSelection.city);
    if (filterSelection.level) params.set("level", filterSelection.level);
    if (filterSelection.type) params.set('type', filterSelection.type);

    const qs = params.toString();
    router.push(qs ? `${catalogPath}?${qs}` : catalogPath);
  }

  return (
    <Section id="courses">
      <h2 className="text-2xl font-bold mb-6">{t.search.heading}</h2>
      <form onSubmit={onSubmit} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          value={filterSelection.city}
          onChange={(e) => setFilterSelection({ ...filterSelection, city: e.target.value })}
          className="rounded-xl border p-3 bg-white"
        >
          <option value="">{t.search.city}</option>
          {filters.cities.map((x, index) => (
            <option key={index} value={x.toLowerCase()}>
              {x}
            </option>
          ))}
        </select>
        <select
          value={filterSelection.level}
          onChange={(e) => setFilterSelection({ ...filterSelection, level: e.target.value })}
          className="rounded-xl border p-3 bg-white"
        >
          <option value="">{t.search.level}</option>
          {filters.levels.map((x, index) => (
            <option key={index} value={x}>
              {x}
            </option>
          ))}
        </select>
        <select
          value={filterSelection.type}
          onChange={(e) => setFilterSelection({ ...filterSelection, type: e.target.value })}
          className="rounded-xl border p-3 bg-white"
        >
          <option value="">{t.search.type}</option>
          {filters.types.map((x, index) => (
            <option key={index} value={x}>
              {x}
            </option>
          ))}
        </select>
        <button type="submit" className="rounded-xl bg-indigo-600 text-white p-3 hover:bg-indigo-700 cursor-pointer">
          {t.search.btn}
        </button>
      </form>
    </Section>
  );
}
