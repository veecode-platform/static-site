"use client";

import { DefaultPage } from "@/components";
import style from "./PrivacyPolicyStyles.module.scss";
import { useTranslations } from "next-intl";

export const PrivacyPolicy = () => {
  const t = useTranslations("privacyPolicy");
  return (
    <DefaultPage title={t("title")} titleBar noPrevious showButton showOptions>
      <article className={style.content}>
        <span>
          <p>{t("datetime")}</p>
        </span>
        <p>
          {t.rich("description", {
            p: (chunks) => <p>{chunks}</p>,
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>

        {/* DATA STORAGE */}
        <h2>{t("items.dataStorage.title")}</h2>
        <p>{t("items.dataStorage.description")}</p>
        <p>{t("items.dataStorage.item1")}</p>
        <p>{t("items.dataStorage.item2")}</p>
        <p>{t("items.dataStorage.item3")}</p>
        {/* Use of Data */}
        <h2>{t("items.useOfData.title")}</h2>
        {t.rich("items.useOfData.description", {
          p: (chunks) => <p>{chunks}</p>,
        })}
      </article>
    </DefaultPage>
  );
};
