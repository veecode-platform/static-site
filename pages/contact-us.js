import Head from 'next/head'
import { ContactUs } from '../src/screens'


export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactUs/>
    </>
  )
}