import React from "react";
import xw from "xwind";
import { Post } from "../../types";

interface Props {
  post: Post;
}

export const MainPost = (props: Props) => {
  return (
    <div css={xw`w-full `}>
      <div>{/* <Image src={} /> */}</div>
    </div>
  );
};
