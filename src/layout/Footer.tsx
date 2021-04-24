import React from "react";
import xw from "xwind";
import { McuveIcon } from "../components/ui/McuveIcon";

interface Props {}

export const Footer = (props: Props) => {
  const buildLinks = () => (
    <div css={xw`flex flex-col  space-y-3`}>
      <h1 css={xw`text-4xl `}>Contact</h1>
      <ul>
        <li>
          <a>Twitter</a>
        </li>
        <li>
          <a>Facebook</a>
        </li>
        <li>
          <a>Instagram</a>
        </li>
      </ul>
    </div>
  );

  return (
    <section css={xw`w-full bg-black `}>
      <div css={xw`text-white grid grid-cols-6 gap-x-2 p-10`}>
        <div css={xw`flex flex-col space-y-3 col-span-3 w-1/2`}>
          <McuveIcon />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            doloremque? Omnis error totam dolorem quibusdam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Animi porro optio expedita
            quam!
          </p>
        </div>
        {buildLinks()}
        {buildLinks()}
        {buildLinks()}
      </div>
      <div css={xw`bg-primary h-12 w-full`}>
        <div css={xw`mr-auto`}>
          <span>Twitter</span>
          <span>Instagram</span>
        </div>
      </div>
    </section>
  );
};
