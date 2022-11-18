import Head from 'next/head'
import { ContactEnterprise } from '../src/screens'

export default function ContactEnterprisePage() {
  return (
    <>
      <Head>
        <title>Platform | About Enterprise</title>
        <meta
         name="description"
         content="Get in touch with our team and have a great experience with our Enterprise Plan."
         />
      </Head>
      <ContactEnterprise />
    </>
  )
}
