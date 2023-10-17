import Head from 'next/head';
import { useRouter } from 'next/router';
import { PluginPage } from '../../src/screens';
import { getAllPlugins, getPluginByTitle } from '../../lib';

export default function PluginDocPage({ pluginData }) {
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
      <PluginPage title={title} pluginData={pluginData} />
    </>
  );
}

export async function getStaticPaths() {
  const plugins = getAllPlugins();
  const paths = plugins.map((plugin) => ({
    params: { title: plugin.title },
  }));

  return {
    paths,
    fallback: false, 
  };
}

export async function getStaticProps({ params }) {
  const pluginData = getPluginByTitle(params.title);

  return {
    props: {
      pluginData,
    },
  };
}
