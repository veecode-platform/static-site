import Head from 'next/head'
import { PageNotFound } from '../src/screens'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Page Not Found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageNotFound/>
    </>
  )
}
