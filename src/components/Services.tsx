import Section from "./Section";
import Card from "./Card";

export default function Services({ t }) {
  return (
    <Section id="services">
      <h2 className="text-2xl font-bold mb-6">{t.services.heading}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.services.items.map((s, i) => (
          <Card key={i}>
            <div className="text-3xl">🎓</div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
