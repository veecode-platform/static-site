import Head from 'next/head';
import { useRouter } from 'next/router';
import { PluginPage } from '../../src/screens';
import { getAllPlugins, getPluginByPatch } from '../../lib';

export default function PluginDocPage({ pluginData }) {
  const router = useRouter();
  const { patch } = router.query;

  return (
    <>
      <Head>
        <title>Platform | Plugin</title>
        <meta
          name="description"
          content="Choose the technology that is most compatible with your business."
        />
      </Head>
      <PluginPage patch={patch} pluginData={pluginData} />
    </>
  );
}

export async function getStaticPaths() {
  const plugins = getAllPlugins();
  const paths = plugins.map((plugin) => ({
    params: { patch: plugin.patch },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pluginData = getPluginByPatch(params.patch);

  return {
    props: {
      pluginData,
    },
  };
}
