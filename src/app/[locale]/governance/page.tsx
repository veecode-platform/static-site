import { DefaultPage } from "@/components";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FirstSection } from "./fistSection";
import { CardsSection } from "./cardsSection";
import { ContactSection } from "./contactSection";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("governance.title"),
    description: t("governance.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function GovernancePage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "governance" });

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
}
