import Head from 'next/head'
import { ContactSuccess } from '../src/screens'

export default function ContactSuccessPage() {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Contact success Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactSuccess/>
    </>
  )
}