import React from "react";
import xw from "xwind";

interface Props {
  title: string;
}

export const PostLayout: React.FC<Props> = ({ title, children }) => {
  return <div css={xw``}>{children}</div>;
};
