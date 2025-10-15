"use client";
import Link from "next/link";
import type { Course } from "@/data/courses";
import { cityLabel } from "@/data/cityLabels";

export default function CourseCard({
  course,
  href,
  lang = "ar",
}: {
  course: Course;
  href: string;
  lang?: "ar" | "en";
}) {
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";

  return (
    <Link
      href={href}
      dir={dir}
      className="block rounded-2xl border bg-white hover:shadow-md transition-shadow p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <div className="text-sm text-slate-600 mt-0.5">
            {course.provider} • {cityLabel(course.city as any, lang)}, {course.country}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-extrabold">
            SAR {course.priceSAR.toLocaleString()}
          </div>
          <div className="text-xs text-slate-500">
            {isAr ? "لـ" : "for"} {course.durationWeeks}{" "}
            {isAr ? "أسابيع" : "weeks"}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="px-2 py-1 rounded-full border bg-slate-50">
          {course.level}
        </span>
        <span className="px-2 py-1 rounded-full border bg-slate-50">
          {course.type}
        </span>
      </div>

      <ul className="mt-3 text-sm text-slate-700 list-disc ps-5 space-y-1">
        {course.highlights.slice(0, 3).map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-slate-600">
          {isAr ? "أقرب تاريخ بدء:" : "Next start:"}{" "}
          <strong>
            {new Date(course.startDates[0]).toLocaleDateString(
              isAr ? "ar-SA" : "en-GB"
            )}
          </strong>
        </div>
        <div className="flex gap-2">
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-xl bg-green-600 text-white text-sm hover:bg-green-700"
          >
            {isAr ? "استفسار واتساب" : "WhatsApp"}
          </a>
          <span className="px-3 py-1.5 rounded-xl border text-sm">
            {isAr ? "التفاصيل" : "Details"}
          </span>
        </div>
      </div>
    </Link>
  );
}
