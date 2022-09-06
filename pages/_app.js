import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/theme.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script src={"https://www.googletagmanager.com/gtag/js?id=G-VH5ZB0M4YZ%22%3E"}>
      </Script>
      <Script id="google-tag-script-function">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-VH5ZB0M4YZ');`}
      </Script>
      {/*Hotjar Tracking Code for https://platform.vee.codes/ */}
      <Script id="hotjar-script-function">
        {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3044176,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}
      </Script>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta charSet="utf-8"></meta>
      </Head>
      <Component {...pageProps} />
      <ToastContainer autoClose={5000} hideProgressBar={true} />
    </>
  );
}

export default MyApp;
