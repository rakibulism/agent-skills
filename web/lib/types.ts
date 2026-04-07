export type Skill = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  author: string;
  version: string;
  compatible_with: string[];
  body: string;
};

export type Provider = {
  name: string;
  country: string;
  region: string;
  skills_offered: string[];
  tags: string[];
  open_source: boolean;
  popularity: number;
  link: string;
};
