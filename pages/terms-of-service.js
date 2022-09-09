import Head from 'next/head'
import { TermsOfService } from '../src/screens'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform  |  Terms of Service</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TermsOfService/>
    </>
  )
}
