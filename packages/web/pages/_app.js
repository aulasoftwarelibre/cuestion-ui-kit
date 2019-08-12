import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App, { Container } from "next/app";
import Head from 'next/head';
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import * as React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { Provider } from "react-redux";

import configureStore from "../src/store";
import theme from '../src/theme';

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== "undefined" && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(lang => {
    addLocaleData(window.ReactIntlLocaleData[lang]);
  });
}

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;
    const initialNow = Date.now();

    return { pageProps, locale, messages, initialNow };
  }

  render() {
    const { Component, pageProps, locale, messages, initialNow, store } = this.props;

    return (
      <Container>
        <Head>
          <title>Cuestion</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <IntlProvider locale={locale} messages={messages} initialNow={initialNow}>
              <Component {...pageProps} />
            </IntlProvider>
          </Provider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
