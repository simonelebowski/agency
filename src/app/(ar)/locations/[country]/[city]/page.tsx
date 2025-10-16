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

export default async function Page({ params }: { params: Promise<Params> }) {
  const { country, city } = await params;
  const countryObj = locationsCatalog.find(c => c.code === country);
  const cityObj = countryObj?.cities.find(ct => ct.slug === city);
  if (!countryObj || !cityObj) return notFound();

  return (
    <div dir="rtl" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="rounded-2xl border bg-white/80 p-6">
        <div className="text-sm text-slate-600">
          <a href="/locations" className="hover:underline">الفروع</a> / {countryObj.name.ar}
        </div>
        <h1 className="text-2xl font-bold mt-1">{cityObj.name.ar}</h1>
        {cityObj.summary?.ar && <p className="text-slate-700 mt-1">{cityObj.summary.ar}</p>}
      </header>

      {/* Map */}
      {cityObj.cities?.length === 0 ? null : (
        <div className="mt-6 rounded-2xl border overflow-hidden">
          <iframe
            title="Map"
            src={cityObj.schools[0]?.map || `https://maps.google.com/maps?q=${encodeURIComponent(cityObj.name.en)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-72"
            loading="lazy"
          />
        </div>
      )}

      {/* Schools */}
      <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cityObj.schools.map((s) => (
          <article key={s.slug} id={s.slug} className="rounded-2xl border bg-white/80 p-5">
            <h2 className="font-semibold">{s.name}</h2>
            {s.address && <p className="text-sm text-slate-600 mt-1">{s.address}</p>}
            <div className="mt-2 flex flex-wrap gap-2">
              {s.programs.map((p) => (
                <span key={p} className="text-xs px-2 py-1 rounded-lg border bg-white">{p}</span>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              {s.website && (
                <a href={s.website} target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50">الموقع</a>
              )}
              <a href="https://wa.me/966500000000" className="text-sm px-3 py-1.5 rounded-xl bg-green-600 text-white hover:bg-green-700">استشارة</a>
              {/* Optionally link to course search filtered by city */}
              <a href={`/courses?city=${cityObj.name.en}`} className="text-sm px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50">دورات في هذه المدينة</a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
