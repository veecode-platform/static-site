import Head from 'next/head'
import { Homescreen } from '../src/screens'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform | Homepage </title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homescreen />
    </>
  )
}
