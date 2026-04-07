import { NextResponse } from "next/server";
import { getSkillBySlug } from "@/lib/skills";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = await getSkillBySlug(slug);
  if (!skill) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return new NextResponse(skill.body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${slug}.prompt.md"`
    }
  });
}
