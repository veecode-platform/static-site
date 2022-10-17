import Head from 'next/head'
import { Faq } from '../src/screens'

export default function FaqPage() {
  return (
    <>
      <Head>
        <title>Platform | Faq</title>
        <meta
         name="description"
         content="Session with frequently asked questions and their respective answers, enjoy and stay on top of everything!"
          />
      </Head>
      <Faq/>
    </>
  )
}