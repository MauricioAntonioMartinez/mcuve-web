import React, { useState } from "react";
import xw from "xwind";
import { techs } from "../../constants/TechLearning";
import { Project } from "../../types";

interface Props {
  project: Project;
}

export const ProjectItem = ({ project }: Props) => {
  const [tab, setTab] = useState(1);

  return (
    <div css={xw`flex flex-col lg:flex-row w-full`}>
      <div
        css={xw`relative h-64 sm:h-80 w-full lg:h-auto lg:w-1/3 xl:w-2/5 flex-none`}
      >
        <img
          src={project.preview}
          css={xw`absolute inset-0 h-full w-full object-cover`}
        />
        <span
          css={xw`absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16`}
        ></span>
        <div
          css={xw`relative flex justify-end lg:justify-start flex-wrap text-white text-xl font-bold m-4`}
        >
          <div css={xw`bg-light px-4 py-1 rounded`}>{project.name}</div>
        </div>
      </div>
      <div css={xw`w-full`}>
        <div css={xw`p-8`}>
          <div css={xw`relative`}>
            <header css={xw`flex items-end text-sm`}>
              <button
                onClick={() => setTab(1)}
                css={[
                  xw`border border-b-0 px-3 py-1  text-sm focus:outline-none rounded-tl-md `,
                  tab === 1 ? xw`bg-primary text-white` : xw``,
                ]}
              >
                Description
              </button>

              <button
                onClick={() => setTab(2)}
                css={[
                  xw`border border-b-0 px-3 py-1  text-sm focus:outline-none rounded-tl-md `,
                  tab === 2 ? xw`bg-primary text-white` : xw``,
                ]}
              >
                Technologies
              </button>
            </header>
            <div
              css={xw`border p-2 h-48 overflow-y-auto rounded-b-xl rounded-tr-xl`}
              id={`tabs-contents`}
            >
              {tab === 1 && (
                <div>
                  <p css={xw`text-lg text-gray-500 `}>{project.description}</p>
                </div>
              )}
              {tab === 2 && (
                <div css={xw`flex justify-center items-center h-full`}>
                  {project.tech.map((t) => (
                    <a
                      href={techs[t].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      css={xw`w-40 h-40 rounded-full bg-white border-2 border-primary  -ml-5 hover:shadow-lg`}
                    >
                      <img
                        css={xw`w-40 h-40 object-fill rounded-full`}
                        src={techs[t].icon}
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            css={xw`flex justify-end items-center text-sm font-bold mt-8 gap-4`}
          >
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              css={xw`text-primary border border-primary hover:border-light hover:text-light px-4 py-1 rounded cursor-pointer`}
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
