import Head from 'next/head'
import { Validate } from '../src/screens'

export default function ValidatePage() {
  return (
    <>
      <Head>
        <title>Platform | Validate</title>
        <meta 
          name="description"
          content="In this step we will validate your data."
        />
      </Head>
      <Validate/>
    </>
  )
}
