import { ActionBar, DefaultPage, FaqList } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";

export const Faq = () => {
  const t = useTranslations("faq");

  return (
    <DefaultPage
      titleBar
      title={t("title")}
      subtitle={t("subtitle")}
      showOptions
    >
      <FaqList />
      <ActionBar
        title={t("action.contact.title")}
        buttonLabel={t("action.contact.buttonLabel")}
        variant="contact"
      />
    </DefaultPage>
  );
};
