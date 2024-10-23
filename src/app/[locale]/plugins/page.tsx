import { routing } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { getAllPlugins } from "@/lib";
import { ActionBar, DefaultPage } from "@/components";
import style from "./PluginsStyles.module.scss";
import { PluginCard } from "./pluginCard";

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

  const t = await getTranslations({ locale, namespace: "plugins" });
  const plugins = getAllPlugins(locale);

  return (
    <main>
      <DefaultPage titleBar title={t("title")} subtitle={t("description")}>
        <section className={style.wrapper}>
          {plugins.map((p) => (
            <PluginCard
              key={p.id}
              image={p.image}
              title={p.title}
              path={p.path}
              tags={p.tags}
              desc={p.desc}
              buttonLabel={t("buttonLabel")}
            />
          ))}
        </section>
        <ActionBar
          title={t("action.contact.title")}
          buttonLabel={t("action.contact.buttonLabel")}
          variant="contact"
        />
      </DefaultPage>
    </main>
  );
}
