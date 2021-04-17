import React from "react";
import xw from "xwind";

interface Props {}

export const ProjectItem = (props: Props) => {
  return (
    <div css={xw`flex flex-col lg:flex-row`}>
      <div
        css={xw`relative h-64 sm:h-80 w-full lg:h-auto lg:w-1/3 xl:w-2/5 flex-none`}
      >
        <img
          src={`https://placeimg.com/480/480/tech`}
          css={xw`absolute inset-0 h-full w-full object-cover`}
        />
        <span
          css={xw`absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16`}
        ></span>
        <div
          css={xw`relative flex justify-end lg:justify-start flex-wrap text-white text-xl font-bold m-4`}
        >
          <div css={xw`bg-green-500 px-4 py-1 rounded`}>Special Offer</div>
        </div>
      </div>
      <div css={xw`w-full`}>
        <div css={xw`p-8`}>
          <div css={xw`flex justify-between items-start`}>
            <h3 css={xw`text-xl font-bold mb-8`}>A Dummy Title</h3>
            <a css={xw`text-gray-400 hover:text-gray-800 p-1`}>
              <svg
                css={xw`w-10 h-10`}
                fill={`none`}
                stroke={`currentColor`}
                viewBox={`0 0 24 24`}
                xmlns={`http://www.w3.org/2000/svg`}
              >
                <path
                  stroke-linecap={`round`}
                  stroke-linejoin={`round`}
                  stroke-width={`1`}
                  d={`M6 18L18 6M6 6l12 12`}
                ></path>
              </svg>
            </a>
          </div>
          <div css={xw`relative`}>
            <header css={xw`flex items-end text-sm`}>
              <button
                css={xw`border border-b-0 px-3 py-1 text-sm focus:outline-none rounded-tl-md`}
              >
                Description
              </button>
              <button css={xw`border border-b-0 px-3 py-1 focus:outline-none`}>
                Terms
              </button>
              <button
                css={xw`border border-b-0 px-3 py-1 focus:outline-none rounded-tr-md`}
              >
                Contact
              </button>
            </header>
            <div
              css={xw`border p-2 h-48 overflow-y-auto rounded-b-xl rounded-tr-xl`}
              id={`tabs-contents`}
            >
              <div x-show={`activeTab===1`}>
                <p css={xw`text-xs text-gray-500 `}>
                  This is the text for Tab1. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div x-show={`activeTab===2`}>
                <p css={xw`text-xs text-gray-500 `}>
                  This is the text for Tab2. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>
              <div x-show={`activeTab===3`}>
                <p css={xw`text-xs text-gray-500 `}>
                  This is the text for Tab 3. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div
            css={xw`flex justify-end items-center text-sm font-bold mt-8 gap-4`}
          >
            <a
              css={xw`text-blue-700 border border-blue-300 hover:border-blue-700 px-4 py-1 rounded`}
            >
              Website
            </a>
            <div css={xw`text-red-500 font-normal text-xs px-4 py-1 rounded`}>
              Report
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
