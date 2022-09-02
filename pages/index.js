import Head from 'next/head'
import { PaypalComponent } from '../components/paypal'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform | Home</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{height: "100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <PaypalComponent displayOptions />
      </div>
    </>
  )
}
