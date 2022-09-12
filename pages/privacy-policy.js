import Head from 'next/head'
import { PrivacyPolicy } from '../src/screens'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title> Platform | Privacy Policy</title>
        <meta name="description" content="Privacy Policy Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivacyPolicy/>
    </>
  )
}