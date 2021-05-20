import Image from "next/image";
import React from "react";
import xw from "xwind";
import { Event } from "../../constants/Experience";

interface Props {
  direction: "right" | "left";
  event: Event;
}

export const ExperienceItem = ({ direction, event }: Props) => {
  return (
    <div css={xw`flex sm:w-1/2 md:w-full  `}>
      {direction === "right" && (
        <>
          <div css={xw`w-24 border-b-2 border-gray-400 h-0 self-center`}></div>
          <div css={xw`w-0 border-l-2 border-gray-400 h-16 self-center`}></div>
        </>
      )}
      <div
        css={[
          xw`p-8 shadow-lg bg-warning  border-gray-400 hover:scale-110  transform transition duration-200 ease-in-out `,
          direction === "right" ? xw`border-r-2` : xw`border-l-2`,
        ]}
      >
        <div css={xw`-mt-24 rounded-2xl  `}>
          <Image
            src="/mcuve.jpg"
            width={100}
            height={100}
            css={xw`rounded-xl `}
          />
        </div>
        <div css={xw`flex flex-col items-end space-y-2`}>
          <h1 css={xw`font-bold text-3xl self-start`}>{event.title}</h1>
          <p css={xw`text-light`}>{event.excerpt}</p>
          <span css={xw`text-gray-400`}>{event.start}</span>
        </div>
      </div>
      {direction === "left" && (
        <>
          <div css={xw`w-0 border-r-2 border-gray-400 h-16 self-center`}></div>
          <div css={xw`w-24 border-b-2 border-gray-400 h-0 self-center`}></div>
        </>
      )}
    </div>
  );
};
