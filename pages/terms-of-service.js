import Head from 'next/head'
import { TermsOfService } from '../src/screens'

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Platform | Terms of Service</title>
        <meta name="description" content="Terms of Service Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TermsOfService/>
    </>
  )
}
