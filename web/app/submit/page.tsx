import { ArrowRight, Github, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SubmitPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* ── Page Header ── */}
      <section className="border-b bg-muted/20 py-24 md:py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        <div className="container mx-auto max-w-4xl px-4 sm:px-8 relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10 mx-auto">
            <Send className="w-3.5 h-3.5" />
            <span>Contribution</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Share your <span className="text-primary italic">Craft.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our automated submission portal is currently in development. Help us grow the world&apos;s most advanced skill library through community contributions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="h-14 px-10 rounded-full font-bold shadow-xl shadow-primary/20 group" asChild>
              <a href="https://github.com/rakibulism/agent-skills">
                <Github className="w-5 h-5 mr-2" />
                Submit via Pull Request
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 rounded-full font-bold border-2" asChild>
              <Link href="/about">How to contribute</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Roadmap Section ── */}
      <section className="container mx-auto max-w-4xl px-4 sm:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Planned Features
            </h3>
            <ul className="space-y-4">
              {[
                "Web-based Skill Editor",
                "Instant Preview Toolbox",
                "Version Control Integration",
                "Performance Analytics",
                "Community Badges & Rewards"
              ].map(item => (
                <li key={item} className="p-4 rounded-xl border bg-card flex items-center gap-3 font-medium shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-12 border border-primary/10 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-black">Join our Beta.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Be among the first to test our automated submission pipeline. Get early access to the Skill Builder studio.
              </p>
            </div>
            <div className="pt-8">
              <Button variant="link" className="p-0 font-bold text-primary group">
                Sign up for updates
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
