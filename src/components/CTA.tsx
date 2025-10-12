import Section from "./Section";
import Card from "./Card";

export default function CTA({ t }) {
  return (
    <Section>
      <Card>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">{t.cta.heading}</h3>
            <p className="text-slate-600 mt-1">{t.cta.sub}</p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700"
            >
              {t.cta.primary}
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border hover:bg-white"
            >
              {t.cta.secondary}
            </a>
          </div>
        </div>
      </Card>
    </Section>
  );
}
