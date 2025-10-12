"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { Lang } from "@/content/site";

function switchLocaleHref(pathname: string, search: string, to: Lang) {
  const qs = search ? `?${search}` : "";
  // Normalize (avoid double slashes)
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (to === "en") {
    // If already English, keep as is
    if (clean.startsWith("/en")) return `${clean}${qs}`;
    return `/en${clean === "/" ? "" : clean}${qs}`;
  } else {
    // to 'ar' → strip one leading /en
    if (clean.startsWith("/en")) {
      const stripped = clean.replace(/^\/en(\/|$)/, "/");
      return `${stripped || "/"}${qs}`;
    }
    return `${clean}${qs}`;
  }
}

export default function Header({ t, lang }: { t: any; lang: Lang }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const search = searchParams?.toString() ?? "";

  const base = lang === "ar" ? "" : "/en";

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={`${base}/`} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
            BP
          </div>
          <span className="font-semibold">Bright Path</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href={`${base}/`} className="hover:text-indigo-600">
            {t.nav.home}
          </Link>
          <Link href={`${base}/courses`} className="hover:text-indigo-600">
            {t.nav.courses}
          </Link>
          <a href="#services" className="hover:text-indigo-600">
            {t.nav.services}
          </a>
          <a href="#locations" className="hover:text-indigo-600">
            {t.nav.locations}
          </a>
          <a href="#pricing" className="hover:text-indigo-600">
            {t.nav.pricing}
          </a>
          <a href="#testimonials" className="hover:text-indigo-600">
            {t.nav.testimonials}
          </a>
          <a href="#faq" className="hover:text-indigo-600">
            {t.nav.faq}
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            {t.nav.contact}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          {/* <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-sm px-3 py-1.5 rounded-xl border hover:bg-slate-50"
          >
            {lang === "en" ? "العربية" : "English"}
          </button> */}
          {lang === "ar" ? (
            <Link
              href={switchLocaleHref(pathname, search, "en")}
              className="px-3 py-1.5 rounded-xl border hover:bg-slate-50"
            >
              English
            </Link>
          ) : (
            <Link
              href={switchLocaleHref(pathname, search, "ar")}
              className="px-3 py-1.5 rounded-xl border hover:bg-slate-50"
            >
              العربية
            </Link>
          )}
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center text-sm px-3 py-1.5 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
