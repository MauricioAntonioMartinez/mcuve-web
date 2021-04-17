import React, { PropsWithChildren } from "react";
import xw from "xwind";

interface Props {}

export const Modal: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      css={xw`
          fixed inset-0 bg-black bg-opacity-70
        `}
    >
      <div css={xw`flex justify-center items-center h-screen w-screen`}>
        <dialog
          open
          css={xw`rounded-2xl overflow-hidden p-0 w-auto max-w-7xl md:mx-auto md:w-2/3 shadow-lg m-8`}
        >
          <div css={xw`flex flex-col lg:flex-row`}>{children}</div>
        </dialog>
      </div>
    </div>
  );
};
