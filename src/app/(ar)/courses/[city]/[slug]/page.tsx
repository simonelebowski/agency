import CoursePage from "@/components/CoursePage";
import { courses } from "@/data/courses"; 
import { notFound } from "next/navigation";

type Params = { city: string; slug: string };

export default async function Page({ params }: { params: Promise<Params>; }) {
const { city, slug } = await params;

  const course = courses.find(
    c => c.slug === slug && c.city.toLowerCase() === city.toLowerCase()
  );
  if (!course) return notFound();

  return <CoursePage lang="ar" dir='rtl' course={course}/>;
}
