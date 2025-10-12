import Section from "./Section";
import Card from "./Card";

export default function Testimonials({ t }) {
  return (
    <Section id="testimonials">
      <h2 className="text-2xl font-bold mb-6">{t.testimonials.heading}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {t.testimonials.items.map((item, i) => (
          <Card key={i}>
            <p className="italic">“{item.quote}”</p>
            <div className="mt-3 text-sm text-slate-600">— {item.name}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
