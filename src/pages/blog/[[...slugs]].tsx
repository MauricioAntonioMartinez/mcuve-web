import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import xw from "xwind";
import { PostItem } from "../../components/post/PostItem";
import { Header } from "../../components/ui/Header";
import { getContentPost, getPaths } from "../../lib/posts";
import { Post } from "../../types";

export default function Blogs({ post }: { post: Post }) {
  return (
    <section css={xw`container mr-auto`}>
      <Header image={post.image} title={post.title} subtitle={post.excerpt} />
      <PostItem post={post} />
    </section>
  );
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
