import Image from "next/image";
import Link from "next/link";
import React from "react";
import xw from "xwind";

interface Props {}

export const McuveIcon = (props: Props) => {
  return (
    <Link href="/">
      <span css={xw`cursor-pointer flex items-end`}>
        <Image src="/assets/logo.png" width={50} height={50} />{" "}
        <p css={xw`pl-1 font-bold text-lg`}>mcuve</p>
      </span>
    </Link>
  );
};
