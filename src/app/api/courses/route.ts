import { NextResponse } from "next/server";
import { allOfferings } from "@/data/catalog";

function applyFilters(list: any[], { city, level, type }: any) {
  return list.filter(c =>
    (!city || c.city === city) &&
    (!level || c.level === level) &&
    (!type || c.type === type)
  );
}

function applySort(list: any[], sort: string) {
  switch (sort) {
    case "priceAsc":  return [...list].sort((a,b)=>a.priceSAR - b.priceSAR);
    case "priceDesc": return [...list].sort((a,b)=>b.priceSAR - a.priceSAR);
    case "soonest":   return [...list].sort((a,b)=>+new Date(a.startDates[0]) - +new Date(b.startDates[0]));
    default:          return list;
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city  = searchParams.get("city")  ?? "";
  const level = searchParams.get("level") ?? "";
  const type  = searchParams.get("type")  ?? "";
  const sort  = searchParams.get("sort")  ?? "relevance";
  const page  = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const pageSize = 24;

  const filtered = applySort(applyFilters(allOfferings, { city, level, type }), sort);
  const start = (page - 1) * pageSize;
  const items = filtered.slice(start, start + pageSize);

  return NextResponse.json({
    items,
    page,
    pageSize,
    total: filtered.length,
    totalPages: Math.max(1, Math.ceil(filtered.length / pageSize)),
  }, { headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=600" }});
}
