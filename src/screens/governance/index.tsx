"use  client";

import { DefaultPage } from "../../components";
import React from "react";
import { useTranslations } from "next-intl";
import { FirstSection } from "./fistSection";
import { CardsSection } from "./cardsSection";
import { ContactSection } from "./contactSection";

export const Governance = () => {
  const t = useTranslations("governance");

  return (
    <DefaultPage noFooter noBack showOptions noSpace>
      <FirstSection
        title={t("title")}
        description={
          <>
            {t.rich("section-1", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </>
        }
      />
      <CardsSection
        card1={t("section-2.card-1")}
        card2={t("section-2.card-2")}
        card3={t("section-2.card-3")}
      />
      <ContactSection
        description={
          <>
            {t.rich("section-3", {
              p: (chunks) => <p>{chunks}</p>,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </>
        }
        buttonLabel={t("buttonLabel")}
      />
    </DefaultPage>
  );
};
