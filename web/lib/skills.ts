import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { Skill } from "./types";

const SKILLS_DIR = path.resolve(process.cwd(), "..", "skills");

export async function getAllSkills(): Promise<Skill[]> {
  const files = await fs.readdir(SKILLS_DIR);
  const skills = await Promise.all(
    files.filter((file) => file.endsWith(".prompt.md")).map(async (file) => {
      const raw = await fs.readFile(path.join(SKILLS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(".prompt.md", ""),
        title: data.title || file.replace(".prompt.md", ""),
        category: data.category || "uncategorized",
        tags: Array.isArray(data.tags) ? data.tags : String(data.tags || "").split(",").map((v) => v.trim()).filter(Boolean),
        description: content.split("\n").find((l) => l.trim().length > 0)?.trim() || "Agent skill package",
        author: data.author || "agent-skills",
        version: String(data.version || "1.0.0"),
        compatible_with: Array.isArray(data.compatible_with) ? data.compatible_with : String(data.compatible_with || "").split(",").map((v) => v.trim()).filter(Boolean),
        body: content.trim()
      } satisfies Skill;
    })
  );

  return skills.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getSkillBySlug(slug: string): Promise<Skill | null> {
  const all = await getAllSkills();
  return all.find((skill) => skill.slug === slug) || null;
}
