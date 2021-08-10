export type Tech = {
  icon: string;
  name: string;
  url: string;
};

export type Post = {
  image: string;
  excerpt: string;
  description: string;
  coverImage: string;
  title: string;
  path: string;
  date: string;
  content: string;
};

export type ContentPost = {
  metadata: Post;
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

export type Certification = {
  title: string;
  url: string;
  image: string;
};
