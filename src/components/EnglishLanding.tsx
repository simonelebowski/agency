"use client";
import React, { useMemo, useState } from "react";
import { content, type Lang } from "@/data/content";
import Hero from "./Hero";
import Trust from "./Trust";
import CourseSearch from "./CourseSearch";
import Services from "./Services";
import Locations from "./Locations";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import FAQ from "./FAQ";
import Contact from "./Contact";

// Bilingual content (EN/AR). TailwindCSS assumed. No external deps.
// Notes:
// - RTL/LTR toggles based on selected language.
// - Replace placeholders (LOGO, phone, email, Google Map iframe src, WhatsApp link).
// - Forms are non-functional; wire them to your backend or a service like Formspree.

export default function EnglishAgencyLanding({ lang }) {
  const t = useMemo(() => content[lang] ?? content.ar, [lang]);

  if (!t) return null;

  // Simple course search demo (no backend)
  // const [filters, setFilters] = useState({ level: "", city: "", type: "" });

  // SEO meta & JSON-LD (for Next.js metadata API, you can move to layout or page)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Bright Path English Agency",
    areaServed: "SA",
    url: "https://example.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+966-5-0000-0000",
      },
    ],
    sameAs: [
      "https://www.instagram.com/youragency",
      "https://www.linkedin.com/company/youragency",
    ],
  };

  return (
    <div
      dir={t.dir}
      lang={t.locale}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900"
    >
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero t={t} />

      {/* Trust */}
      <Trust t={t} />

      {/* Course search */}
      <CourseSearch t={t} lang={lang}/>

      {/* Services */}
      <Services t={t} />

      {/* Locations */}
      <Locations t={t} lang={lang}/>

      {/* Pricing */}
      <Pricing t={t} />

      {/* Testimonials */}
      <Testimonials t={t} />

      {/* Big CTA */}
      <CTA t={t} />

      {/* FAQ */}
      <FAQ t={t} />

      {/* Contact */}
      <Contact t={t} />
    </div>
  );
}
