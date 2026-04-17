import { ProviderCard } from "@/components/provider-card";
import { providers } from "@/lib/providers";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MapPin, 
  Globe, 
  Users, 
  X,
  Filter
} from "lucide-react";
import Link from "next/link";

export default async function ProvidersPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const q = (params.q || "").toLowerCase();
  const region = params.region || "";
  const open = params.open_source || "";

  const filtered = providers
    .filter((p) => {
      const queryText = `${p.name} ${p.country} ${p.skills_offered.join(" ")} ${p.tags.join(" ")}`.toLowerCase();
      const queryMatch = !q || queryText.includes(q);
      const regionMatch = !region || p.region.toLowerCase() === region.toLowerCase();
      const openMatch = !open || String(p.open_source) === open;
      return queryMatch && regionMatch && openMatch;
    })
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="flex flex-col min-h-screen bg-background text-sans">
      {/* ── Page Header ── */}
      <section className="border-b bg-muted/20 py-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10">
              <Users className="w-3.5 h-3.5" />
              <span>Global Network</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Skill <span className="text-primary italic">Providers.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Discover the platforms, organizations, and ecosystems providing elite-tier AI skills and specialized agent capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-8 py-4">
          <form className="flex flex-col md:flex-row items-center gap-4" action="/providers">
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                name="q" 
                defaultValue={params.q || ""} 
                placeholder="Search by provider, skill, category..." 
                className="pl-10 h-10 rounded-xl bg-muted/30 border-border/50 focus-visible:ring-primary/20"
              />
            </div>
            
            <div className="relative w-full md:max-w-[200px] group">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                name="region" 
                defaultValue={region} 
                placeholder="Region" 
                className="pl-10 h-10 rounded-xl bg-muted/30 border-border/50 focus-visible:ring-primary/20"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button type="submit" className="flex-1 md:flex-none h-10 px-6 rounded-xl font-bold">
                Apply
              </Button>
              <Button variant="outline" asChild className="h-10 px-6 rounded-xl font-bold border-border/50">
                <Link href="/providers">
                  <X className="w-4 h-4 mr-2" />
                  Reset
                </Link>
              </Button>
            </div>

            <div className="ml-auto hidden lg:block">
              <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Globe className="w-3 h-3 text-primary" /> Worldwide</span>
                <span className="w-px h-3 bg-border" />
                <span>{filtered.length} Providers Found</span>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((provider) => (
            <ProviderCard key={provider.name} provider={provider} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
              <Users className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">No providers found</h3>
              <p className="text-muted-foreground">Try adjusting your search or region filters.</p>
            </div>
            <Button variant="link" asChild>
              <Link href="/providers">Clear all filters</Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
