import Head from 'next/head'
import PaymentPage from '../src/screens/payment/Payment'


export default function Checkout() {
  return (
    <>
      <Head>
        <title>Platform  |  Checkout</title>
        <meta name="description" content="checkout page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaymentPage/>
    </>
  )
}
