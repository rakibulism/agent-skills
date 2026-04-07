import fs from "node:fs/promises";
import path from "node:path";

export async function listCommand(args) {
  const categoryIndex = args.indexOf("--category");
  const category = categoryIndex >= 0 ? args[categoryIndex + 1] : null;
  const root = path.resolve(process.cwd(), "skills");
  const files = (await fs.readdir(root)).filter((f) => f.endsWith(".prompt.md"));

  for (const file of files) {
    const text = await fs.readFile(path.join(root, file), "utf8");
    const line = text.split("\n").find((l) => l.startsWith("category:"));
    const value = line ? line.replace("category:", "").trim() : "unknown";
    if (!category || value === category) console.log(file.replace(".prompt.md", ""));
  }
}
