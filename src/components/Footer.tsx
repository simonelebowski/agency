export default function Footer({ t }: { t: any }) {
  return (
    <footer className="border-t py-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="text-slate-600">
          © {new Date().getFullYear()} Bright Path. {t.footer.rights}
        </div>
        <div className="flex gap-4">
          {t.footer.links.map((l, i) => (
            <a key={i} href="#" className="hover:text-indigo-600">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
