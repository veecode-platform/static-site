import Head from "next/head";
import { Homescreen } from "../src/screens";

export default function Home() {
  return (
    <>
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
