import Link from "next/link";
import { Skill } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, ArrowRight, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group border-border/50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <CardHeader className="p-5 pb-3">
        <div className="flex justify-between items-start">
          <Badge 
            variant="outline" 
            className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-primary/5 text-primary border-primary/10"
          >
            {skill.category}
          </Badge>
          <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
            <Box className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-5 pt-0 flex-grow flex flex-col gap-4">
        <div>
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors mb-2 line-clamp-1">
            {skill.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {skill.description || "Sophisticated AI agent skill for advanced workflows and automation."}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {skill.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[11px] font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
          {skill.tags.length > 3 && (
            <span className="text-[11px] font-medium text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-full">
              +{skill.tags.length - 3}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 border-t bg-muted/5 flex items-center justify-between gap-2 mt-auto">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild className="h-8 px-2 text-muted-foreground hover:text-primary hover:bg-primary/5">
            <Link href={`/skills/${skill.slug}`}>
              <Eye className="w-4 h-4 mr-1.5" />
              <span className="text-xs font-semibold">Details</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild className="h-8 px-2 text-muted-foreground hover:text-primary hover:bg-primary/5">
            <a href={`/api/download/${skill.slug}`}>
              <Download className="w-4 h-4 mr-1.5" />
              <span className="text-xs font-semibold">Download</span>
            </a>
          </Button>
        </div>
        <div className="group/btn">
          <Link href={`/skills/${skill.slug}`} className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/5 text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground">
            <ArrowRight className="w-4 h-4 translate-x-[-2px] group-hover/btn:translate-x-0 transition-transform" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
