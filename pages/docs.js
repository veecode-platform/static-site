import Head from 'next/head'
import { Docs } from '../src/screens'

export default function DocsPage() {
  return (
    <>
      <Head>
        <title>Platform | Get Started For Free</title>
        <meta name="description"
          content="Learn more about our tools here." 
          />
      </Head>
      <Docs/>
    </>
  )
}