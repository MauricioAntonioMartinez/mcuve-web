import Link from "next/link";
import React from "react";
import xw from "xwind";

interface Props {}

export const Menu = (props: Props) => {
  return (
    <ul css={xw`flex space-x-4`}>
      {/* <MenuItem path="/blog" label="Blog" /> */}
      <MenuItem path="/about-me" label="About me" />
      <MenuItem path="/projects" label="Projects" />
    </ul>
  );
};

const MenuItem = ({ label, path }: { path: string; label: string }) => (
  <Link href={path}>
    <a css={xw``}>
      <li
        css={xw`cursor-pointer px-4 justify-center rounded-xl bg-warning text-black bg-opacity-80  hover:text-black hover:bg-white  transform duration-150 hover:scale-110 hover:shadow-lg shadow-md text-lg`}
      >
        {label}
      </li>
    </a>
  </Link>
);
