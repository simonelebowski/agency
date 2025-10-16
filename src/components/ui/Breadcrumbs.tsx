export default function Breadcrumbs({
  items, dir = "ltr",
}: {
  items: Array<{ label: string; href?: string }>;
  dir?: "ltr" | "rtl";
}) {
  return (
    <nav dir={dir} className="text-sm text-slate-600 mb-3" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-1 items-center">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {it.href ? <a href={it.href} className="hover:underline">{it.label}</a> : <span className="text-slate-800">{it.label}</span>}
            {i < items.length - 1 && <span className="opacity-50">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
