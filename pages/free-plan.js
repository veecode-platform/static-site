import Head from 'next/head'
import { FreePlan } from '../src/screens'

export default function FreePlanPage() {
  return (
    <>
      <Head>
        <title>Platform | Free Plan</title>
        <meta 
          name="description"
          content="In this step we will validate your data to access free content."
        />
      </Head>
      <FreePlan />
    </>
  )
}
