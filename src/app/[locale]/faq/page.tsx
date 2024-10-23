import { ActionBar, DefaultPage, FaqList } from "@/components";
import { routing } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("faq.title"),
    description: t("faq.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function FaqPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "faq" });

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
}
