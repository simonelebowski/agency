"use client";
import CoursesPage from "@/components/CoursesPage";
import Results from "@/components/Results";
export default function Page({searchParams}: {searchParams: Record<string, string|undefined>}) {
  // return <CoursesPage lang="ar" />;
  return <Results lang="ar" initialQuery={searchParams}/>;
}
