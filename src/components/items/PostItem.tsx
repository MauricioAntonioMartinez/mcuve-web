import Image from "next/image";
import React from "react";
import xw from "xwind";
import { Post } from "../../types";
import { Description } from "../landing/Description";

interface Props {
  post: Post;
  onClick(): void;
}

export const PostItem = ({ post, onClick }: Props) => {
  const { title, image, excerpt } = post;
  return (
    <div
      onClick={onClick}
      css={xw` max-w-md p-4 border-2 bg-white shadow-md flex flex-col divide-y-2 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl`}
    >
      <div css={xw`relative bg-cover bg-center  w-full  h-40`}>
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      <section css={xw`p-2 space-y-4 bg-white`}>
        <h1 css={xw`font-bold text-4xl`}>{title}</h1>
        <Description>{excerpt}</Description>
      </section>
    </div>
  );
};
