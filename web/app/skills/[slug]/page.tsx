import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSkills, getSkillBySlug } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";

export default async function SkillDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = await getSkillBySlug(slug);
  if (!skill) return notFound();

  const related = (await getAllSkills()).filter((s) => s.category === skill.category && s.slug !== skill.slug).slice(0, 3);

  return (
    <div className="stack">
      <Link href="/skills" className="muted">Back to skills</Link>
      <h1>{skill.title}</h1>
      <p className="muted">{skill.category} by {skill.author} - v{skill.version}</p>
      <div className="actions">
        <a href={`/api/download/${skill.slug}`}>Download .prompt.md</a>
      </div>
      <article className="preview"><ReactMarkdown remarkPlugins={[remarkGfm]}>{skill.body}</ReactMarkdown></article>
      <section>
        <h2>Related Skills</h2>
        <div className="grid">{related.map((item) => <SkillCard key={item.slug} skill={item} />)}</div>
      </section>
    </div>
  );
}
