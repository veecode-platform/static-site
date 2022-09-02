import Head from 'next/head'
import { Plans } from '../src/screens'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform  |  Plans </title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Plans />
    </>
  )
}
