import Image from "next/image";
import React from "react";
import xw from "xwind";
import { Certification } from "../../types";

interface Props {
  certification: Certification;
}

export const CertificationItem = ({ certification }: Props) => {
  return (
    <div css={xw`flex flex-col space-y-10  overflow-visible`}>
      <a target="_blank" href={certification.url}>
        <Image
          src={certification.image}
          width={200}
          height={200}
          css={xw`shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transform duration-200  z-20`}
        />
      </a>
    </div>
  );
};
