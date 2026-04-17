import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSkills, getSkillBySlug } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";
import { 
  ChevronLeft, 
  Download, 
  Box, 
  User, 
  Calendar, 
  Shield, 
  Scale, 
  ExternalLink,
  Info,
  Layers,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CopyButton } from "@/components/copy-button";

export default async function SkillDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const skill = await getSkillBySlug(slug);
  if (!skill) return notFound();

  const related = (await getAllSkills())
    .filter((s) => s.category === skill.category && s.slug !== skill.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col bg-background min-h-screen">
      {/* ── Header / Breadcrumbs ── */}
      <div className="border-b bg-muted/20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8 py-4">
          <Link 
            href="/skills" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to skills library
          </Link>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="border-b relative overflow-hidden bg-background py-16">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-hero-grid opacity-50 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {skill.category}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                  Version {skill.version}
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                {skill.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {skill.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-muted/50 text-muted-foreground hover:bg-muted transition-colors px-3 py-1">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[280px]">
              <CopyButton content={skill.body} />
              <Button variant="outline" className="w-full h-12 rounded-xl border-2 font-bold group" asChild>
                <a href={`/api/download/${skill.slug}`}>
                  <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  Download .prompt.md
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                  <Info className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Skill Specification</h2>
              </div>
              
              <div className="prose prose-zinc dark:prose-invert max-w-none bg-muted/20 rounded-[2rem] p-8 md:p-12 border border-border/50 shadow-inner">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {skill.body}
                </ReactMarkdown>
              </div>
            </section>

            {/* Compatible With Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Compatibility</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skill.compatible_with.map((agent) => (
                  <div key={agent} className="flex flex-col items-center justify-center p-6 border rounded-2xl bg-card hover:border-primary/50 transition-colors gap-3">
                    <Box className="w-8 h-8 text-primary/40" />
                    <span className="text-sm font-bold capitalize">{agent}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-10 lg:sticky lg:top-24 h-fit">
            <Card className="rounded-[2rem] border-border/50 shadow-lg shadow-black/5 overflow-hidden">
              <CardHeader className="bg-muted/50 border-b p-6">
                <CardTitle className="text-sm uppercase tracking-widest font-black text-muted-foreground">About the Author</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {skill.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{skill.author}</h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      View profile
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Last Updated</span>
                    </div>
                    <span className="font-semibold px-2 py-0.5 bg-muted rounded text-xs uppercase tracking-tight">Today</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Scale className="w-4 h-4" />
                      <span>License</span>
                    </div>
                    <span className="font-semibold text-xs transition-colors">MIT</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <h3 className="font-bold text-lg">Related Skills</h3>
                <Link href={`/categories/${skill.category}`} className="text-xs font-bold text-primary hover:underline">See All</Link>
              </div>
              <div className="space-y-4">
                {related.map((item) => (
                  <Link 
                    key={item.slug} 
                    href={`/skills/${item.slug}`}
                    className="flex gap-4 p-4 border rounded-2xl hover:bg-muted transition-all group bg-background"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6 text-primary/40" />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <h4 className="font-bold text-sm truncate group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-[11px] text-muted-foreground flex items-center gap-1.5 uppercase tracking-wider font-bold">
                        {item.category}
                      </p>
                    </div>
                  </Link>
                ))}
                {related.length === 0 && (
                  <p className="text-sm text-muted-foreground px-2">No related skills found in this category.</p>
                )}
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold">Prompt Engineer?</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                You can directly import this skill into your favorite IDE using the <span className="text-foreground font-bold">agent-skills CLI</span>.
              </p>
              <code className="block bg-background border p-4 rounded-xl text-xs font-mono select-all">
                npx agent-skills add {skill.slug}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
