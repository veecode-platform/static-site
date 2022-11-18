import Head from 'next/head'
import { ComparePlans } from '../src/screens'

export default function ComparePlansPage() {
  return (
    <>
      <Head>
        <title>Platform | Compare Plans</title>
        <meta
         name="description"
         content="Select an optimal plan to get the best out of the platform."
         />
      </Head>
      <ComparePlans />
    </>
  )
}
