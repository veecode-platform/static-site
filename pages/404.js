import Head from 'next/head'
import { PageNotFound } from '../src/screens'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform  |  Homepage </title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageNotFound/>
    </>
  )
}
