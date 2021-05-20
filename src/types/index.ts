export type Post = {
  image: string;
  excerpt: string;
  coverImage: string;
  title: string;
  content: string;
};

export type Tech = {
  name: string;
  icon: string;
  url: string;
};

export type Project = {
  name: string;
  excerpt: string;
  description: string;
  isTop: boolean;
  tech: Tech[];
  repo: string;
  image: string;
  preview: string;
};
