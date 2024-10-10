import { routing } from "@/i18n/routing";
import { Plugins } from "@/screens";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import PluginsData from "../../../data/plugins/plugins.json";
import { getAllPlugins } from "@/lib";
import { IPlugin } from "@/utils/types/plugin";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("plugins.title"),
    description: t("plugins.description"),
    keywords: ["veecode-platform", "backstage-plugins"],
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PluginsPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const items = getAllPlugins(locale);

  return (
    <main>
      <Plugins pluginList={items as IPlugin[]} />
    </main>
  );
}
