import CoursePage from "@/components/CoursePage";
import { getOfferingByCitySlug } from "@/data/catalog";
import { notFound } from "next/navigation";

type Params = { city: string; slug: string };

export default async function Page({ params }: { params: Promise<Params>; }) {
const { city, slug } = await params;

const offering = getOfferingByCitySlug(city as any, slug);
if (!offering) return notFound();

  return <CoursePage lang="ar" dir='rtl' course={offering}/>;
}
