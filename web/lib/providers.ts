import { Provider } from "./types";

export const providers: Provider[] = [
  { name: "OpenAI Skill Hub", country: "USA", region: "North America", skills_offered: ["AI Engineer", "Prompt Designer", "UX Expert"], tags: ["engineering", "design", "thinking"], open_source: true, popularity: 97, link: "https://openai.com" },
  { name: "Panze Labs", country: "Bangladesh", region: "Asia", skills_offered: ["UI Designer", "Copywriter", "Product Strategist"], tags: ["design", "writing", "product"], open_source: true, popularity: 80, link: "https://github.com" },
  { name: "Nordic Prompt Guild", country: "Sweden", region: "Europe", skills_offered: ["Brand Identity", "Creative Director", "SEO Expert"], tags: ["design", "writing", "marketing"], open_source: false, popularity: 74, link: "https://example.com" },
  { name: "Lumen Skills", country: "Brazil", region: "South America", skills_offered: ["Frontend React", "Backend Node", "Data Analyst"], tags: ["engineering", "analysis"], open_source: true, popularity: 71, link: "https://example.com" },
  { name: "Sahara OSS Skills", country: "Morocco", region: "Africa", skills_offered: ["UX Expert", "Scrum Master", "Technical Writer"], tags: ["design", "ops", "writing"], open_source: true, popularity: 66, link: "https://example.com" },
  { name: "Auckland Agent Forge", country: "New Zealand", region: "Oceania", skills_offered: ["DevOps Engineer", "API Designer", "Growth Hacker"], tags: ["engineering", "product", "marketing"], open_source: false, popularity: 63, link: "https://example.com" }
];
