import React from "react";
import ReactMarkDown from "react-markdown";
import xw from "xwind";
import { Post } from "../../types";

interface Props {
  post: Post;
}

export const PostItem = ({ post }: Props) => {
  const { title, image, path, content } = post;

  // const customRenders:ReactMarkdownOptions = {

  //   paragraph({ children }:any) {
  //     if (children[0].type === "image") {
  //       const image = children[0];
  //       return (
  //         <div className={classes.image}>
  //           <Image
  //             src={`/images/posts/${path}/${image.src}`}
  //             alt={image.alt}
  //             width={600}
  //             height={300}
  //           />
  //         </div>
  //       );
  //     }
  //     return <p> {children}</p>;
  //   },
  //   code({ language, value }:any) {
  //     return (
  //       <SyntaxHighLighter
  //         style={atomDark}
  //         language={language}
  //         children={value}
  //       />
  //     );
  //   },
  // };

  return (
    <article css={xw`container pt-8`}>
      <ReactMarkDown>{content}</ReactMarkDown>
    </article>
  );
};
