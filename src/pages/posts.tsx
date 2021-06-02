import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import xw from "xwind";
import { PostItem } from "../components/items/PostItem";
import { MainPost } from "../components/post/MainPost";
import { getAllPosts } from "../lib/posts";
import { Post } from "../types";

interface Props {
  posts: Post[];
}

const PostsPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  return (
    <section css={xw`container space-y-10 p-8`}>
      <h1 css={xw`text-4xl `}>Learning and documenting my journey</h1>
      <article>
        <MainPost onClick={() => router.push(posts[0].path)} post={posts[0]} />
        <div css={xw`mt-3 grid-cols-3`}>
          {posts.map((p) => {
            return <PostItem post={p} onClick={() => {}} />;
          })}
        </div>
      </article>
    </section>
  );
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
