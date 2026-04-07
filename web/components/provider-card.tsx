import { ExternalLink } from "lucide-react";
import { Provider } from "@/lib/types";

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <article className="card">
      <div className="provider-head">
        <h3>{provider.name}</h3>
        <span className="muted">{provider.country}</span>
      </div>
      <p className="muted">Skills: {provider.skills_offered.join(", ")}</p>
      <div className="tags">{provider.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
      <div className="actions">
        <span className="badge">{provider.region}</span>
        <span className="badge">{provider.open_source ? "Open Source" : "Closed Source"}</span>
      </div>
      <a className="link" href={provider.link} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Visit</a>
    </article>
  );
}
