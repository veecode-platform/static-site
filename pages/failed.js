import Head from 'next/head'
import { Failed } from '../src/screens'

export default function FailedPage() {
  return (
    <>
      <Head>
        <title>Platform | Failed Operation </title>
        <meta 
          name="description"
          content="Failed page, you need to make the request again."
         />
      </Head>
      <Failed/>
    </>
  )
}