import Head from 'next/head'
import { Success } from '../src/screens'

export default function SuccessPage() {
  return (
    <>
      <Head>
        <title>Platform | Waiting Confirmation</title>
        <meta name="description" content="Success Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Success/>
    </>
  )
}