import Head from 'next/head'
import CheckoutPage from '../src/screens/checkout/Checkout'


export default function Checkout() {
  return (
    <>
      <Head>
        <title>Platform  |  Checkout</title>
        <meta name="description" content="checkout page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CheckoutPage/>
    </>
  )
}
