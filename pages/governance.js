import Head from 'next/head'
import { Governance } from '../src/screens'


export default function GovernancePage() {
  return (
    <>
      <Head>
        <title>Platform | Governance</title>
        <meta 
          name="description"
          content="Facilitate strategic decision-making with accurate data on technologies and dependencies.Reduce infrastructure overhead and avoid duplication of efforts, speeding up development."
        />
      </Head>
      <Governance/>
    </>
  )
}
