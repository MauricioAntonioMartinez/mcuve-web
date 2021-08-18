import { CodeBlock } from "@/components/items/CodeBlock";
import { PageTitle } from "@/components/post/PageTitle";
import { Header } from "@/components/ui/Header";
import { McuveIcon } from "@/components/ui/McuveIcon";
import { PostLayout } from "@/layout/PostLayout";
import { getContentPost, getPaths } from "@/lib/posts";
import { Post } from "@/types";
import { MDXProviderComponentsProp } from "@mdx-js/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import tinytime from "tinytime";
import xw from "xwind";

type Props = {
  source: MDXRemoteSerializeResult;
  metadata: Omit<Post, "slug">;
};

const postDateTemplate = tinytime("{dddd}, {MMMM} {DD}, {YYYY}");

export const mdxComponents: MDXProviderComponentsProp = {
  code: CodeBlock,
  h1: (props: any) => <h1 css={xw`text-2xl`}>{props.children}</h1>,
  h2: (props: any) => <h1 css={xw`text-3xl text-primary`}>{props.children}</h1>,
  a: ({ children }: any) => (
    <a css={xw`bg-white text-blue-400 font-bold underline cursor-pointer p-0`}>
      {children}
    </a>
  ),
  p: (props: { children: React.ReactNodeArray }) => {
    if (!Array.isArray(props.children)) {
      return <p>{props.children}</p>;
    }

    return (
      <div css={xw`inline leading-relaxed`}>
        {props.children.map((c) =>
          typeof c === "string" ? (
            <p css={xw`text-xl inline`}>{c}</p>
          ) : (
            <p css={xw`bg-black text-white inline  rounded mx-1`}>{c}</p>
          )
        )}
      </div>
    );
  },
  hr: () => <div css={xw`h-2`}></div>,
};

const PostPage: React.FC<Props> = ({ source, metadata }: Props) => {
  const router = useRouter();
  const lang = router.locale;

  //   const ogImage = SITE_URL + metadata.thumbnail;
  return (
    <PostLayout title={metadata.title}>
      <Head>
        <meta
          name="description"
          content={metadata.description}
          key="description"
        />
        <meta
          property="og:description"
          content={metadata.description}
          key="ogDescription"
        />
        <meta property="og:image" content="" key="ogImage" />
        <title>{metadata.title}</title>
      </Head>

      <header className="pt-6 xl:pb-10">
        <div
          css={xw`space-y-1 text-center flex flex-col items-center justify-center`}
        >
          <McuveIcon />
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={metadata.date}>
                  {postDateTemplate.render(new Date(metadata.date))}
                </time>
              </dd>
            </div>
          </dl>
          <div>
            <PageTitle>{metadata.title}</PageTitle>
          </div>
        </div>
      </header>

      <Header
        title={metadata.title}
        subtitle={metadata.excerpt}
        image="/assets/cover-posts.jpg"
      />

      <article className="max-w-2xl m-auto mt-10">
        <MDXRemote {...source} components={mdxComponents} />
      </article>
    </PostLayout>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { content, metadata } = getContentPost(
    params?.slug as string[],
    locale
  );

  const mdxSource = await serialize(content, { scope: metadata });

  return {
    props: {
      source: mdxSource,
      metadata,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const posts = getPaths();
  const paths = posts.map((slug) => ({
    params: {
      slug: slug.split("/").slice(1),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
