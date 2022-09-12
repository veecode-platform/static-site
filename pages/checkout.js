import Head from 'next/head'
import {Checkout} from '../src/screens';

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Platform | Checkout</title>
        <meta name="description" content="checkout page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Checkout/>
    </>
  )
}
