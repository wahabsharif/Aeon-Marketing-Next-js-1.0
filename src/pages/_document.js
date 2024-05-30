import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Cache-Control" content="max-age=3600, public" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="Aeon Marketing, aeon, marketing, phone, address, floor, islamabad, email, follow, real-estate, bahria town peshawar, citi housing peshawar, capital valley, park view, city, taj residencia, rudn enclave, kingdom valley, new metro city gujar khan, bahria, town, peshawar, citi, housing, peshawar, capital, valley, park, view, city, taj, residencia, rudn, enclave, kingdom, valley, new, metro, city, gujar, khan, nmc, pvc, cv, tr, re, kv"
          />
          <meta
            name="description"
            content="Welcome to Aeon Marketing - Your premier real estate agency. Buy, sell, or invest with our expert team for exceptional property solutions."
          />
          <meta name="author" content="" />
          <meta name="fragment" content="" />
          <link rel="canonical" href="https://aeonmarketing.com.pk/" />
          <link
            rel="alternate"
            hrefLang="en"
            href="https://aeonmarketing.com.pk/"
          />
          <link rel="shortcut icon" href="/img/aeon-marketing-icon.png" />
        </Head>

        <body>
          <Main />
          <NextScript />
          {/* Dynamic scripts */}
          <Script strategy="beforeInteractive" src="/js/wow.min.js" />
          <Script strategy="beforeInteractive" src="/js/splitting.min.js" />
          <Script src="/js/simpleParallax.min.js" />
          <Script strategy="beforeInteractive" src="/js/isotope.pkgd.min.js" />
          <Script strategy="lazyOnload" src="/js/initWow.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
