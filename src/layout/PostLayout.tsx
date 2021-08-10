import React from "react";

interface Props {
  title: string;
}

export const PostLayout: React.FC<Props> = ({ title, children }) => {
  return <div>{children}</div>;
};
