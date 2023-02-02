import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/theme.scss";
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: `${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}` });
  }, []);
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      ></Script>
      <Script id="google-tag-script-function">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');`}
      </Script>
      {/*Hotjar Tracking Code for https://platform.vee.codes/ */}
      <Script id="hotjar-script-function">
        {`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3144537,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
      <Head>
        <title>
          Your API infrastructure in minutes Cloud On-premises With Support
        </title>
        <meta
          name="title"
          content="Your API infrastructure in minutes Cloud On-premises With Support"
        />
        <meta
          name="description"
          content="Count on our professional support and free tools to overcome DevOps challenges quickly."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://platform.vee.codes"
        />
        <meta
          property="og:title"
          content="Your API infrastructure in minutes Cloud On-premises With Support"
        />
        <meta
          property="og:description"
          content="Count on our professional support and free tools to overcome DevOps challenges quickly."
        />
        <meta
          property="og:image"
          content="https://platform.vee.codes/thumbnail-1200x627.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://platform.vee.codes"
        />
        <meta
          property="twitter:title"
          content="Your API infrastructure in minutes Cloud On-premises With Support"
        />
        <meta
          property="twitter:description"
          content="Count on our professional support and free tools to overcome DevOps challenges quickly."
        />
        <meta
          property="twitter:image"
          content="https://platform.vee.codes/thumbnail-1200x627.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer autoClose={5000} hideProgressBar={true} />
    </>
  );
}

export default MyApp;
