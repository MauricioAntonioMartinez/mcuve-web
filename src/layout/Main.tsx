import React, { PropsWithChildren } from "react";
import xw from "xwind";
import { Header } from "./Header";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <section>
      <Header />
      <main css={xw`pt-14`}>{children}</main>
    </section>
  );
};
