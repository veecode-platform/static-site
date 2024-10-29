import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import style from "./PrivacyPolicyStyles.module.scss";
import { DefaultPage } from "@/components";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("privacy-policy.title"),
    description: t("privacy-policy.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PrivacyPolicyPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "privacyPolicy" });

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
}
