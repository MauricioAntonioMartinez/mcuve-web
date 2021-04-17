import Image from "next/image";
import React from "react";
import xw from "xwind";

interface Props {}

export const LandingHead = (props: Props) => {
  return (
    <section css={xw`bg-primary w-full h-80 relative `}>
      <header css={xw`text-center pt-4`}>
        <blockquote css={xw`sm:text-7xl  text-5xl italic inline`}>
          "Train,eat,code repeat."{" "}
          <blockquote css={xw`text-gray-400 sm:text-5xl  text-2xl`}>
            by mcuve
          </blockquote>
        </blockquote>
      </header>
      <div
        css={xw`absolute -inset-y-16    top-1/2 flex w-full justify-center `}
      >
        <div>
          <Image
            src="/mcuve.jpg"
            width={300}
            height={300}
            css={xw`rounded-full`}
          />
        </div>
      </div>
    </section>
  );
};
