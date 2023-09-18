import Head from 'next/head';
import Script from 'next/script';

export default function DemoPage() {

  let height = window ? `${window.innerHeight}px` : '100%';

  return (
    <>
      <Head>
        <title>Devportal Demo</title>
        <meta name="description"
          content="Enjoy a devportal demo with some basic functionalities." 
          />
        <Script>
          {`(function(n,r,l,d){try{var h=r.head||r.getElementsByTagName("head")[0],s=r.createElement("script");s.defer=true;s.setAttribute("type","text/javascript");s.setAttribute("src",l);n.neuroleadId=d;h.appendChild(s);}catch(e){}})(window,document,"https://cdn.leadster.com.br/neurolead/neurolead.min.js", "0sZSqQ97JALqVniW4NtoeFhKu");`}
        </Script>
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
        src="http://devportal.demo.vee.codes"
        frameborder="0"
        style={{
          width:'100%',
          height: height,
          border: 'none'
        }}
        ></iframe>
    </>
  )
}