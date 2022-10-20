import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/theme.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
     {/* Global site tag (gtag.js) - Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}></Script>
      <Script id="google-tag-script-function">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');`}
      </Script>
      {/*  Google tag (gtag.js)  */}
       <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID_ADS}`}></Script>
       <Script id="google-tag-script-function">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID_ADS}');`}
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
        
        <meta property="og:title" content="Veecode Platform"/>
        <meta property="og:image" content="/thumbnail-1200x627.png"/>
        <meta property="og:description" content="Your transition to the cloud doesn't have to be time-consuming, expensive, or unaided. Count on our professional support and free tools to overcome these challenges quickly and easily."/>
        <meta property="og:url" content="//www.example.com/URL of the article"/>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta charSet="utf-8"/>
        <link rel="icon" href="/favicon.ico" />
        <link
         rel="apple-touch-icon"
         href="/apple-touch-icon.png"
         />
        <link
          rel="shortcut icon"
           href="/favicon.ico"
         />
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
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer autoClose={5000} hideProgressBar={true} />
    </>
  );
}

export default MyApp;
