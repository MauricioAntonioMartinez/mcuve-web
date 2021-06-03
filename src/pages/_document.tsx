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
