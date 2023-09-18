import Head from 'next/head'
import { SupportPlans } from '../src/screens'


export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Platform | Support Plans</title>  
        <meta
         name="description"
         content="We have a team of experts ready to help you."
         />
      </Head>
      <SupportPlans />
    </>
  )
}
