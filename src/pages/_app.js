import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";
import FloatingWA from "../components/FloatingWA";
import { GoogleTagManager } from "@next/third-parties/google";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aeon Marketing</title>
        <link rel="icon" href="/img/aeon-marketing-icon.png" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <FloatingWA />
      <Component {...pageProps} />
      <GoogleTagManager gtmId="AW-16571160044" />

      <Script
        async
        strategy="beforeInteractive"
        id="wow"
        src="/js/wow.min.js"
      ></Script>
      <Script
        async
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script
        async
        id="simpleParallax"
        src="/js/simpleParallax.min.js"
      ></Script>
      <Script
        async
        strategy="beforeInteractive"
        id="isotope"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        async
        strategy="lazyOnload"
        id="initWow"
        src="/js/initWow.js"
      ></Script>
    </>
  );
}

export default MyApp;
