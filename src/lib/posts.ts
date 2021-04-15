import fs from "fs";
import gray from "gray-matter";
import path from "path";
import { Post } from "../types";

export const postsPath = path.join(process.cwd(), "posts");

const getPostUrls = (fatherPath: string, files = [] as string[]): string => {
  const stat = fs.statSync(fatherPath);
  if (stat.isDirectory()) {
    const items = fs.readdirSync(fatherPath);
    const urls = items.map(
      (item) => getPostUrls(path.join(fatherPath, item), files) //.forEach((p) => files.push(p))
    );
    return urls.join(" ");
  }
  return fatherPath;
};

export const getPaths = () => {
  const urls = getPostUrls(postsPath).split(" ");

  return urls.map((url) => url.replace(postsPath, "").replace(".md", ""));
};

export const getContentPost = (slugs: string[]) => {
  const content = fs.readFileSync(
    path.join(
      ...[
        postsPath as string,
        ...slugs.slice(0, slugs.length - 1),
        slugs[slugs.length - 1] + ".md",
      ]
    ),
    "utf-8"
  );
  const post = gray(content);
  return { ...post.data, content: post.content } as Post;
};
