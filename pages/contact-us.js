import Head from 'next/head'
import { ContactUs } from '../src/screens'

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Platform | Contact Us</title>
        <meta name="description"
          content="Contact our team and get more detailed information." 
          />
      </Head>
      <ContactUs/>
    </>
  )
}