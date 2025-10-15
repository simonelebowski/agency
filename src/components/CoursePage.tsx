import { courseContent } from "@/data/courseContent"; 
import { cityLabel } from "@/data/cityLabels";

function Pill({ children }) {
return <span className="px-2 py-1 rounded-full border bg-slate-50 text-xs">{children}</span>;
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
  const t = courseContent[lang]

  return (
    // <div dir={dir} className="max-w-4xl mx-auto p-6">
    //   <nav className="text-sm text-slate-600 mb-3">
    //     <a href="/courses" className="hover:underline">{t.courses}</a> /{" "}
    //     <a href={`/courses/${course.city}`} className="hover:underline">{course.city}</a> /{" "}
    //     <span className="text-slate-800">{course.title}</span>
    //   </nav>

    //   <h1 className="text-2xl font-bold">{course.title} – {course.city}</h1>
    //   <p className="text-slate-600 mt-2">{course.provider} • {course.city}, {course.country}</p>

    //   <ul className="mt-4 text-sm space-y-1">
    //     <li>{t.from}: SAR {course.priceSAR.toLocaleString()}</li>
    //     <li>{t.duration}: {course.durationWeeks} أسابيع</li>
    //     <li>{t.next}: {new Date(course.startDates[0]).toLocaleDateString(t.locale)}</li>
    //   </ul>

    //   <div className="mt-4">
    //     <a href="https://wa.me/966500000000" className="px-4 py-2 rounded-xl bg-green-600 text-white">{t.button}</a>
    //   </div>
    // </div>

<div dir={dir} className="max-w-6xl mx-auto px-4 py-8">
       <nav className="text-sm text-slate-600 mb-3">
         <a href="/courses" className="hover:underline">{t.courses}</a> /{" "}
         <a href={`/courses/${course.city}`} className="hover:underline">{cityLabel(course.city as any, lang)}</a> /{" "}
        <span className="text-slate-800">{course.title}</span>
      </nav>

<header className="rounded-2xl border bg-white/80 p-6">
<div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
<div>
<h1 className="text-2xl font-bold">{course.title} – {cityLabel(course.city as any, lang)}</h1>
<div className="text-slate-600 mt-1">Provider Name</div>
</div>
<div className="text-right">
<div className="text-3xl font-extrabold">SAR {course.priceSAR.toLocaleString()}</div>
{course.hoursPerWeek && (
<div className="text-xs text-slate-500 mt-1">{lang === "ar" ? "ساعات/أسبوع" : "Hours/week"}: {course.hoursPerWeek}</div>
)}
</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<Pill>{course.type === "ielts" ? (lang === "ar" ? "IELTS" : "IELTS") : course.type}</Pill>
<Pill>{cityLabel(course.city as any, lang)}</Pill>
</div>
</header>

<div className="grid lg:grid-cols-12 gap-6 mt-6">
<section className="lg:col-span-8">
<div className="rounded-2xl border bg-white/80 p-6">
<h2 className="text-lg font-semibold">{lang === "ar" ? "عن الدورة" : "About the course"}</h2>
<p className="mt-2 text-slate-700">{course.description}</p>


<h3 className="mt-6 font-semibold">{lang === "ar" ? "مميزات" : "Highlights"}</h3>
<ul className="mt-2 list-disc ps-5 text-slate-700 space-y-1">
{(lang === "ar" ? course.highlightsAR : course.highlightsEN).map((h, i) => (
<li key={i}>{h}</li>
))}
</ul>


<h3 className="mt-6 font-semibold">{lang === "ar" ? "تواريخ البدء" : "Start dates"}</h3>
<div className="mt-2 flex flex-wrap gap-2">
{course.startDates.map((d) => (
<span key={d} className="px-2 py-1 rounded-lg border bg-slate-50 text-xs">
{new Date(d).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-GB")}
</span>
))}
</div>
</div>


<div className="mt-6 rounded-2xl border bg-white/80 p-3">
{/* <div className="aspect-video w-full rounded-xl overflow-hidden border">
<iframe title="map" src={} width="100%" height="100%" loading="lazy" />
</div> */}
</div>


<div className="mt-6 rounded-2xl border bg-white/80 p-6">
<h3 className="font-semibold mb-2">{lang === "ar" ? "قد يعجبك أيضاً" : "You may also like"}</h3>
<p className="text-sm text-slate-600">{lang === "ar" ? "أظهر 2–3 دورات من نفس المدينة أو نفس النوع هنا." : "Show 2–3 related offerings from same city or kind here."}</p>
</div>
</section>


<aside className="lg:col-span-4">
<div className="rounded-2xl border bg-white/80 p-5 sticky top-24">
<div className="grid grid-cols-2 gap-3">
<KeyStat label={lang === "ar" ? "السعر من" : "From"} value={`SAR ${course.priceSAR.toLocaleString()}`} />
{course.hoursPerWeek && <KeyStat label={lang === "ar" ? "ساعات/أسبوع" : "Hours/week"} value={`${course.hoursPerWeek}`} />}
<KeyStat label={lang === "ar" ? "أقرب بداية" : "Next start"} value={new Date(course.startDates[0]).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-GB")} />
</div>
<div className="mt-4 grid gap-2">
<a href="#" className="text-center rounded-xl bg-green-600 text-white py-2.5 hover:bg-green-700">{lang === "ar" ? "احجز عبر واتساب" : "Book on WhatsApp"}</a>
<a href="#" className="text-center rounded-xl border py-2.5 hover:bg-white">{lang === "ar" ? "نموذج التواصل" : "Contact form"}</a>
<a href="#" className="text-center rounded-xl border py-2.5 hover:bg-white">{lang === "ar" ? "سياسة الاسترجاع" : "Refund policy"}</a>
</div>
</div>
</aside>
</div>

</div> 
    
  );
}
