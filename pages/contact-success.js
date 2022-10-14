import Head from 'next/head'
import { ContactSuccess } from '../src/screens'

export default function ContactSuccessPage() {
  return (
    <>
      <Head>
        <title>Platform | Contact success</title>
        <meta name="description" 
        content="If you have reached this page, congratulations on the initiative! we will get in touch with you soon." 
        />
      </Head>
      <ContactSuccess/>
    </>
  )
}