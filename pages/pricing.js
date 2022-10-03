import Head from 'next/head'
import { Pricing } from '../src/screens'

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Platform | Pricing</title>
        <meta name="description" content="Pricing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pricing />
    </>
  )
}
