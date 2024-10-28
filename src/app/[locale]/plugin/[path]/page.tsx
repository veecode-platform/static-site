import { DefaultPage } from "@/components";
import { routing } from "@/i18n/routing";
import { getAllPlugins, getPluginByPath } from "@/lib";
import { unstable_setRequestLocale } from "next-intl/server";
import { PluginContent } from "./client/PluginContent";

type Props = {
  params: { locale: string; path: string };
};

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) => {
    const plugins = getAllPlugins(locale);
    return plugins.map((plugin) => ({
      locale,
      path: plugin.path,
    }));
  });
}

export async function generateMetadata({ params: { path, locale } }: Props) {
  const plugin = getPluginByPath(locale, path);

  return {
    title: `VeeCode Platform | ${plugin.title ?? path}`,
    description:
      plugin.desc ||
      "Choose the technology that is most compatible with your business.",
  };
}

export default function PluginDocPage({ params: { locale, path } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const pluginData = getPluginByPath(locale, path);

  return (
    <DefaultPage notTranslate backToUrl="/plugins">
      <PluginContent pluginData={pluginData} />
    </DefaultPage>
  );
}
