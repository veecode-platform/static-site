import Head from 'next/head'
import { Docs } from '../src/screens'

export default function DocsPage() {
  return (
    <>
      <Head>
        <title>Platform | Get Started For Free</title>
        <meta name="description"
          content="Choose the technology that is most compatible with your business." 
          />
      </Head>
      <Docs/>
    </>
  )
}