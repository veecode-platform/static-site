import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';

const URL_DEMO = "http://devportal.demo.vee.codes";

export default function DemoPage() {

  const [height, setHeight] = useState('100%');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHeight(`${window.innerHeight}px`);
    }
  }, []);

  return (
    <>
      <Script strategy="beforeInteractive">
        {`
            (function(n, r, l, d) {
              try {
                var h = r.head || r.getElementsByTagName("head")[0];
                var s = r.createElement("script");
                s.defer = true;
                s.setAttribute("type", "text/javascript");
                s.setAttribute("src", l);
                n.neuroleadId = d;
                h.appendChild(s);
              } catch (e) {}
            })(window, document, "https://cdn.leadster.com.br/neurolead/neurolead.min.js", "0sZSqQ97JALqVniW4NtoeFhKu");
          `}
      </Script>
      <Head>
        <title>Devportal Demo</title>
        <meta name="description"
          content="Enjoy a devportal demo with some basic functionalities."
        />
        <style jsx>{`
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
          }
        `}</style>
      </Head>
      <iframe
        src={URL_DEMO}
        border="0"
        style={{
          width: '100%',
          height: height,
          border: 'none'
        }}
      ></iframe>
    </>
  )
}