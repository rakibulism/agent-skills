import { redirect } from "next/navigation";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  redirect(`/skills?q=${encodeURIComponent(params.q || "")}`);
}
