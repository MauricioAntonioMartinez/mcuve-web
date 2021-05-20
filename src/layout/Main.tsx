import React, { PropsWithChildren } from "react";
import xw from "xwind";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <section css={xw`flex flex-col min-h-screen`}>
      <Header />
      <main css={xw`pt-14 flex-1`}>{children}</main>
      <Footer />
    </section>
  );
};
