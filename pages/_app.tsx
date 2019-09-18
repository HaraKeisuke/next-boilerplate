import React from "react";
import App from "next/app";
import configureStore from "../config/store";
import { Provider } from "react-redux";

const store = configureStore();

/*
 *   pages配下のクラス全ての親コンポーネント。ストアはここで作る。
 */
export default class Base extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
