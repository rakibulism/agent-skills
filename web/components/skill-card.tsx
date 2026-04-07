import Link from "next/link";
import { Download, Eye } from "lucide-react";
import { Skill } from "@/lib/types";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="card">
      <span className="badge">{skill.category}</span>
      <h3>{skill.title}</h3>
      <p className="muted">{skill.description}</p>
      <div className="tags">{skill.tags.slice(0, 4).map((tag) => <span key={tag}>#{tag}</span>)}</div>
      <div className="actions">
        <Link href={`/skills/${skill.slug}`}><Eye size={16} /> Preview</Link>
        <a href={`/api/download/${skill.slug}`}><Download size={16} /> Download</a>
      </div>
    </article>
  );
}
