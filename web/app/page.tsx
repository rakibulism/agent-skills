import Link from "next/link";
import { getAllSkills } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

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
    <div className="flex flex-col pb-20 mt-8">
      {/* ── Hero / Search ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-12 flex flex-col items-center gap-6">
        <div className="w-full max-w-2xl relative">
          <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg" />
          <form action="/search">
            <Input
              id="home-search"
              name="q"
              type="search"
              placeholder="Search skills — copywriter, ux expert, seo..."
              className="w-full h-14 pl-12 pr-6 rounded-full bg-background border-border shadow-sm text-base focus-visible:ring-1 focus-visible:ring-primary"
              aria-label="Search skills"
            />
          </form>
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          <span className="text-foreground font-bold">{skills.length}</span> skills across{" "}
          <span className="text-foreground font-bold">{categories.length}</span> categories
        </p>
      </section>

      {/* ── Browse Columns ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-8 border-y bg-muted/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 border border-border rounded-lg overflow-hidden bg-background">
          {BROWSE_COLUMNS.map((col) => (
            <div key={col.heading} className="p-6 flex flex-col gap-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{col.heading}</p>
              <div className="flex flex-col gap-1.5">
                {col.links.map((lnk) => (
                  <Link 
                    key={lnk.label} 
                    href={lnk.href}
                    className="text-lg font-bold hover:text-muted-foreground transition-colors"
                  >
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tabs + Cards ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-10">
        {/* tabs bar */}
        <div className="flex items-center justify-between mb-8 border-b pb-1">
          <Tabs defaultValue="Featured" className="w-auto">
            <TabsList className="bg-transparent h-auto p-0 gap-6">
              {TABS.map((tab) => (
                <TabsTrigger 
                  key={tab} 
                  value={tab}
                  className="px-0 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent shadow-none font-semibold text-sm transition-all"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          <Button variant="outline" size="sm" className="gap-2 text-xs font-semibold">
            <i className="ri-equalizer-line" aria-hidden="true" />
            Filter
          </Button>
        </div>

        {/* 4-column cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.slice(0, 8).map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-10">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category}`}
              className="flex flex-col p-4 border rounded-xl hover:bg-muted transition-colors bg-background"
            >
              <h3 className="font-bold text-sm capitalize">{category}</h3>
              <p className="text-[11px] text-muted-foreground mt-1">View skills</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
