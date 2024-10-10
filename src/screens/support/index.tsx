"use client";

import { useTranslations } from "next-intl";
import { ActionBar, DefaultPage } from "@/components";
import { SupportCategories } from "./supportCategories";
import { ListDetails } from "./listDetails";
import { SupportBenefits } from "./SupportBenefits";
import { PricingSection } from "./pricingSection";

export const Support = () => {
  const t = useTranslations("supportOptions");

  return (
    <DefaultPage
      titleBar
      title={t("title")}
      subtitle={t("subtitle")}
      showButton
      showOptions
    >
      <SupportCategories title={t("body.title1")} desc={t("body.subtitle1")} />
      <ListDetails />
      <SupportBenefits />
      <PricingSection />
      <ActionBar
        title={t("action.title")}
        buttonLabel={t("action.buttonLabel")}
        variant="contact"
      />
    </DefaultPage>
  );
};
