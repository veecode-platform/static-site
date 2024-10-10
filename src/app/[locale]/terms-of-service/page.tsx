import { routing } from "@/i18n/routing";
import { TermsOfService } from "@/screens";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("terms-of-service.title"),
    description: t("terms-of-service.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function TermsOfServicePage({
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main>
      <TermsOfService />
    </main>
  );
}
