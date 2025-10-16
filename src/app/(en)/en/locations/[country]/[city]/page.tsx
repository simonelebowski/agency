import { notFound } from "next/navigation";
import { locationsCatalog, type CountryCode } from "@/data/locations";

type Params = { country: CountryCode; city: string };

export async function generateStaticParams() {
  const params: { country: string; city: string }[] = [];
  for (const c of locationsCatalog) {
    for (const city of c.cities) params.push({ country: c.code, city: city.slug });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { country, city } = await params;
  const countryObj = locationsCatalog.find((c) => c.code === country);
  const cityObj = countryObj?.cities.find((ct) => ct.slug === city);
  if (!countryObj || !cityObj) return {};
  return {
    title: `${cityObj.name.en} — ${countryObj.name.en} | Bright Path`,
    description:
      cityObj.summary?.en ??
      `Partner English schools in ${cityObj.name.en}, ${countryObj.name.en}.`,
    alternates: { languages: { ar: `/locations/${country}/${city}` } },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { country, city } = await params;

  const countryObj = locationsCatalog.find((c) => c.code === country);
  const cityObj = countryObj?.cities.find((ct) => ct.slug === city);
  if (!countryObj || !cityObj) return notFound();

  // Prefer the first school map if present; otherwise a city-wide map
  const mapSrc =
    cityObj.schools[0]?.map ||
    `https://maps.google.com/maps?q=${encodeURIComponent(cityObj.name.en)}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <div dir="ltr" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="text-sm text-slate-600 mb-3" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1 items-center">
          <li><a href="/en/locations" className="hover:underline">Locations</a></li>
          <li className="opacity-50">/</li>
          <li>{countryObj.name.en}</li>
          <li className="opacity-50">/</li>
          <li className="text-slate-800">{cityObj.name.en}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="rounded-2xl border bg-white/80 p-6">
        <h1 className="text-2xl font-bold">{cityObj.name.en}</h1>
        {cityObj.summary?.en && <p className="text-slate-700 mt-1">{cityObj.summary.en}</p>}
      </header>

      {/* Map */}
      <div className="mt-6 rounded-2xl border overflow-hidden">
        <iframe
          title={`${cityObj.name.en} map`}
          src={mapSrc}
          className="w-full h-72"
          loading="lazy"
        />
      </div>

      {/* Schools */}
      <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cityObj.schools.map((s) => (
          <article key={s.slug} id={s.slug} className="rounded-2xl border bg-white/80 p-5">
            <h2 className="font-semibold">{s.name}</h2>
            {s.address && <p className="text-sm text-slate-600 mt-1">{s.address}</p>}

            {/* Programs */}
            <div className="mt-2 flex flex-wrap gap-2">
              {s.programs.map((p) => (
                <span key={p} className="text-xs px-2 py-1 rounded-lg border bg-white">
                  {p}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-3 flex flex-wrap gap-2">
              {s.website && (
                <a
                  href={s.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50"
                >
                  Website
                </a>
              )}
              {s.phone && (
                <a
                  href={`tel:${s.phone.replace(/\s+/g, "")}`}
                  className="text-sm px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50"
                >
                  Call
                </a>
              )}
              <a
                href="https://wa.me/966500000000"
                className="text-sm px-3 py-1.5 rounded-xl bg-green-600 text-white hover:bg-green-700"
              >
                WhatsApp
              </a>
              {/* Link to pre-filtered courses for this city */}
              <a
                href={`/en/courses?city=${encodeURIComponent(cityObj.name.en)}`}
                className="text-sm px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50"
              >
                Courses in this city
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
