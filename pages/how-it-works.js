import Head from 'next/head'
import { HowItWorks } from '../src/screens'

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>Platform | How It Works</title>
        <meta name="description" content="How It Works Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HowItWorks/>
    </>
  )
}