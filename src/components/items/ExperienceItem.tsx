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
    <div css={xw`flex w-1/2   `}>
      {direction === "right" && (
        <>
          <div css={xw`w-24 border-b-2 border-gray-400 h-0 self-center`}></div>
          <div css={xw`w-0 border-l-2 border-gray-400 h-16 self-center`}></div>
        </>
      )}
      <div
        css={[
          xw`p-8 shadow-lg  border-gray-400 `,
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
        <p css={xw`text-light`}>{event.excerpt}</p>
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
