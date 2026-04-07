import fs from "node:fs/promises";
import path from "node:path";

export async function writeSkill(slug, content, outputDir = ".") {
  const filePath = path.join(outputDir, `${slug}.prompt.md`);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(filePath, content, "utf8");
  return filePath;
}
