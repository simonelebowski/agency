import Section from "./Section";
import Card from "./Card";

export default function Locations({ t }) {
  return (
    <Section id="locations">
      <h2 className="text-2xl font-bold mb-2">{t.locations.heading}</h2>
      <p className="text-slate-600 mb-6">{t.locations.sub}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.locations.cities.map((loc, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{loc.city}</h3>
                <div className="text-sm text-slate-600 mt-1">{loc.address}</div>
                {loc.phone && (
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-sm text-indigo-600 mt-1 inline-block"
                  >
                    {loc.phone}
                  </a>
                )}
              </div>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden border mt-4">
              <iframe
                title={`map-${i}`}
                src={loc.map}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">
          {t.locations.overseasHeading}
        </h3>
        <p className="text-slate-600 mb-6">{t.locations.overseasSub}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.locations.hubs.map((hub, i) => (
            <Card key={i}>
              <div>
                <h4 className="text-lg font-semibold">
                  {hub.city}
                  {hub.country ? `, ${hub.country}` : ""}
                </h4>
                {hub.note && (
                  <div className="text-sm text-slate-600 mt-1">{hub.note}</div>
                )}
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden border mt-4">
                <iframe
                  title={`hub-map-${i}`}
                  src={hub.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
