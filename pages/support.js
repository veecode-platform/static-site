import Head from 'next/head'
import { Support} from '../src/screens'

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Platform  |  Support</title>
        <meta name="description" content="Support Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Support />
    </>
  )
}
