import Link from "next/link";
import { getAllSkills } from "@/lib/skills";
import { LayoutGrid, Box, ArrowRight } from "lucide-react";

export default async function CategoriesPage() {
  const skills = await getAllSkills();
  const map = skills.reduce<Record<string, number>>((acc, skill) => {
    acc[skill.category] = (acc[skill.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ── Page Header ── */}
      <section className="border-b bg-muted/20 py-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Taxonomy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-balance">
              Expertise <span className="text-primary italic">Verticals.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
              Browse skills by specialized domain. From engineering to creative writing, find the perfect behavior set for your agent.
            </p>
          </div>
        </div>
      </section>

      {/* ── Categories Grid ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(map).map(([category, count]) => (
            <Link 
              key={category} 
              href={`/categories/${category}`} 
              className="group flex flex-col p-8 border rounded-[2rem] bg-card hover:bg-background hover:shadow-2xl hover:shadow-primary/5 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Box className="w-24 h-24" />
              </div>
              
              <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6" />
              </div>
              
              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-bold capitalize group-hover:text-primary transition-colors">{category}</h3>
                <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                  <span className="font-bold text-foreground">{count}</span> available skills
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Explore Category
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
