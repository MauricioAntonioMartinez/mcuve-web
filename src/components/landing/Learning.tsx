import React from "react";
import xw from "xwind";
import { Tech } from "../../types";
import { TechLearnItem } from "../items/TechLearnItem";

interface Props {
  learning: Record<string, Tech[]>;
}

export const Learning = (props: Props) => {
  return (
    <section css={xw`p-4 grid sm:grid-cols-1 md:grid-cols-3 gap-6 gap-y-16`}>
      {Object.entries(props.learning).map(([field, items]) => (
        <TechLearnItem title={field} tech={items} />
      ))}
    </section>
  );
};
