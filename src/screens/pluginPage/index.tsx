"use client";

import React from "react";
import { Remark } from "react-remark";
import remarkGemoji from "remark-gemoji";
import rehypeSlug from "rehype-slug";
import style from "./PluginPageStyles.module.scss";
import { DefaultPage, ExternalLink, ScrollTop } from "../../components";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/vs2015.css";
import convertUrlToRaw from "@/utils/helpers/convertUrlToRaw";
import { PluginPageProps } from "./types";

export const PluginPage: React.FC<PluginPageProps> = ({ pluginData }) => {
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    const rawUrl = convertUrlToRaw(pluginData!.url);
    if (rawUrl) {
      fetch(rawUrl)
        .then((response) => response.text())
        .then((data) => {
          setContent(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  const LinkTag = ({ href, children }: { href: string; children: any }) => {
    const label = children.join(" ");

    return (
      <strong className={style.link}>
        <ExternalLink href={href} title={label} />
      </strong>
    );
  };

  return (
    <DefaultPage notTranslate backToUrl="/plugins">
      <section className={style.wrapper}>
        <Remark
          remarkPlugins={[remarkGemoji] as any}
          remarkToRehypeOptions={{ allowDangerousHtml: true }}
          rehypePlugins={[rehypeSlug, rehypeHighlight] as any}
          rehypeReactOptions={{
            components: {
              a: (props: any) => <LinkTag {...props} />,
            },
          }}
        >
          {content}
        </Remark>
      </section>
      <ScrollTop />
    </DefaultPage>
  );
};
