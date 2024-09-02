import Head from 'next/head';
import { useRouter } from 'next/router';
import { PluginPage } from '../../src/screens';
import { getAllPlugins, getPluginByPath } from '../../lib';

export default function PluginDocPage({ pluginData }) {
  const router = useRouter();
  const { path } = router.query;

  return (
    <>
      <Head>
        <title>Platform | Plugin</title>
        <meta
          name="description"
          content="Choose the technology that is most compatible with your business."
        />
      </Head>
      <PluginPage path={path} pluginData={pluginData} />
    </>
  );
}

export async function getStaticPaths() {
  const plugins = getAllPlugins();
  const paths = plugins.map((plugin) => ({
    params: { path: plugin.path },
  }));


  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pluginData = getPluginByPath(params.path);

  return {
    props: {
      pluginData,
    },
  };
}
