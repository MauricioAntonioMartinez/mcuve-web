import React from "react";
import xw from "xwind";
import { Tech } from "../../types";

interface Props {
  title: string;
  tech: Tech[];
}

export const TechLearnItem = ({ tech, title }: Props) => {
  return (
    <div css={xw`container max-w-md py-4 px-8 bg-white shadow-lg rounded-lg `}>
      <div css={xw`flex justify-center md:justify-end -mt-16`}></div>
      <div>
        <h2 css={xw`text-gray-800 text-3xl font-semibold mb-4`}>{title}</h2>
        <div css={xw`flex`}>
          {tech.map((t, i) => (
            <a
              key={`tech-${i}`}
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              css={xw`w-20 h-20 rounded-full bg-white border-2 border-primary  -ml-5 hover:shadow-lg`}
            >
              <img css={xw`w-20 h-20 object-fill rounded-full`} src={t.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
