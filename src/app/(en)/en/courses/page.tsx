import * as React from "react";
import Results from "@/components/Results";

type SP = Record<string, string | undefined>;

export default function Page({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = React.use(searchParams); // also fine
  return <Results lang="en" initialQuery={sp} />;
}
