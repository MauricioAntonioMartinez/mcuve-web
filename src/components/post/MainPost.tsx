import Image from "next/image";
import React from "react";
import xw from "xwind";
import { Post } from "../../types";

interface Props {
  post: Post;
  onClick(): void;
}

export const MainPost = ({ post, onClick }: Props) => {
  const { title, excerpt, image } = post;
  return (
    <div
      onClick={onClick}
      css={xw`w-full  border-black shadow-lg hover:shadow-xl cursor-pointer`}
    >
      <div css={xw`h-80 w-full relative`}>
        <Image src={image} layout="fill" objectFit="cover" />
        <div css={xw`absolute bottom-0 w-full h-1/3 bg-light bg-opacity-80`}>
          <div css={xw`p-4`}>
            <h1 css={xw` text-3xl text-black font-bold `}>{title}</h1>
            <p css={xw`text-xl text-white `}>{excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
