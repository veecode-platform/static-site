import Head from 'next/head'
import { PageNotFound } from '../src/screens'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>
          Page Not Found
        </title>
        <meta
         name="description"
         content="Erro 404 - Page Not Found"
          />
      </Head>
      <PageNotFound/>
    </>
  )
}
