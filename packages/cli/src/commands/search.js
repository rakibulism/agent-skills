import fs from "node:fs/promises";
import path from "node:path";

export async function searchCommand(args) {
  const query = args.join(" ").trim().toLowerCase();
  if (!query) {
    console.error("Usage: search <query>");
    process.exit(1);
  }

  const root = path.resolve(process.cwd(), "skills");
  const files = (await fs.readdir(root)).filter((f) => f.endsWith(".prompt.md"));

  for (const file of files) {
    const text = await fs.readFile(path.join(root, file), "utf8");
    if (text.toLowerCase().includes(query)) {
      console.log(file.replace(".prompt.md", ""));
    }
  }
}
