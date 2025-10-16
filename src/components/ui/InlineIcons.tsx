export const IconCap = (p: any) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 7 12 3 2 7l10 4 10-4z" /><path d="M6 10v6c4 2 8 2 12 0v-6" />
  </svg>
);
export const IconStamp = (p: any) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 22h14" /><path d="M7 18h10v-1a3 3 0 0 0-3-3h-1a2 2 0 0 1-2-2 3.5 3.5 0 1 0-7 0 2 2 0 0 0 2 2h1a3 3 0 0 1 3 3v1z" />
  </svg>
);
export const IconBuilding = (p: any) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 21h18" /><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" /><path d="M9 8h6M9 12h6M9 16h6" />
  </svg>
);
export const IconPlane = (p: any) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...p} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m17.5 19.5-11.5-6.5-4 1 3-5 12.5 5.5L22 9l-2 8.5-2.5 2z" />
  </svg>
);
export function iconFor(key: "cap"|"stamp"|"building"|"plane") {
  if (key === "stamp") return <IconStamp className="w-5 h-5" />;
  if (key === "building") return <IconBuilding className="w-5 h-5" />;
  if (key === "plane") return <IconPlane className="w-5 h-5" />;
  return <IconCap className="w-5 h-5" />;
}
