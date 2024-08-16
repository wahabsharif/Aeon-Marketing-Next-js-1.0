import Head from "next/head";
import Script from "next/script";
import React from "react";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
// import LoadingScreen from "../components/Loading-Screen";
// Example in _app.js
import { GoogleTagManager } from "@next/third-parties/google";
import "../../public/css/dark.min.css"; // Other CSS imports
import FloatingWA from "../components/FloatingWA";
import "../styles/globals.css"; // Ensure this is the first import if using @import in globals.css

const WowScript = () => (
  <Script strategy="beforeInteractive" id="wow" src="/js/wow.min.js"></Script>
);

const SplittingScript = () => (
  <Script
    strategy="beforeInteractive"
    id="splitting"
    src="/js/splitting.min.js"
  ></Script>
);

const SimpleParallaxScript = () => (
  <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
);

const IsotopeScript = () => (
  <Script
    strategy="beforeInteractive"
    id="isotope"
    src="/js/isotope.pkgd.min.js"
  ></Script>
);

const InitWowScript = () => (
  <Script strategy="lazyOnload" id="initWow" src="/js/initWow.js"></Script>
);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Aeon Marketing</title>
        <link rel="icon" href="/img/aeon-marketing-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Cursor />
      {/* <LoadingScreen /> */}
      <ScrollToTop />
      <FloatingWA />
      <Component {...pageProps} />
      <GoogleTagManager gtmId="AW-16571160044" />

      <WowScript />
      <SplittingScript />
      <SimpleParallaxScript />
      <IsotopeScript />
      <InitWowScript />
    </>
  );
};

export default MyApp;
