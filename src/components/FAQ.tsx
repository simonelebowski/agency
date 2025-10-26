import Section from "./Section";

export default function FAQ({ faq }) {
  return (
    <Section id="faq">
      <h2 className="text-2xl font-bold mb-6">{faq.heading}</h2>
      <div className="space-y-3">
        {faq.items.map((qa, i) => (
          <details key={i} className="rounded-xl border bg-white p-4">
            <summary className="font-semibold cursor-pointer">{qa.q}</summary>
            <p className="mt-2 text-sm text-slate-600">{qa.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
