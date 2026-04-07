import Link from "next/link";
import { getAllSkills } from "@/lib/skills";

export default async function CategoriesPage() {
  const skills = await getAllSkills();
  const map = skills.reduce<Record<string, number>>((acc, skill) => {
    acc[skill.category] = (acc[skill.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="stack">
      <h1>Categories</h1>
      <div className="grid categories">
        {Object.entries(map).map(([category, count]) => (
          <Link key={category} href={`/categories/${category}`} className="card">
            <h3>{category}</h3>
            <p className="muted">{count} skills</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
