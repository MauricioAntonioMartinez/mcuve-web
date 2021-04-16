import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import xw from "xwind";
import { PostItem } from "../../components/post/PostItem";
import { getContentPost, getPaths } from "../../lib/posts";
import { Post } from "../../types";

export default function Blogs({ post }: { post: Post }) {
  return (
    <section css={xw`container mr-auto`}>
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
