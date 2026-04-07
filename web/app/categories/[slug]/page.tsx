import { getAllSkills } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";

export default async function CategoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skills = (await getAllSkills()).filter((s) => s.category === slug);

  return (
    <div className="stack">
      <h1>{slug}</h1>
      <p className="muted">{skills.length} skills in this category</p>
      <div className="grid">{skills.map((skill) => <SkillCard key={skill.slug} skill={skill} />)}</div>
    </div>
  );
}
