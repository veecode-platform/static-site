import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/theme.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* Global site tag (gtag.js) - Google Analytics */}
    <Script src={"https://www.googletagmanager.com/gtag/js?id=G-VH5ZB0M4YZ%22%3E"}></Script>
      <Script id="google-tag-script-function">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-VH5ZB0M4YZ');`}
      </Script>
      <Component {...pageProps} />
      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}/>
      </>
  )
}

export default MyApp
