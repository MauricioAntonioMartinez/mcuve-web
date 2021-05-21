export type Tech = {
  icon: string;
  name: string;
  url: string;
};

export type Post = {
  image: string;
  excerpt: string;
  coverImage: string;
  title: string;
  content: string;
};

export type Project = {
  name: string;
  excerpt: string;
  description: string;
  isTop: boolean;
  tech: string[];
  repo: string;
  image: string;
  preview: string;
};
