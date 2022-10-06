import Head from 'next/head'
import { Faq } from '../src/screens'

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>Platform | Faq</title>
        <meta name="description" content="Platform - Faq Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Faq/>
    </>
  )
}