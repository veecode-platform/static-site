import Head from 'next/head'
import { TermsOfUse } from '../src/screens'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform  |  About our Support</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TermsOfUse/>
    </>
  )
}
