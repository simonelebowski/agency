import Section from "./Section";

export default function Hero({ t }) {
  return (
    <Section id="home">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border">
            {t.hero.badge}
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-slate-700 text-lg">{t.hero.subtitle}</p>
          <div className="mt-6 flex gap-3">
            <a
              href="#courses"
              className="px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border hover:bg-white"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div>★ 4.9/5 (250+ reviews)</div>
            <div>✓ 30+ partner schools</div>
          </div>
        </div>
        <div>
          <div className="aspect-video rounded-2xl border shadow-sm bg-white flex items-center justify-center">
            <div className="p-8 text-center">
              <div className="text-5xl">🇸🇦📚</div>
              <p className="mt-4 text-slate-600">
                Hero image / video placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
