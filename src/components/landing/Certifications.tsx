import React from "react";
import xw from "xwind";
import { Certification } from "../../types";
import { CertificationItem } from "../items/CertificationItem";

interface Props {
  certifications: Certification[];
}

export const Certifications = (props: Props) => {
  return (
    <section css={xw`flex justify-center items-center pb-8`}>
      {props.certifications.map((c) => (
        <CertificationItem certification={c} />
      ))}
    </section>
  );
};
