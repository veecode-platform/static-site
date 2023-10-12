import Head from 'next/head';
import { useRouter } from 'next/router';
import { PluginPage } from '../../src/screens';

export default function PluginDocPage() {

  const router = useRouter();
  const { title } = router.query;
  
  return (
    <>
      <Head>
        <title>Platform | Plugin</title>
        <meta
          name="description"
          content="Choose the technology that is most compatible with your business."
        />
      </Head>
      <PluginPage title={title}/>
    </>
  );
}
