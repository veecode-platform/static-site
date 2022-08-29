import Head from 'next/head'
import { Homescreen } from '../src/screens'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform | Home</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homescreen />
    </>
  )
}
