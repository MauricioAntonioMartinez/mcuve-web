import { MDXProvider } from "@mdx-js/react";
import { Feed } from "feed";
import fs from "fs";
import ReactDOMServer from "react-dom/server";
import { mdxComponents } from "../src/components/post/Post";
import { getAllPosts } from "../src/lib/getAllPostPreviews";

const siteUrl = "https://www.mcuve.com";

const feed = new Feed({
  title: "Mcuve Portfolio",
  description: "Know me and my projects, i also have a blog.",
  id: siteUrl,
  link: siteUrl,
  language: "en",
  image: `${siteUrl}/favicon-32x32.png`,
  favicon: `${siteUrl}/favicon.ico`,
  copyright: `All rights reserved ${new Date().getFullYear()}, Tailwind Labs`,
  feedLinks: {
    rss: `${siteUrl}/feed.xml`,
    json: `${siteUrl}/feed.json`,
    atom: `${siteUrl}/atom.xml`,
  },
  author: {
    name: "Mauricio Antonio Martinez Martinez",
    link: "https://twitter.com/@mcuve",
  },
});

getAllPosts().forEach(({ link, module: { meta, default: Content } }) => {
  const mdx = (
    <MDXProvider components={mdxComponents}>
      <Content />
    </MDXProvider>
  );
  const html = ReactDOMServer.renderToStaticMarkup(mdx);
  const postText = `<p><em>(The post <a href="${siteUrl + link}">${
    meta.title
  }</a> appeared first on <a href="${siteUrl}">Tailwind CSS Blog</a>.)</em></p>`;
  feed.addItem({
    title: meta.title,
    id: meta.title,
    link,
    description: meta.description,
    content: html + postText,
    author: meta.authors.map(({ name, twitter }) => ({
      name,
      link: `https://twitter.com/${twitter}`,
    })),
    date: new Date(meta.date),
    image: siteUrl + meta.image,
    ...(meta.discussion
      ? {
          comments: meta.discussion,
          extensions: [
            {
              name: "_comments",
              objects: {
                about: "Link to discussion forum",
                comments: meta.discussion,
              },
            },
          ],
        }
      : {}),
  });
});

fs.writeFileSync("./out/feed.xml", feed.rss2());
fs.writeFileSync("./out/atom.xml", feed.atom1());
fs.writeFileSync("./out/feed.json", feed.json1());
