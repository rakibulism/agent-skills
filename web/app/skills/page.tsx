import Link from "next/link";
import { getAllSkills } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";

export default async function SkillsPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const skills = await getAllSkills();
  const category = params.category;
  const query = (params.q || "").toLowerCase();

  const filtered = skills.filter((s) => {
    const categoryMatch = !category || s.category === category;
    const queryMatch = !query || `${s.title} ${s.description} ${s.tags.join(" ")}`.toLowerCase().includes(query);
    return categoryMatch && queryMatch;
  });

  return (
    <div className="stack">
      <h1>All Skills</h1>
      <form className="filters" action="/skills">
        <input name="q" defaultValue={params.q || ""} placeholder="Search skills" />
        <input name="category" defaultValue={category || ""} placeholder="Filter category" />
        <button type="submit">Apply</button>
        <Link href="/skills">Reset</Link>
      </form>
      <p className="muted">Showing {filtered.length} skills</p>
      <div className="grid">{filtered.map((skill) => <SkillCard key={skill.slug} skill={skill} />)}</div>
    </div>
  );
}
