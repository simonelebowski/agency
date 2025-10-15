import Section from "./Section";

export default function CourseSearch({ t, filters, setFilters }) {
  return (
    <Section id="courses">
      <h2 className="text-2xl font-bold mb-6">{t.search.heading}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          value={filters.level}
          onChange={(e) => setFilters({ ...filters, level: e.target.value })}
          className="rounded-xl border p-3 bg-white"
        >
          <option value="">{t.search.level}</option>
          {t.search.levels.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
        <select
          value={filters.city}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          className="rounded-xl border p-3 bg-white"
        >
          <option value="">{t.search.city}</option>
          {t.search.cities.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="rounded-xl border p-3 bg-white"
        >
          <option value="">{t.search.type}</option>
          {t.search.types.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
        <button className="rounded-xl bg-indigo-600 text-white p-3 hover:bg-indigo-700 cursor-pointer">
          {t.search.btn}
        </button>
      </div>
      <p className="mt-3 text-sm text-slate-600">
        (Demo only) Use filters then connect to your API.
      </p>
    </Section>
  );
}
