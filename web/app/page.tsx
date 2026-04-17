import Link from "next/link";
import { getAllSkills } from "@/lib/skills";
import { SkillCard } from "@/components/skill-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Star, 
  ArrowRight,
  Filter,
  Layers,
  Zap,
  ShieldCheck,
  MousePointer2,
  Box
} from "lucide-react";

const BROWSE_COLUMNS = [
  {
    heading: "Core Categories",
    icon: Layers,
    links: [
      { label: "Copywriting", href: "/categories/copywriting" },
      { label: "UX Expert", href: "/categories/ux-expert" },
      { label: "SEO Specialist", href: "/categories/seo" },
      { label: "Market Research", href: "/categories/research" },
    ],
  },
  {
    heading: "Platform",
    icon: Zap,
    links: [
      { label: "All Skills", href: "/skills" },
      { label: "Model Providers", href: "/providers" },
      { label: "Submit Skill", href: "/submit" },
      { label: "API Reference", href: "/api" },
    ],
  },
  {
    heading: "Popular Tags",
    icon: MousePointer2,
    links: [
      { label: "#productivity", href: "/search?q=productivity" },
      { label: "#automation", href: "/search?q=automation" },
      { label: "#coding", href: "/search?q=coding" },
      { label: "#creative", href: "/search?q=creative" },
    ],
  },
  {
    heading: "Support",
    icon: ShieldCheck,
    links: [
      { label: "How it works", href: "/about" },
      { label: "Changelog", href: "/changelog" },
      { label: "Community", href: "https://github.com/rakibulism/agent-skills" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const TABS = [
  { name: "Featured", icon: Sparkles },
  { name: "Trending", icon: TrendingUp },
  { name: "Top Rated", icon: Star },
  { name: "Newest", icon: Clock },
];

export default async function Home() {
  const skills = await getAllSkills();
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="flex flex-col pb-20 overflow-hidden">
      {/* ── Hero Section ── */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 border-b overflow-hidden bg-background">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        <div className="absolute inset-0 bg-hero-grid opacity-100" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto max-w-5xl px-4 sm:px-8 relative z-10 flex flex-col items-center text-center gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2 duration-500">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Next Gen Marketplace</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Empower your agents with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">elite skills.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Browse, preview, and deploy high-performance behavior prompts and instruction sets for your AI agents in seconds.
            </p>
          </div>

          <div className="w-full max-w-2xl relative group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-500" />
            <form action="/search" className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-hover:text-primary transition-colors" />
              <Input
                id="home-search"
                name="q"
                type="search"
                placeholder="Search skills (e.g., copywriting, data science, seo expert...)"
                className="w-full h-16 pl-14 pr-8 rounded-[2rem] bg-background border-border/50 shadow-2xl text-lg focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary transition-all"
                aria-label="Search skills"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:block">
                <Button type="submit" size="sm" className="rounded-full h-10 px-6 font-bold">
                  Search
                </Button>
              </div>
            </form>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-muted-foreground animate-in fade-in duration-1000 delay-500">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground leading-none">{skills.length}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold mt-1">Skills</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground leading-none">{categories.length}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold mt-1">Categories</span>
            </div>
            <div className="w-px h-8 bg-border hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground leading-none">2.4k</span>
              <span className="text-[10px] uppercase tracking-widest font-bold mt-1">Downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Browse Columns ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BROWSE_COLUMNS.map((col) => (
            <div 
              key={col.heading} 
              className="glass p-6 rounded-2xl flex flex-col gap-5 hover:border-primary/20 transition-all hover:translate-y-[-4px] shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/5 text-primary">
                  <col.icon className="w-4 h-4" />
                </div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">{col.heading}</h3>
              </div>
              <div className="flex flex-col gap-2">
                {col.links.map((lnk) => (
                  <Link 
                    key={lnk.label} 
                    href={lnk.href}
                    className="text-lg font-bold hover:text-primary transition-all flex items-center justify-between group/link"
                  >
                    {lnk.label}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Main Library ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <div className="max-w-xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Recent <span className="text-primary italic">Drops.</span></h2>
            <p className="text-muted-foreground text-lg">
              Explore the latest and most refined skills submitted by the community. Validated for performance and reliability.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Tabs defaultValue="Featured" className="w-auto p-1 bg-muted/50 rounded-full border">
              <TabsList className="bg-transparent h-9 p-0 gap-1">
                {TABS.map((tab) => (
                  <TabsTrigger 
                    key={tab.name} 
                    value={tab.name}
                    className="h-7 rounded-full text-[11px] font-bold uppercase tracking-wider px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            
            <Button variant="outline" size="icon" className="rounded-full h-11 w-11 shadow-sm border-border/50">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.slice(0, 8).map((skill) => (
            <SkillCard key={skill.slug} skill={skill} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="outline" size="lg" className="rounded-full h-14 px-10 font-bold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group" asChild>
            <Link href="/skills">
              Explore Entire Library
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── Featured Categories ── */}
      <section className="bg-muted/30 border-y py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Browse by Category</h2>
            <Link href="/categories" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categories/${category}`}
                className="group flex flex-col p-6 border rounded-2xl hover:bg-background hover:shadow-xl hover:shadow-primary/5 transition-all bg-card border-border/50 text-center items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Box className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm capitalize group-hover:text-primary transition-colors">{category}</h3>
                  <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground mt-1 opacity-50">Skills list</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-24 md:py-32">
        <div className="relative rounded-[3rem] bg-primary text-primary-foreground p-8 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-1/2" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">Want to contribute your own skill?</h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed font-medium">
                Join our community of prompt engineers and agent builders. Help others build better agents by sharing your battle-tested skill sets.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Button variant="secondary" size="lg" className="rounded-full h-14 px-10 font-bold shadow-xl hover:scale-105 transition-transform" asChild>
                  <Link href="/submit">Get Started Listing</Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-14 px-10 font-bold border-white/20 hover:bg-white/10 text-white" asChild>
                  <a href="https://github.com/rakibulism/agent-skills">Read Documentation</a>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="w-80 h-80 border-[20px] border-white/10 rounded-[4rem] rotate-12 flex items-center justify-center">
                <Box className="w-32 h-32 text-white/20 -rotate-12" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-2xl rotate-45" />
              <div className="absolute -bottom-8 left-12 w-24 h-24 bg-white/10 rounded-[2rem] -rotate-12" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
