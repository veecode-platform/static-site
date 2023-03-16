import Head from 'next/head'
import { Trial } from '../src/screens'

export default function ValidatePage() {
  return (
    <>
      <Head>
        <title>Platform | Trial</title>
        <meta 
          name="description"
          content="In this step you will fill out a form to get access to Trial."
        />
      </Head>
      <Trial/>
    </>
  )
}
