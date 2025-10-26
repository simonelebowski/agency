"use client";
import Link from "next/link";

/* -------------------------------------------------------
   Minimal helpers (remove if you already have these)
------------------------------------------------------- */
function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "flex flex-col justify-between rounded-2xl border bg-white/80 backdrop-blur p-5 transition " +
        "hover:shadow-md hover:-translate-y-0.5 " +
        className
      }
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------
   Tiny inline SVG icons (no packages)
------------------------------------------------------- */
const IconCap = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...p}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M22 7 12 3 2 7l10 4 10-4z" />
    <path d="M6 10v6c4 2 8 2 12 0v-6" />
  </svg>
);

const IconStamp = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...p}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M5 22h14" />
    <path d="M7 18h10v-1a3 3 0 0 0-3-3h-1a2 2 0 0 1-2-2 3.5 3.5 0 1 0-7 0 2 2 0 0 0 2 2h1a3 3 0 0 1 3 3v1z" />
  </svg>
);

const IconBuilding = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...p}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 21h18" />
    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    <path d="M9 8h6M9 12h6M9 16h6" />
  </svg>
);

const IconPlane = (p: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...p}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m17.5 19.5-11.5-6.5-4 1 3-5 12.5 5.5L22 9l-2 8.5-2.5 2z" />
  </svg>
);

/* -------------------------------------------------------
   Icon router by title keyword (simple and dependency-free)
------------------------------------------------------- */
function iconFor(title: string) {
  const t = title.toLowerCase();
  if (t.includes("visa")) return <IconStamp className="w-6 h-6" />;
  if (t.includes("accommodation")) return <IconBuilding className="w-6 h-6" />;
  if (t.includes("airport")) return <IconPlane className="w-6 h-6" />;
  return <IconCap className="w-6 h-6" />;
}

/* -------------------------------------------------------
   Services component
------------------------------------------------------- */
type ServiceItem = { title: string; desc: string };
type ServicesCopy = {
  dir?: "rtl" | "ltr";
  services: {
    heading: string;
    items: ServiceItem[];
  };
};

export default function Services({ t }: { t: ServicesCopy }) {
  const dir = t.dir ?? "ltr";
  const isRTL = dir === "rtl";

  return (
    <Section id="services">
      {/* Header */}
      <div
        className={`flex items-end justify-between ${
          isRTL ? "text-right" : ""
        }`}
      >
        <div>
          <div className="inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full border bg-white">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" />
            {isRTL ? "خدماتنا الأساسية" : "Core services"}
          </div>
          <h2 className="text-2xl font-bold mt-3">{t.services.heading}</h2>
          <p className="text-sm text-slate-600 mt-1">
            {isRTL
              ? "إرشاد موثوق من اختيار الدورة حتى الوصول."
              : "Trusted guidance from placement to arrival."}
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {t.services.items.map((s, i) => (
          <Card key={i} className="group relative overflow-hidden">
            {/* subtle accent */}
            <div
              className={`pointer-events-none absolute -top-10 ${
                isRTL ? "-left-10" : "-right-10"
              } h-24 w-24 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition`}
            />
            {/* icon chip */}
            <div className="inline-flex items-center justify-center rounded-xl border bg-white h-10 w-10">
              {iconFor(s.title)}
            </div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {s.desc}
            </p>

            <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div
              className={`flex items-center ${
                isRTL ? "justify-start" : "justify-end"
              }`}
            >
              <Link
                href={{
                  pathname: isRTL ? "/services" : "/en/services",
                  hash: s.id,
                }}
                className="group text-sm inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50 transition focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-300"
                aria-label={
                  isRTL ? `المزيد عن ${s.title}` : `Learn more about ${s.title}`
                }
              >
                {isRTL ? "المزيد" : "Learn more"}
                <span
                  className={`ms-1 transition-transform group-hover:translate-x-0.5 ${
                    isRTL ? "-scale-x-100" : ""
                  }`}
                >
                  →
                </span>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
