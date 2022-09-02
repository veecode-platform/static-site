import Head from 'next/head'
import { PaypalComponent } from '../src/components/paypal'

export default function PaypalTest() {
  return (
    <>
      <Head>
        <title>test paypal </title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{height: "100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <PaypalComponent displayOptions />
      </div>

    </>
  )
}
