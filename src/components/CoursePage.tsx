import { courseContent } from "@/data/courseContent";
import { cityLabel } from "@/data/cityLabels";
import FAQ from "./FAQ";
import FAQs from "./FAQs";
import Link from "next/link";

function Pill({ children }) {
  return (
    <span className="px-2 py-1 rounded-full border bg-slate-50 text-xs">
      {children}
    </span>
  );
}

function KeyStat({ label, value }) {
  return (
    <div className="rounded-xl border bg-white/80 p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}

export default function CoursePage({ lang, dir, course }) {
  const t = courseContent[lang];
  const base = lang === "ar" ? "/locations" : "/en/locations";

  const faqs = {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Are your partner schools accredited?",
        a: "Yes, we only work with recognized accreditation bodies such as British Council, ACCET, Languages Canada, and more.",
      },
      {
        q: "Do you charge students?",
        a: "Basic counseling is free. Optional premium services are available.",
      },
      {
        q: "Can you help with visas?",
        a: "We guide you on documentation and preparation. Final decisions are by the embassy.",
      },
    ],
  };

  return (
    <div dir={dir} className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-slate-600 mb-3">
        <Link href="/courses" className="hover:underline">
          {t.courses}
        </Link>{" "}
        /{" "}
        <Link
          href={`${base}/${course.country.toLowerCase()}/${course.city}`}
          className="hover:underline"
        >
          {cityLabel(course.city as any, lang)}
        </Link>{" "}
        / <span className="text-slate-800">{course.title}</span>
      </nav>

      <header className="rounded-2xl border bg-white/80 p-6">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              {course.title} – {cityLabel(course.city as any, lang)}
            </h1>
            <div className="text-slate-600 mt-1">Provider Name</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold">
              SAR {course.priceSAR.toLocaleString()}
            </div>

            {/* NEW: price context */}
            {/* <div className="text-xs text-slate-600 mt-1">
                                                                                                                                                                                                                                                                                            {lang === "ar"
                                                                                                                                                                                                                                                                                                            ? <>سعر تقريبي لبرنامج {course.durationWeeks} أسابيع{course.hoursPerWeek ? <> ({course.hoursPerWeek} ساعة/أسبوع)</> : null}.</>
                                                                                                                                                                                                                                                                                                                            : <>Indicative price for a {course.durationWeeks}-week program{course.hoursPerWeek ? <> ({course.hoursPerWeek} h/week)</> : null}.</>
                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                                      </div> */}

            {/* NEW: variability note */}
            {/* <div className="text-xs text-slate-500">
                                                                                                                                                                                                                                                                                                                                                                                            {lang === "ar"
                                                                                                                                                                                                                                                                                                                                                                                                            ? "قد يختلف السعر حسب عدد الأسابيع والخدمات المضافة (السكن، الاستقبال، إلخ)."
                                                                                                                                                                                                                                                                                                                                                                                                                            : "Price may vary by number of weeks and optional services (housing, airport pickup, etc.)."}
                                                                                                                                                                                                                                                                                                                                                                                                                                        </div> */}

            {/* chips go here */}
            <div className="mt-2 flex flex-wrap justify-end gap-1.5 text-[11px] text-slate-600">
              <span className="px-2 py-1 rounded-lg border bg-white">
                {lang === "ar" ? "رسوم الدراسة فقط" : "Tuition only"}
              </span>
              {course.durationWeeks && (
                <span className="px-2 py-1 rounded-lg border bg-white">
                  {lang === "ar"
                    ? `${course.durationWeeks} أسابيع`
                    : `${course.durationWeeks} weeks`}
                </span>
              )}
              {course.hoursPerWeek && (
                <span className="px-2 py-1 rounded-lg border bg-white">
                  {lang === "ar"
                    ? `${course.hoursPerWeek} س/أسبوع`
                    : `${course.hoursPerWeek} h/week`}
                </span>
              )}
              <span className="px-2 py-1 rounded-lg border bg-white">
                {lang === "ar" ? "الخدمات اختيارية" : "Services extra"}
              </span>
            </div>

            {/* tiny variability note (optional) */}
            <p className="text-xs text-slate-500 mt-1">
              {lang === "ar"
                ? "قد يختلف السعر حسب عدد الأسابيع والخدمات المضافة."
                : "Price may vary by weeks and optional services."}
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Pill>
            {course.type === "ielts"
              ? lang === "ar"
                ? "IELTS"
                : "IELTS"
              : course.type}
          </Pill>
          <Pill>{cityLabel(course.city as any, lang)}</Pill>
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-6 mt-6">
        <section className="lg:col-span-8">
          <div className="rounded-2xl border bg-white/80 p-6">
            <h2 className="text-lg font-semibold">
              {lang === "ar" ? "عن الدورة" : "About the course"}
            </h2>
            <p className="mt-2 text-slate-700">{course.description[lang]}</p>

            <h3 className="mt-6 font-semibold">
              {lang === "ar" ? "مميزات" : "Highlights"}
            </h3>
            <ul className="mt-2 list-disc ps-5 text-slate-700 space-y-1">
              {course.highlights[lang].map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <h3 className="mt-6 font-semibold">
              {lang === "ar" ? "تواريخ البدء" : "Start dates"}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {course.startDates.map((d) => (
                <span
                  key={d}
                  className="px-2 py-1 rounded-lg border bg-slate-50 text-xs"
                >
                  {new Date(d).toLocaleDateString(
                    lang === "ar" ? "ar-SA" : "en-GB"
                  )}
                </span>
              ))}
            </div>
          </div>
          <FAQs faqs={faqs.items} lang={lang} />

          <section
            id="pricing-details"
            className="mt-6 rounded-2xl border bg-white/80 p-6"
          >
            <details>
              <summary className="cursor-pointer text-lg font-semibold">
                {lang === "ar"
                  ? "تفاصيل التسعير وما يشمله"
                  : "Pricing details & what's included"}
              </summary>

              <div className="mt-3 grid sm:grid-cols-2 gap-6 text-[15px] leading-6 text-slate-700">
                <div>
                  <h4 className="font-medium text-slate-900">
                    {lang === "ar" ? "يشمل السعر" : "Included"}
                  </h4>
                  <ul className="mt-2 list-disc ps-5 space-y-1">
                    {course.priceIncludes?.[lang]?.map(
                      (item: string, i: number) => <li key={i}>{item}</li>
                    ) ?? (
                      <>
                        <li>
                          {lang === "ar" ? "رسوم الدراسة" : "Tuition fees"}
                        </li>
                        <li>
                          {lang === "ar"
                            ? "اختبار تحديد المستوى وشهادة إنهاء"
                            : "Placement test & completion certificate"}
                        </li>
                        <li>
                          {lang === "ar"
                            ? "دعم الطالب والإرشاد الأكاديمي"
                            : "Student support & academic guidance"}
                        </li>
                        <li>
                          {lang === "ar"
                            ? "مواد أساسية (إن وجدت)"
                            : "Core materials (where applicable)"}
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-slate-900">
                    {lang === "ar" ? "لا يشمل" : "Not included"}
                  </h4>
                  <ul className="mt-2 list-disc ps-5 space-y-1">
                    {course.priceExcludes?.[lang]?.map(
                      (item: string, i: number) => <li key={i}>{item}</li>
                    ) ?? (
                      <>
                        <li>
                          {lang === "ar"
                            ? "التأشيرة والرسوم القنصلية"
                            : "Visa & consular fees"}
                        </li>
                        <li>
                          {lang === "ar"
                            ? "السكن والمواصلات"
                            : "Accommodation & transport"}
                        </li>
                        <li>
                          {lang === "ar"
                            ? "الاستقبال بالمطار (اختياري)"
                            : "Airport pickup (optional)"}
                        </li>
                        <li>
                          {lang === "ar"
                            ? "التأمين الصحي (إن لزم)"
                            : "Health insurance (if required)"}
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600">
                {lang === "ar"
                  ? "السعر يتغير حسب عدد الأسابيع والخدمات المضافة. اطلب عرضًا مفصلًا لتواريخك."
                  : "Price varies by number of weeks and optional services. Ask us for a detailed quote for your dates."}
              </p>
            </details>
          </section>
        </section>

        <aside className="lg:col-span-4">
          <div className="rounded-2xl border bg-white/80 p-5 sticky top-24">
            <div className="grid grid-cols-2 gap-3">
              <KeyStat
                label={lang === "ar" ? "السعر من" : "From"}
                value={`SAR ${course.priceSAR.toLocaleString()}`}
              />
              {/* <KeyStat
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          label={lang === "ar" ? "ساعات/أسبوع" : "Hours/week"}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            value={``}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            /> */}
              <KeyStat
                label={lang === "ar" ? "أقرب بداية" : "Next start"}
                value={new Date(course.startDates[0]).toLocaleDateString(
                  lang === "ar" ? "ar-SA" : "en-GB"
                )}
              />
            </div>
            <div className="mt-4 grid gap-2">
              <a
                href="#"
                className="text-center rounded-xl bg-green-600 text-white py-2.5 hover:bg-green-700"
              >
                {lang === "ar" ? "احجز عبر واتساب" : "Book on WhatsApp"}
              </a>
              <a
                href="#"
                className="text-center rounded-xl border py-2.5 hover:bg-white"
              >
                {lang === "ar" ? "نموذج التواصل" : "Contact form"}
              </a>
              <a
                href="#"
                className="text-center rounded-xl border py-2.5 hover:bg-white"
              >
                {lang === "ar" ? "سياسة الاسترجاع" : "Refund policy"}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
