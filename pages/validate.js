import Head from 'next/head'
import { Validate } from '../src/screens'


export default function ValidatePage() {
  return (
    <>
      <Head>
        <title>Validate</title>
        <meta name="description" content="Validate page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Validate/>
    </>
  )
}
