import Image from "next/image";
import React from "react";
import xw from "xwind";
import { Post } from "../../types";

interface Props {
  post: Post;
}

export const PostItem = ({ post }: Props) => {
  return (
    <div
      css={xw`container content-around border-2 shadow-md  border-gray-500 flex flex-col`}
    >
      <Image src={post.coverImage} width={400} height={200} />
      <div css={xw("p-2 justify-items-start space-y-2")}>
        <div css={xw`text-lg text-blue-600`}>{post.title}</div>
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
};
