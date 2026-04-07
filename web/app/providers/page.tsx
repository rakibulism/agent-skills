import { ProviderCard } from "@/components/provider-card";
import { providers } from "@/lib/providers";

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
    <div className="stack">
      <h1>Worldwide Skill Providers</h1>
      <form className="filters" action="/providers">
        <input name="q" defaultValue={params.q || ""} placeholder="Search by skill, provider, category" />
        <input name="region" defaultValue={region} placeholder="Region (Asia, Europe...)" />
        <select name="open_source" defaultValue={open}>
          <option value="">Any license</option>
          <option value="true">Open source</option>
          <option value="false">Closed source</option>
        </select>
        <button type="submit">Filter</button>
      </form>
      <p className="muted">Showing {filtered.length} providers</p>
      <div className="grid">{filtered.map((provider) => <ProviderCard key={provider.name} provider={provider} />)}</div>
    </div>
  );
}
