import Head from 'next/head'
import { HomeScreen } from '../src/screens'

export default function Home() {
  return (
    <>
      <Head>
        <title>Platform | Home</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen/>
    </>
  )
}
