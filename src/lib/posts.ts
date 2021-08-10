import fs from "fs";
import gray from "gray-matter";
import { GetStaticProps } from "next";
import path from "path";
import { ContentPost, Post } from "../types";

export const POSTS_PATH = path.join(process.cwd(), "posts");

// TODO: this thing does not work properly
const getPostUrls = (fatherPath: string, files = [] as string[]): string => {
  const stat = fs.statSync(fatherPath);
  if (stat.isDirectory()) {
    const items = fs.readdirSync(fatherPath);
    const urls = items.map((item) =>
      getPostUrls(path.join(fatherPath, item), files)
    );
    return urls.join(" ");
  }
  return fatherPath;
};

export const getPaths = () => {
  const urls = getPostUrls(POSTS_PATH).split(" ");
  return urls.map((url) => url.replace(POSTS_PATH, "").replace(".mdx", ""));
};

export const getAllPosts = () => {
  const paths = getPaths();
  const posts = paths.map((p) => {
    const content = fs.readFileSync(path.join(POSTS_PATH, `${p}.md`), "utf-8");
    const post = gray(content);
    return { ...post.data, content: post.content } as Post;
  });
  return posts;
};

export const getContentPost = (slugs: string[], locale?: string) => {
  console.log(`Locale ${locale}`);
  const content = fs.readFileSync(
    path.join(
      ...[
        POSTS_PATH as string,
        ...slugs.slice(0, slugs.length - 1),
        slugs[slugs.length - 1] + ".mdx",
      ]
    ),
    "utf-8"
  );
  const post = gray(content);
  return { metadata: post.data, content: post.content } as ContentPost;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx);

  return {
    props: {
      post: {
        title: "K8s with a raspberry pi",
        link: "",
        date: "2021-06-26",
      },
    },
  };
};
