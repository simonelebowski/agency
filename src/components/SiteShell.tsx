import { type Lang } from "@/data/content";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteShell({
  children,
  t,
  lang,
}: {
  children: React.ReactNode;
  t: any;
  lang: Lang;
}) {
  return (
    <div
      dir={t.dir}
      lang={t.locale}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900"
    >
      {/* Header on every page */}
      <Header t={t} lang={lang} />
      <main>{children}</main>
      {/* Footer on every page */}
      <Footer t={t} />
    </div>
  );
}
