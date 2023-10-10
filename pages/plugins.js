import Head from 'next/head'
import { Plugins } from '../src/screens'

export default function PluginsPage() {
  return (
    <>
      <Head>
        <title>Platform | Backstage Plugins</title>
        <meta 
         name="description"
         content="Descriptions, guides and installation instructions for Backstage plugins."
         />
      </Head>
      <Plugins/>
    </>
  )
}
