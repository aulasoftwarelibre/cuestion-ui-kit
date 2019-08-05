import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from '@material-ui/styles';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
class IntlDocument extends Document {
  render() {
    // Polyfill Intl API for older browsers
    const polyfill = `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.${
      this.props.locale
    }`;

    return (
      <html lang={this.props.locale}>
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />.
        </Head>
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

IntlDocument.getInitialProps = async context => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = context.renderPage;
  const {
    req: { locale, localeDataScript }
  } = context;

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const props = await Document.getInitialProps(context);

  return {
    ...props,
    locale,
    localeDataScript,
    styles: [
      <>
        {props.styles}
        {sheets.getStyleElement()}
      </>
    ]
  };
}

export default IntlDocument;
