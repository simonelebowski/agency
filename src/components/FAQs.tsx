export default function FAQs({ faqs, lang }) {
  const isRTL = lang === "ar";

  return (
    <div className="mt-6 rounded-xl border bg-white p-4">
      <div className="font-semibold">{isRTL ? "الأسئلة الشائعة" : "FAQs"}</div>
      <div className="mt-2 space-y-2">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-lg border bg-white p-3">
            <summary className="cursor-pointer font-medium focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded">
              {f.q}
            </summary>
            <p className="text-sm text-slate-600 mt-1">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
