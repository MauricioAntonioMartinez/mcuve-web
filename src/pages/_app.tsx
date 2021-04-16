import { Global } from "@emotion/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import React from "react";
import xw from "xwind";
import { Layout } from "../layout/Main";

export default function mcuve({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>mcuve</title>
      </Head>
      <Global styles={xw`XWIND_BASE XWIND_GLOBAL`} />
      <Component {...pageProps} />
    </Layout>
  );
}
