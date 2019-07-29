import Document, { Head, Main, NextScript } from "next/document";
import styled, { ServerStyleSheet } from "styled-components";

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class IntlDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;
    const {
      req: { locale, localeDataScript }
    } = context;

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      return {
        ...props,
        locale,
        localeDataScript,
        styles: (
          <>
            {props.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${
      this.props.locale
    }`;

    return (
      <html>
        <Head />
        <body>
          <Main />
          <script src={polyfill} />
          <script
            dangerouslySetInnerHTML={{
              __html: this.props.localeDataScript
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
