import Head from 'next/head'
import { PrivacyPolicy } from '../src/screens'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform  |  Privacy Policy</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivacyPolicy/>
    </>
  )
}