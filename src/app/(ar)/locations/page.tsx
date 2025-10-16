import LocationsExplorer from "@/components/LocationsExplorer";

export const metadata = {
  title: "الفروع والمعاهد | برايت باث",
  description: "استكشف الدول والمدن والمعاهد الشريكة داخل السعودية وخارجها.",
};

export default function Page() {
  return <LocationsExplorer lang="ar" />;
}
