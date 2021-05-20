import React from "react";
import xw from "xwind";

interface Props {
  title: string;
  tech: string[];
}

export const TechLearnItem = ({ tech, title }: Props) => {
  return (
    <div css={xw`container max-w-md py-4 px-8 bg-white shadow-lg rounded-lg `}>
      <div css={xw`flex justify-center md:justify-end -mt-16`}></div>
      <div>
        <h2 css={xw`text-gray-800 text-3xl font-semibold mb-4`}>{title}</h2>
        <div css={xw`flex`}>
          {tech.map((t) => (
            <img
              css={xw`w-20 h-20 object-fill rounded-full bg-white border-2 border-primary  -ml-5`}
              src={t}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
