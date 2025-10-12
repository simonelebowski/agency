import Section from "./Section";
import Card from "./Card";

export default function Pricing({ t }) {
  return (
    <Section id="pricing">
      <h2 className="text-2xl font-bold mb-6">{t.pricing.heading}</h2>
      <p className="text-slate-600 mb-6">{t.pricing.note}</p>
      <div className="grid md:grid-cols-3 gap-4">
        {t.pricing.plans.map((p, i) => (
          <Card key={i}>
            <div className="text-sm text-slate-500">{p.name}</div>
            <div className="text-3xl font-extrabold mt-1">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f, j) => (
                <li key={j} className="flex gap-2 items-start">
                  <span>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-xl bg-indigo-600 text-white py-2.5 hover:bg-indigo-700">
              {p.cta}
            </button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
