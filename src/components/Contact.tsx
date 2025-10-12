import Card from "./Card";
import Section from "./Section";

export default function Contact({ t }) {
  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-xl font-bold mb-4">{t.contact.heading}</h2>
          <form
            className="grid grid-cols-1 gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder={t.contact.name}
              className="rounded-xl border p-3 bg-white"
            />
            <input
              type="email"
              placeholder={t.contact.email}
              className="rounded-xl border p-3 bg-white"
            />
            <input
              placeholder={t.contact.phone}
              className="rounded-xl border p-3 bg-white"
            />
            <textarea
              rows={4}
              placeholder={t.contact.message}
              className="rounded-xl border p-3 bg-white"
            />
            <button className="rounded-xl bg-indigo-600 text-white p-3 hover:bg-indigo-700">
              {t.contact.submit}
            </button>
          </form>
        </Card>

        <Card>
          <div className="space-y-3 text-sm">
            <div className="font-semibold">{t.contact.address}</div>
            <div>Prince Mohammed Bin Abdulaziz Rd, Riyadh</div>
            <div>+966 5 0000 0000 • hello@example.com</div>
            <div className="aspect-video w-full rounded-xl overflow-hidden border">
              {/* Replace with your Google Maps iframe */}
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Riyadh&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
