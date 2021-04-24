import React from "react";
import xw from "xwind";
import { McuveIcon } from "../components/ui/McuveIcon";
import { Menu } from "./Menu";

interface Props {}

export const Header = (props: Props) => {
  return (
    <section
      css={xw`w-full z-50 fixed h-14 shadow-md bg-light flex  justify-around items-center `}
    >
      <McuveIcon />
      <Menu />
    </section>
  );
};
