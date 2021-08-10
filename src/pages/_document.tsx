import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class InlineStylesHead extends Head {
  // getCssLinks() {
  //   return this.__getInlineStyles();
  // }
  // __getInlineStyles() {
  //   this.context.
  //   if (!files || files.length === 0) return null;
  //   return this.context
  //     .filter((file: string) => /\.css$/.test(file))
  //     .map((file: string) => (
  //       <style
  //         key={file}
  //         nonce={this.props.nonce}
  //         data-href={`${ this.context.assetPrefix}/_next/${file}`}
  //         dangerouslySetInnerHTML={{
  //           __html: fs.readFileSync(
  //             path.join(process.cwd(), ".next", file),
  //             "utf-8"
  //           ),
  //         }}
  //       />
  //     ));
  // }
}

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <InlineStylesHead>
          <link
            rel="preload"
            href="/fonts/Inter-roman.var-latin.woff2?3.13"
            as="font"
            type="font/woff2"
            crossOrigin="true"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/icons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:url" content="https://www.mcuve.com" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Mcuve Portfolio" />
          <meta property="og:description" content="Train,eat,code repeat." />
          <meta property="og:image" content="https://www.mcuve.com/mcuve.jpg" />
        </InlineStylesHead>
        <body>
          <div id="modals"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
