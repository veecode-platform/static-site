import Head from 'next/head'
import {Checkout} from '../src/screens';

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Platform | Checkout</title>
        <meta
         name="description"
          content="Get the best out of our tool with a specialized support service."
         />
      </Head>
      <Checkout/>
    </>
  )
}
