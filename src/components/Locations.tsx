import React from "react";
import Link from "next/link";
import Section from "./Section";
import Card from "./Card";

function useSnapNav(ref: React.RefObject<HTMLDivElement>, isRTL: boolean) {
  const scrollByAmount = React.useCallback(
    (delta: number) => {
      const el = ref.current;
      if (!el) return;
      el.scrollBy({ left: isRTL ? -delta : delta, behavior: "smooth" });
    },
    [ref, isRTL]
  );

  return {
    prev: () => scrollByAmount(window.innerWidth * 0.6 * -1),
    next: () => scrollByAmount(window.innerWidth * 0.6),
  };
}

function slugifyUnicode(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[\u2000-\u206F\u2E00-\u2E7F'".,!?()[\]{}:;]+/g, "");
}

function getCityHref(cityName: string, cityCountry: string, lang: "en" | "ar") {
  const base = lang === "ar" ? "/locations" : "/en/locations";
  return `${base}/${slugifyUnicode(cityCountry)}/${slugifyUnicode(cityName)}`;
}

export default function Locations({ t, lang }) {
  const isRTL = lang === "ar";
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const { prev, next } = useSnapNav(viewportRef, isRTL);

  return (
    <Section id="locations">
      {/* Section header */}
      <header className="mb-6">
        <h2 id="locations-heading" className="text-2xl font-bold">
          {t.locations.heading}
        </h2>
        {t.locations.sub ? (
          <p id="locations-sub" className="text-slate-600 mt-1">
            {t.locations.sub}
          </p>
        ) : null}
      </header>

      {/* Mobile/Tablet: horizontal carousel */}
      <div className="lg:hidden relative">
        {/* nav buttons */}
        <div className="absolute -top-12 right-0 flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="h-9 w-9 rounded-full border bg-white hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-300"
            aria-label={isRTL ? "السابق" : "Previous"}
          >
            {isRTL ? "›" : "‹"}
          </button>
          <button
            type="button"
            onClick={next}
            className="h-9 w-9 rounded-full border bg-white hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-300"
            aria-label={isRTL ? "التالي" : "Next"}
          >
            {isRTL ? "‹" : "›"}
          </button>
        </div>

        <div
          ref={viewportRef}
          dir={isRTL ? "rtl" : "ltr"}
          className="snap-x snap-mandatory overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="inline-flex gap-4 pe-4 ps-1">
            {t.locations.cities.map((city, i) => (
              <article key={i} className="snap-start w-[78vw] sm:w-[60vw]">
                <Link
                  href={getCityHref(city.city, city.country, t.lang)}
                  className="group block focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-2xl"
                  aria-label={`${city.city}${
                    city.country ? `، ${city.country}` : ""
                  }`}
                >
                  <Card>
                    <div>
                      <h4 className="text-lg font-semibold">
                        {city.city}
                        {city.country ? `, ${city.country}` : ""}
                      </h4>
                      {city.note && (
                        <div className="text-sm text-slate-600 mt-1 line-clamp-2">
                          {city.note}
                        </div>
                      )}
                    </div>

                    <div className="relative aspect-video w-full rounded-xl overflow-hidden border mt-4">
                      {city.image ? (
                        <img
                          src={city.image}
                          alt={city.city}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-slate-100 grid place-items-center text-slate-400 text-sm">
                          No image
                        </div>
                      )}
                    </div>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: simple grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-4">
        {t.locations.cities.map((city, i) => (
          <Link
            key={i}
            href={getCityHref(city.city, city.country, t.lang)}
            className="group block focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-2xl"
            aria-label={`${city.city}${
              city.country ? `، ${city.country}` : ""
            }`}
          >
            <Card>
              <div>
                <h4 className="text-lg font-semibold">
                  {city.city}
                  {city.country ? `, ${city.country}` : ""}
                </h4>
                {city.note && (
                  <div className="text-sm text-slate-600 mt-1">{city.note}</div>
                )}
              </div>

              <div className="aspect-video w-full rounded-xl overflow-hidden border mt-4">
                {city.image ? (
                  <img
                    src={city.image}
                    alt={city.city}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-slate-100 grid place-items-center text-slate-400 text-sm">
                    No image
                  </div>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
