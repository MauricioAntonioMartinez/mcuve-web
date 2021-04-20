import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import xw from "xwind";

interface Props {
  hideModal(): void;
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({
  children,
  hideModal,
}) => {
  const element = document.getElementById("modals");
  if (!element) return null;
  return ReactDOM.createPortal(
    <div
      css={xw`
          fixed inset-0 bg-black bg-opacity-70
          z-50
        `}
      onClick={() => hideModal()}
    >
      <div css={xw`flex justify-center items-center h-screen w-screen`}>
        <dialog
          open
          css={xw`rounded-2xl overflow-hidden p-0 w-auto max-w-7xl md:mx-auto md:w-2/3 shadow-lg m-8`}
        >
          <div
            css={xw`flex flex-col lg:flex-row`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </dialog>
      </div>
    </div>,
    element
  );
};
