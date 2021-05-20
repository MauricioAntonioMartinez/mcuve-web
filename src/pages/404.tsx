import Image from "next/image";
import React from "react";
import xw from "xwind";

interface Props {}

export default (props: Props) => {
  return (
    <article css={xw`w-full h-auto flex-1 flex justify-center items-center`}>
      <Image alt="404" src="/404.svg" width={500} height={500} />
      <div>
        <p css={xw`font-bold text-3xl mb-3`}>Developing ...</p>
        <p>I am working on it :( my apologize</p>
      </div>
    </article>
  );
};
