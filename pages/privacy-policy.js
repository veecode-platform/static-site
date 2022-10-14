import Head from 'next/head'
import { PrivacyPolicy } from '../src/screens'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Platform | Privacy Policy</title>
        <meta 
         name="description"
         content="We do everything thought out to the smallest detail, feel free to review our privacy policy."
         />
      </Head>
      <PrivacyPolicy/>
    </>
  )
}