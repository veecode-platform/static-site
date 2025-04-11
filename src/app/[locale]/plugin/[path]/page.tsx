import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { DefaultPage } from '@/components';
import { routing } from '@/i18n/routing';
import {
  getAllPlugins, getPluginByPath, 
} from '@/lib';
import { PluginContent } from './ui/PluginContent';

// export const dynamic = 'force-static';

type Props = {
  params: Promise<{ locale: Locale; path: string }>;
};

export async function generateMetadata(props: Props) {
  const { locale, path } = await props.params;
  const plugin = getPluginByPath(locale, path);

  return {
    title: `VeeCode Platform | ${plugin.title ?? path}`,
    description:
      plugin.desc ||
      'Choose the technology that is most compatible with your business.',
  };
}

export async function generateStaticParams() {
  return routing.locales.flatMap(locale => {
    const plugins = getAllPlugins(locale);
    return plugins.map(plugin => ({
      locale,
      path: plugin.path,
    }));
  });
}

export default async function PluginDocPage(props: Props) {
  const { locale, path } = await props.params;
  // Enable static rendering
  setRequestLocale(locale);

  const pluginData = getPluginByPath(locale, path);

  return (
    <DefaultPage notTranslate backToUrl="/plugins">
      <PluginContent pluginData={pluginData} />
    </DefaultPage>
  );
}
