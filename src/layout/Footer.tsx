import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import xw from "xwind";
import { McuveIcon } from "../components/ui/McuveIcon";

interface Props {}

const extraResources = [
  {
    title: "Contact",
    links: ["mcuve@outlook.com", "MauricioAntonioMartinez@outlook.com"],
  },
  { title: "Liking", links: ["fitness", "Web Development", "Movies"] },
  {
    title: "Aptitudes",
    links: ["Quick learning", "Initiative", "Design Thinking."],
  },
];

export const Footer = (props: Props) => {
  return (
    <section css={xw`w-full bg-black `}>
      <div css={xw`text-white grid grid-cols-6 gap-x-2 p-10`}>
        <div css={xw`flex flex-col space-y-3 col-span-3 w-1/2`}>
          <McuveIcon />
          <p>
            mcuve is an acronym of my first name and last names,(Mauricio
            Antonio Martínez Martínez). the three M's made my nickname from the
            good old math we know that m<sup>3</sup> sounds like mcuve.
          </p>
        </div>
        {extraResources.map((res) => {
          return (
            <div css={xw`flex flex-col  space-y-3`}>
              <h1 css={xw`text-4xl `}>{res.title}</h1>
              <ul>
                {res.links.map((l) => (
                  <li key={l}>
                    <a>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div
        css={xw`bg-primary h-12 w-full flex items-center justify-end space-x-1 p-3`}
      >
        <FontAwesomeIcon
          key={1}
          icon={faInstagram}
          size="2x"
          href="https://www.instagram.com/mcuvee"
          cursor="pointer"
        />
        <FontAwesomeIcon
          key={2}
          icon={faTwitter}
          size="2x"
          href="https://www.twitter.com/_mcuve"
          cursor="pointer"
        />
        <FontAwesomeIcon
          key={3}
          icon={faFacebook}
          size="2x"
          href=""
          cursor="pointer"
        />
        <FontAwesomeIcon
          key={4}
          icon={faLinkedin}
          size="2x"
          href=""
          cursor="pointer"
        />
      </div>
    </section>
  );
};
