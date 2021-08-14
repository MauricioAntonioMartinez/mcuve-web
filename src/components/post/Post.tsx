import { Header } from "@/components/ui/Header";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Post } from "@/types";
import { MDXProvider, MDXProviderComponentsProp } from "@mdx-js/react";
import React, { PropsWithChildren } from "react";
import tinytime from "tinytime";
import xw from "xwind";
import { McuveIcon } from "../ui/McuveIcon";
import { PageTitle } from "./PageTitle";

interface Props {
  meta: { title: string; image: string; description: string; date: string };
  posts: string[];
}

export const mdxComponents: MDXProviderComponentsProp = {
  pre: ({ className, ...props }) => (
    <pre
      className={`${className} rounded-md bg-gray-500 py-3 px-4 overflow-x-auto`}
      {...props}
    />
  ),
  "pre.code": ({ className, ...props }: any) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
};

const postDateTemplate = tinytime("{dddd}, {MMMM} {DD}, {YYYY}");

interface Props {
  post: Post;
}

const PostContent: React.FC<PropsWithChildren<Props>> = ({
  post,
  children,
}) => {
  console.log(post);
  return (
    <>
      <Header
        title={post.title}
        subtitle={post.excerpt}
        image="/assets/cover-posts.jpg"
      />
      <SectionContainer>
        <article className="py-16 w-full m-auto">
          {/* <Head>
              <title>{meta.title} – mcuve</title>
              <meta name="twitter:site" content="@mcuvee" />
              <meta name="twitter:creator" content="@mcuvee" />
              <meta name="twitter:title" content={`${meta.title} –  mcuve`} />
              <meta name="twitter:description" content={meta.description} />
              <>
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:image"
                  content={`https://www.mcuve.com${meta.image}`}
                />
              </>

              <meta
                property="og:url"
                content={`https://www.mcuve.com${router.pathname}`}
              />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content={`${meta.title} – Tailwind CSS`}
              />
              <meta property="og:description" content={meta.description} />
              <meta
                property="og:image"
                content={`https://www.mcuve.com${meta.image}`}
              />
              <meta name="description" content={meta.description}></meta>
            </Head> */}
          <header className="pt-6 xl:pb-10">
            <div
              css={xw`space-y-1 text-center flex flex-col items-center justify-center`}
            >
              <McuveIcon />
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
                    <time dateTime={post.date}>
                      {postDateTemplate.render(new Date(post.date))}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{post.title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="mt-12">
            <div className="prose m-auto">
              <MDXProvider components={mdxComponents}>{children}</MDXProvider>
            </div>
          </div>
        </article>
      </SectionContainer>
    </>
  );
};

export default PostContent;
