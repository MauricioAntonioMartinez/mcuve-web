import React from "react";
import xw from "xwind";

interface Props {}

export const Card = (props: Props) => {
  return (
    <div css={xw`container max-w-md py-4 px-8 bg-white shadow-lg rounded-lg `}>
      <div css={xw`flex justify-center md:justify-end -mt-16`}>
        <img
          css={xw`w-20 h-20 object-cover rounded-full border`}
          src="/tech/typescript.svg"
        />
      </div>
      <div>
        <h2 css={xw`text-gray-800 text-3xl font-semibold`}>Design Tools</h2>
        <p css={xw`mt-2 text-gray-600`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
        </p>
      </div>
      <div css={xw`flex justify-end mt-4`}>
        <a css={xw`text-xl font-medium text-indigo-500`}>John Doe</a>
      </div>
    </div>
  );
};
