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

type Props = {
  source: MDXRemoteSerializeResult;
  metadata: Omit<Post, "slug">;
};

const components = {};

export const mdxComponents: MDXProviderComponentsProp = {
  pre: ({ className, ...props }) => (
    <pre
      className={`${className} rounded-md bg-gray-300 py-3 px-4 overflow-x-auto`}
      {...props}
    />
  ),
  code: ({ className, ...props }: any) => (
    <code className={`${className} text-gray-500`} {...props} />
  ),
};

const PostPage: React.FC<Props> = ({ source, metadata }: Props) => {
  const router = useRouter();
  const lang = router.locale;

  //   const ogImage = SITE_URL + metadata.thumbnail;
  console.log(source);
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
        {/* <meta property="og:image" content={ogImage} key="ogImage" /> */}
      </Head>

      <article className="prose prose-green dark:prose-dark m-auto">
        <div className="mb-4">
          {/* <Thumbnail title={metadata.title} src={metadata.thumbnail} /> */}
        </div>

        <h1>{metadata.title}</h1>

        <p className="font-bold">
          {lang === "ja" ? "分量：" : "Yields: "}
          {/* {metadata.yields} */}
        </p>

        {/* <p>{metadata.description}</p> */}

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
