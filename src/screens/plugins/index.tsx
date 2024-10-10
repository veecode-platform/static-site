"use client";

import style from "./PluginsStyles.module.scss";
import { useTranslations } from "next-intl";
import { PluginCard } from "./pluginCard";
import { ActionBar, DefaultPage } from "@/components";
// import { usePlugins } from "@/hooks/usePlugins";
import { PluginsProps } from "./types";

export const Plugins: React.FC<PluginsProps> = ({ pluginList }) => {
  const t = useTranslations("plugins");

  // const pluginList = usePlugins();

  // const pluginList = [
  //   {
  //     id: 0,
  //     image: "https://veecode-platform.github.io/support/imgs/logo_2.svg",
  //     title: "Github Workflows",
  //     desc: t("github-workflows.desc"),
  //     path: "github-workflows",
  //     tags: ["CI-CD", "Github"],
  //     url: "https://github.com/veecode-platform/platform-backstage-plugins/tree/master/plugins/github-workflows",
  //   },
  //   {
  //     id: 1,
  //     image: "https://veecode-platform.github.io/support/imgs/logo_1.svg",
  //     title: "Gitlab Pipelines",
  //     desc: t("gitlab-pipelines.desc"),
  //     path: "gitlab-pipelines",
  //     tags: ["CI-CD", "GitlabCi"],
  //     url: "https://github.com/veecode-platform/platform-backstage-plugins/tree/master/plugins/gitlab-pipelines",
  //   },
  //   {
  //     id: 3,
  //     image: "https://veecode-platform.github.io/support/imgs/logo_3.svg",
  //     title: "Kong Service Manager",
  //     desc: t("kong-service-manager.desc"),
  //     path: "kong-service-manager",
  //     tags: ["kong", "Api gateway", "services"],
  //     url: "https://github.com/veecode-platform/platform-backstage-plugins/tree/master/plugins/kong-service-manager",
  //   },
  //   {
  //     id: 4,
  //     image: "https://veecode-platform.github.io/support/imgs/logo_4.svg",
  //     title: "Kubernetes GPT Analyzer",
  //     desc: t("kubernetes-gpt-analyzer.desc"),
  //     path: "kubernetes-gpt-analyzer",
  //     tags: ["kubernetes", "AI", "monitoring"],
  //     url: "https://github.com/veecode-platform/platform-backstage-plugins/tree/master/plugins/kubernetes-gpt-analyzer",
  //   },
  //   {
  //     id: 5,
  //     image: "https://veecode-platform.github.io/support/imgs/logo_5.svg",
  //     title: "Infracost",
  //     desc: t("infracost.desc"),
  //     path: "infracost",
  //     tags: ["finops", "infracost", "estimate"],
  //     url: "https://github.com/veecode-platform/platform-backstage-plugins/tree/master/plugins/infracost",
  //   },
  // ];

  return (
    <DefaultPage titleBar title={t("title")} subtitle={t("description")}>
      <section className={style.wrapper}>
        {pluginList.map((p) => {
          if (p.id === undefined) return [];
          return (
            <PluginCard
              key={p.id}
              image={p.image}
              title={p.title}
              path={p.path}
              tags={p.tags}
              desc={p.desc}
              buttonLabel={t("buttonLabel")}
            />
          );
        })}
      </section>
      <ActionBar
        title={t("action.contact.title")}
        buttonLabel={t("action.contact.buttonLabel")}
        variant="contact"
      />
    </DefaultPage>
  );
};
