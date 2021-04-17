import Image from "next/image";
import Link from "next/link";
import React from "react";
import xw from "xwind";
import { Menu } from "./Menu";

interface Props {}

export const Header = (props: Props) => {
  return (
    <section
      css={xw`w-full fixed h-14 shadow-md bg-light flex  justify-around items-center `}
    >
      <Link href="/">
        <span css={xw`cursor-pointer flex items-end`}>
          <Image src="/assets/logo.png" width={50} height={50} />{" "}
          <p css={xw`pl-1 font-bold text-lg`}>mcuve</p>
        </span>
      </Link>
      <Menu />
    </section>
  );
};
