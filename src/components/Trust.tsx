import Section from "./Section";
import Card from "./Card";

export default function Trust({ t }) {
  return (
    <Section>
      <Card>
        <h2 className="text-xl font-semibold mb-4">{t.trust.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.trust.points.map((p, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 border text-sm">
              {p}
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
