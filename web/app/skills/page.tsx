import Link from "next/link";
import { getAllSkills } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Box, X } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-background">
      {/* ── Page Header ── */}
      <section className="border-b bg-muted/20 py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10">
                <Box className="w-3.5 h-3.5" />
                <span>Public Library</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">The Skill set <span className="text-primary italic">Index.</span></h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Browse our complete collection of AI agent skills, verified behavior sets, and productivity boosters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8 py-4">
          <form className="flex flex-col md:flex-row items-center gap-4" action="/skills">
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                name="q" 
                defaultValue={params.q || ""} 
                placeholder="Search skills..." 
                className="pl-10 h-10 rounded-xl bg-muted/30 border-border/50 focus-visible:ring-primary/20"
              />
            </div>
            
            <div className="relative w-full md:max-w-xs group">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                name="category" 
                defaultValue={category || ""} 
                placeholder="All categories" 
                className="pl-10 h-10 rounded-xl bg-muted/30 border-border/50 focus-visible:ring-primary/20"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button type="submit" className="flex-1 md:flex-none h-10 px-6 rounded-xl font-bold">
                Apply Filters
              </Button>
              <Button variant="outline" asChild className="h-10 px-6 rounded-xl font-bold border-border/50">
                <Link href="/skills">
                  <X className="w-4 h-4 mr-2" />
                  Reset
                </Link>
              </Button>
            </div>

            <div className="ml-auto hidden md:block">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                {filtered.length} Skills found
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
              <Search className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">No skills found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
            </div>
            <Button variant="link" asChild>
              <Link href="/skills">Clear all filters</Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
