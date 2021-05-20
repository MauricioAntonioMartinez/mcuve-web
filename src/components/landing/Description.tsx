import React, { PropsWithChildren } from "react";
import xw, { cx } from "xwind";

const base = xw`text-gray-700 break-words text-xl`;

export const Description: React.FC<PropsWithChildren<{ className?: any }>> = ({
  children,
  className,

  ...props
}) => {
  return (
    <p {...props} css={base} className={cx(className)}>
      {children}
    </p>
  );
};
