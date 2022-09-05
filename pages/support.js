import Head from 'next/head'
import { Support } from '../src/screens'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform  |  Support</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Support />
    </>
  )
}
