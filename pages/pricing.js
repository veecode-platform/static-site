import Head from 'next/head'
import { Pricing } from '../src/screens'

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Platform | Pricing</title>
        <meta
         name="description"
         content="Select an optimal plan to get the best out of the platform."
         />
      </Head>
      <Pricing />
    </>
  )
}
