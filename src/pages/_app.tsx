import { Global } from "@emotion/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import xw from "xwind";

export default function mcuve({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <title>mcuve</title>
      </Head>
      <Global styles={xw`XWIND_BASE XWIND_GLOBAL`} />
      <Component {...pageProps} />
    </main>
  );
}
