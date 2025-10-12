import SiteShell from "@/components/SiteShell";
import { content } from "@/data/content";

export const metadata = {
  title: content.ar.meta.title,
  description: content.ar.meta.description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = content.ar;
  return (
    <SiteShell t={t} lang="ar">
      {children}
    </SiteShell>
  );
}
