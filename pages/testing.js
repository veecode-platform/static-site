import Head from 'next/head'
import { PaypalComponent } from '../src/components/paypal/PaypalComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform  |  Homepage </title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{display: "flex", justifyContent:"center"}}>
        <PaypalComponent plan={{plan: "premium", billing: true}}/>
      </div>
    </>
  )
}
