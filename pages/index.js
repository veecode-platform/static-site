import Head from "next/head";
import { Homescreen } from "../src/screens";
import Script from "next/script";

export default function Home() {

  return (
    <>
      <Script id="chatbot-script-function">
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
        <title>Platform | Homepage </title>
        <meta
          name="description"
          content="Count on our professional support and free tools to overcome DevOps challenges quickly."
        />
        <meta
         name="robots"
         content="index, follow"
        />
      </Head>
      <Homescreen />
    </>
  );
}
