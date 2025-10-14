"use client";
import CoursesPage from "@/components/CoursesPage";
import Results from "@/components/Results";
export default function Page({searchParams}: {searchParams: Record<string, string|undefined>}) {
  // return <CoursesPage lang="en" />;
    return <Results lang="en" initialQuery={searchParams}/>;
}
