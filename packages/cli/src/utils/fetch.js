const base = "https://raw.githubusercontent.com/rakibulislam/agent-skills/main/skills";

export async function fetchSkill(slug) {
  const url = `${base}/${slug}.prompt.md`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Unable to fetch ${slug} from ${url}`);
  return await res.text();
}
