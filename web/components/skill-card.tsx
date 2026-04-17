import Link from "next/link";
import { Skill } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="flex flex-col h-full hover:bg-muted/50 transition-colors group">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="px-2 py-0 text-[10px] uppercase tracking-wider font-bold">
            {skill.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-2 flex-grow flex flex-col gap-2">
        <div>
          <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors">
            {skill.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">#{skill.slug}</p>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {skill.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[11px] text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 border-t flex gap-4 mt-auto">
        <Link href={`/skills/${skill.slug}`} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
          <i className="ri-eye-line text-sm" aria-hidden="true" />
          Preview
        </Link>
        <a href={`/api/download/${skill.slug}`} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
          <i className="ri-download-line text-sm" aria-hidden="true" />
          Download
        </a>
      </CardFooter>
    </Card>
  );
}
