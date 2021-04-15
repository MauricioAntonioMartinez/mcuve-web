import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { PostItem } from "../../components/post/PostItem";
import { getContentPost, getPaths } from "../../lib/posts";
import { Post } from "../../types";

export default function Blogs({ post }: { post: Post }) {
  return <PostItem post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPaths();
  return {
    paths: paths.map((p) => ({ params: { slugs: p.split("/").slice(1) } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  return {
    props: {
      post: getContentPost(params?.slugs as string[]),
    },
  };
};
