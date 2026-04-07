import { fetchSkill } from "../utils/fetch.js";
import { writeSkill } from "../utils/write.js";

export async function getCommand(args) {
  const slug = args[0];
  if (!slug) {
    console.error("Usage: get <slug> [--output path]");
    process.exit(1);
  }
  const outputIndex = args.indexOf("--output");
  const output = outputIndex >= 0 ? args[outputIndex + 1] : ".";

  const content = await fetchSkill(slug);
  const target = await writeSkill(slug, content, output);
  console.log(`Downloaded ${slug} to ${target}`);
}
