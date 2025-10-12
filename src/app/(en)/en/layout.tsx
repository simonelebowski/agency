import SiteShell from "@/components/SiteShell";
import { content } from "@/data/content";

export const metadata = {
  title: content.en.meta.title,
  description: content.en.meta.description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = content.en;
  return (
    <SiteShell t={t} lang="en">
      {children}
    </SiteShell>
  );
}
