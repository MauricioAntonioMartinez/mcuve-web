import Link from "next/link";
import React from "react";
import xw from "xwind";
import { Menu } from "./Menu";

interface Props {}

export const Header = (props: Props) => {
  return (
    <section
      css={xw`w-full fixed h-14 shadow-md bg-light flex  justify-around items-center`}
    >
      <Link href="/">
        <span css={xw`cursor-pointer`}>Mcuve</span>
      </Link>
      <Menu />
    </section>
  );
};
