import React, { PropsWithChildren } from "react";
import xw, { cx } from "xwind";

//"react native style"
const styles = {
  button: xw`
    relative
    w-32 min-w-full
    flex justify-center
    py-2 px-2
    border border-transparent
    text-sm leading-5 font-medium
    rounded-md
    text-white
    focus[outline-none ring-2 ring-gray-200]
    transition duration-150 ease-in-out
  `,
};

interface Props {
  className?: string;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  ...props
}) => (
  <button {...props} css={styles.button} className={cx("group", className)}>
    {children}
  </button>
);
