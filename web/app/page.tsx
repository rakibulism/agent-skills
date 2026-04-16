import Link from "next/link";
import { getAllSkills } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";

const BROWSE_COLUMNS = [
  {
    heading: "Categories",
    links: [
      { label: "Copywriting", href: "/categories/copywriting" },
      { label: "UX Expert", href: "/categories/ux-expert" },
      { label: "SEO", href: "/categories/seo" },
      { label: "Research", href: "/categories/research" },
    ],
  },
  {
    heading: "Screens",
    links: [
      { label: "Skills", href: "/skills" },
      { label: "Providers", href: "/providers" },
      { label: "Categories", href: "/categories" },
      { label: "Submit", href: "/submit" },
    ],
  },
  {
    heading: "UI Elements",
    links: [
      { label: "Cards", href: "/skills" },
      { label: "Filters", href: "/search" },
      { label: "Tags", href: "/skills" },
      { label: "Badges", href: "/skills" },
    ],
  },
  {
    heading: "Flows",
    links: [
      { label: "Browse → Preview", href: "/skills" },
      { label: "Search → Download", href: "/search" },
      { label: "Submit Skill", href: "/submit" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
];

const TABS = ["Featured", "Most popular", "Top rated", "New"];

export default async function Home() {
  const skills = await getAllSkills();
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="page-stack">
      {/* ── Hero / Search ── */}
      <section className="hero shell">
        <div className="search-wrap">
          <i className="ri-search-line" aria-hidden="true" />
          <form action="/search">
            <input
              id="home-search"
              name="q"
              type="search"
              placeholder="Search skills — copywriter, ux expert, seo..."
              aria-label="Search skills"
            />
          </form>
        </div>
        <p className="stats-line">
          <strong>{skills.length}</strong> skills across{" "}
          <strong>{categories.length}</strong> categories
        </p>
      </section>

      {/* ── Browse Columns ── */}
      <section className="browse-section shell">
        <div className="browse-grid">
          {BROWSE_COLUMNS.map((col) => (
            <div key={col.heading} className="browse-col">
              <p className="browse-col-heading">{col.heading}</p>
              <div className="browse-links">
                {col.links.map((lnk) => (
                  <Link key={lnk.label} href={lnk.href}>
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tabs + Cards ── */}
      <section className="shell">
        {/* tabs bar */}
        <div className="tabs-bar">
          <div className="tabs" role="tablist">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                className={`tab-btn${i === 0 ? " active" : ""}`}
                aria-selected={i === 0}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="filter-btn" aria-label="Filter skills">
            <i className="ri-equalizer-line" aria-hidden="true" />
            Filter
          </button>
        </div>

        {/* 4-column cards grid */}
        <div className="skills-grid">
          {skills.slice(0, 8).map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="categories-section shell">
        <h2>Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category}`}
              className="category-link"
            >
              <h3>{category}</h3>
              <p>View skills in {category}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
