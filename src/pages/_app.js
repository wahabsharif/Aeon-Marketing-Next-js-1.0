import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "../styles/globals.css";

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
      <FloatingWhatsApp
        accountName="Aeon Marketing"
        phoneNumber="923235154682"
        notificationSound="true"
        darkMode="true"
        allowEsc="true"
        notificationLoop={1}
        notificationDelay={20}
        avatar="/img/aeon-marketing-icon.webp"
        statusMessage="Online"
        buttonStyle={{
          bottom: "80px",
          right: "10px",
          zIndex: "1000",
          cursor: "pointer",
        }}
        chatboxStyle={{
          bottom: "80px",
          right: "10px",
          zIndex: "1000",
        }}
      />
      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        id="wow"
        src="/js/wow.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="isotope"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script strategy="lazyOnload" id="initWow" src="/js/initWow.js"></Script>
    </>
  );
}

export default MyApp;
