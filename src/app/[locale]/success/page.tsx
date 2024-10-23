import { Button, DefaultPage, NavigationLink } from "@/components";
import { routing } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import style from "./SuccessStyles.module.scss";

const SuccessImage = "/assets/icons/success.png";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("success.title"),
    description: t("success.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function SuccessPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "feedback" });

  return (
    <DefaultPage noBack showOptions>
      <article className={style.content}>
        <div className={style.content__image}>
          <img src={SuccessImage} alt="Success Animation" />
        </div>
        <div className={style.content__details}>
          {t.rich("payment.success", {
            p: (chunks: any) => <p>{chunks}</p>,
          })}
        </div>
        <div className={style.content__buttonWrapper}>
          <NavigationLink href="/">
            <Button>{t("buttonLabelSuccess")}</Button>
          </NavigationLink>
        </div>
      </article>
    </DefaultPage>
  );
}
