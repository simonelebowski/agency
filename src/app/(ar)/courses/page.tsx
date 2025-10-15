"use client";
import Results from "@/components/Results";
export default async function Page({searchParams}: {searchParams: Promise<Record<string, string|undefined>>}) {
  const sp = await searchParams;

  return <Results lang="ar" initialQuery={searchParams}/>;
}
