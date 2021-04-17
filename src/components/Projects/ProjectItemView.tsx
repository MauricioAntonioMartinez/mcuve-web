import Image from "next/image";
import React from "react";
import xw from "xwind";
import { Description } from "../landing/Description";

interface Props {}

export const ProjectItemView = (props: Props) => {
  return (
    <div
      css={xw` max-w-md p-4 border-2 bg-white shadow-md flex flex-col divide-y-2 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl`}
    >
      <div css={xw`relative bg-cover bg-center  w-full  h-40`}>
        <Image src="/assets/k8s/k8s.png" layout="fill" />
      </div>
      <section css={xw`p-2 space-y-4 bg-white`}>
        <h1 css={xw`font-bold text-4xl`}>Mertion</h1>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quae
          sed? Libero id.
        </Description>
      </section>
    </div>
  );
};
