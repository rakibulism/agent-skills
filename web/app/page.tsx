import Link from "next/link";
import { getAllSkills } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";

export default async function Home() {
  const skills = await getAllSkills();
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="stack">
      <section className="hero">
        <h1>Expert agent skills.</h1>
        <p>Download. Drop in. Go.</p>
        <form action="/search" className="search"><input name="q" placeholder="Search skills - copywriter, ux expert, seo..." /></form>
      </section>
      <section className="stats"><strong>{skills.length}</strong> skills across <strong>{categories.length}</strong> categories</section>
      <section>
        <h2>Featured Skills</h2>
        <div className="grid">{skills.slice(0, 6).map((skill) => <SkillCard key={skill.slug} skill={skill} />)}</div>
      </section>
      <section>
        <h2>Categories</h2>
        <div className="grid categories">{categories.map((category) => <Link className="card" key={category} href={`/categories/${category}`}><h3>{category}</h3><p className="muted">View skills in {category}</p></Link>)}</div>
      </section>
    </div>
  );
}
