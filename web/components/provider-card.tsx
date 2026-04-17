import { ExternalLink, MapPin, Globe, Shield, ShieldAlert, Cpu } from "lucide-react";
import { Provider } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group border-border/50 overflow-hidden relative">
      <CardHeader className="p-5 pb-3">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{provider.name}</h3>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
              <MapPin className="w-3 h-3" />
              {provider.country}
            </div>
          </div>
          <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:rotate-12 transition-transform">
            <Cpu className="w-5 h-5" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-5 pt-0 flex-grow flex flex-col gap-4">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground/80">Skills Offered:</p>
          <div className="flex flex-wrap gap-1.5">
            {provider.skills_offered.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-2 py-0 text-[10px] font-bold uppercase tracking-wider bg-primary/5 text-primary/70 border-none">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {provider.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-medium text-muted-foreground italic">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 border-t bg-muted/5 flex items-center justify-between gap-2 mt-auto">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tight py-0">
            {provider.region}
          </Badge>
          <Badge variant={provider.open_source ? "outline" : "secondary"} className="text-[10px] font-bold uppercase tracking-tight py-0 flex items-center gap-1 border-none bg-muted/50">
            {provider.open_source ? <Globe className="w-3 h-3" /> : <ShieldAlert className="w-3 h-3" />}
            {provider.open_source ? "Open Source" : "Closed Source"}
          </Badge>
        </div>
        <Button variant="ghost" size="sm" asChild className="h-8 px-2 text-primary font-bold hover:bg-primary/10">
          <a href={provider.link} target="_blank" rel="noreferrer">
            <ExternalLink className="w-3.5 h-3.5 mr-1" />
            Visit
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
