import React from "react";
import Head from "next/head";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import "../styles/globals.css";
import "../../public/css/dark.min.css";
import FloatingWA from "../components/FloatingWA";
import { GoogleTagManager } from "@next/third-parties/google";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Aeon Marketing</title>
        <link rel="icon" href="/img/aeon-marketing-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Cursor />
      <ScrollToTop />
      <FloatingWA />
      <Component {...pageProps} />
      <GoogleTagManager gtmId="AW-16571160044" />
    </>
  );
};

export default MyApp;
