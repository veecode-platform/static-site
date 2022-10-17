import Head from 'next/head'
import { Success } from '../src/screens'

export default function SuccessPage() {
  return (
    <>
      <Head>
        <title>Platform | Waiting Confirmation</title>
        <meta
         name="description"
         content="This session is for those who know where they want to go! Congratulations for being part of the platform!"
          />
      </Head>
      <Success/>
    </>
  )
}