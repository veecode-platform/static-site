import Head from 'next/head'
import { Support} from '../src/screens'

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Platform | Support</title>
        <meta
         name="description"
         content="We have a team of experts ready to help you."
         />
      </Head>
      <Support />
    </>
  )
}
