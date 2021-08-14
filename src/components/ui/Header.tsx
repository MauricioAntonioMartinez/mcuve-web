import Image from "next/image";
import React from "react";
import xw from "xwind";

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

export const Header = ({ title, subtitle, image }: Props) => {
  return (
    <header css={xw`relative h-96`}>
      <div
        css={xw`absolute w-full h-full bg-black  p-8 z-10 bg-opacity-40 flex flex-col justify-end`}
      >
        {/* <h2 css={xw`font-bold text-7xl text-light `}>{title}</h2>
          <Description css={xw`text-2xl text-gray-400 italic w-2/3`}>
            {subtitle}
          </Description> */}
      </div>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        css={xw`absolute w-full h-full bg-black z-0`}
      />
    </header>
  );
};
