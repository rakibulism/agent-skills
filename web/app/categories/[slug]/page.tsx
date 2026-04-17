import { getAllSkills } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";
import { Box, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function CategoryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skills = (await getAllSkills()).filter((s) => s.category === slug);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ── Page Header ── */}
      <section className="border-b bg-muted/20 py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8">
          <Link 
            href="/categories" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to all categories
          </Link>
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10">
              <Box className="w-3.5 h-3.5" />
              <span>Category Focus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight capitalize">
              {slug} <span className="text-primary italic">Collection.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Discover {skills.length} specialized skills and behavior sets designed specifically for <span className="text-foreground font-bold">{slug}</span> workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>

        {skills.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
              <Box className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">No skills found</h3>
              <p className="text-muted-foreground">This category seems to be empty for now.</p>
            </div>
            <Link href="/categories" className="text-primary font-bold hover:underline">
              Browse other categories
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
