import Link from "next/link";
import { Skill } from "@/lib/types";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="skill-card">
      {/* top badge */}
      <span className="skill-badge">{skill.category}</span>

      {/* body */}
      <div className="skill-card-body">
        <h3 className="skill-title">{skill.title}</h3>
        <p className="skill-subtitle">#{skill.slug}</p>
      </div>

      {/* tags */}
      <div className="skill-tags">
        {skill.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="skill-tag">
            #{tag}
          </span>
        ))}
      </div>

      {/* actions – separated by thin top border */}
      <div className="skill-actions">
        <Link href={`/skills/${skill.slug}`} className="skill-action-link">
          <i className="ri-eye-line" aria-hidden="true" />
          Preview
        </Link>
        <a href={`/api/download/${skill.slug}`} className="skill-action-link">
          <i className="ri-download-line" aria-hidden="true" />
          Download
        </a>
      </div>
    </article>
  );
}
