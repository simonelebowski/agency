import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact us | Bright Path",
  description: "Questions about courses, visas, accommodation, or airport pickup.",
};

export default function Page() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bright Path",
    url: "https://example.com",
    sameAs: ["https://wa.me/966500000000"],
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: "+966500000000",
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["Arabic","English"]
    }],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA"
    }
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact us",
  };

  return (
    <div dir="ltr" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />

      {/* Hero */}
      <header className="rounded-2xl border bg-white/80 p-6">
        <h1 className="text-2xl font-bold">Contact us</h1>
        <p className="text-slate-700 mt-2">
          We’re happy to help in Arabic & English. Send a message or reach us on WhatsApp.
        </p>
      </header>

      {/* Content */}
      <section className="mt-6 grid lg:grid-cols-12 gap-6">
        {/* Form */}
        <div className="lg:col-span-7">
          <ContactForm lang="en" />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border bg-white/80 p-5">
            <div className="font-semibold">Office details</div>
            <div className="mt-2 text-sm text-slate-700 space-y-1">
              <div>📞 +966 50 000 0000</div>
              <div>✉️ info@example.com</div>
              <div>📍 Riyadh — Prince Mohammed Bin Abdulaziz Rd</div>
            </div>
            <div className="mt-3 text-sm">
              <div className="font-medium">Opening hours</div>
              <ul className="text-slate-700 space-y-1">
                <li>Sun–Thu: 9am–6pm</li>
                <li>Fri–Sat: Closed</li>
              </ul>
            </div>
            <div className="mt-3 flex gap-2">
              <a href="https://wa.me/966500000000" className="px-3 py-1.5 rounded-xl bg-green-600 text-white hover:bg-green-700 text-sm">WhatsApp</a>
              <a href="tel:+966500000000" className="px-3 py-1.5 rounded-xl border bg-white hover:bg-slate-50 text-sm">Call</a>
            </div>
          </div>

          <div className="rounded-2xl border overflow-hidden">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=Riyadh&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64"
              loading="lazy"
            />
          </div>
        </aside>
      </section>
    </div>
  );
}
