import React from "react";
import xw from "xwind";
import { Card } from "../ui/Card";

interface Props {}

export const Learning = (props: Props) => {
  return (
    <section css={xw`p-4 grid grid-cols-3 gap-6 gap-y-16`}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};
