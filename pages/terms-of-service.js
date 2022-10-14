import Head from 'next/head'
import { TermsOfService } from '../src/screens'

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <title>Platform | Terms of Service</title>
        <meta 
         name="description"
         content="Please feel free to review our terms of service."
         />
      </Head>
      <TermsOfService/>
    </>
  )
}
