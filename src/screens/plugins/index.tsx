"use client";

import style from "./PluginsStyles.module.scss";
import { useTranslations } from "next-intl";
import { PluginCard } from "./pluginCard";
import { ActionBar, DefaultPage } from "@/components";
import { PluginsProps } from "./types";

export const Plugins: React.FC<PluginsProps> = ({ pluginList }) => {
  const t = useTranslations("plugins");

  const validPlugins = pluginList.filter((p) => p.id !== undefined);

  return (
    <DefaultPage titleBar title={t("title")} subtitle={t("description")}>
      <section className={style.wrapper}>
        {validPlugins.map((p) => (
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
  );
};
