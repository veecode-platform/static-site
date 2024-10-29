import { Button, DefaultPage, NavigationLink } from "@/components";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import style from "./FailedStyles.module.scss";

const FailedImage = "/assets/icons/failed.png";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("failed.title"),
    description: t("failed.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function FailedPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "feedback" });

  return (
    <DefaultPage noFooter showOptions noBack>
      <article className={style.content}>
        <div className={style.content__image}>
          <img src={FailedImage} alt="Failed Animation" />
        </div>
        <div className={style.content__details}>
          {t.rich("payment.error", {
            p: (chunks: any) => <p>{chunks}</p>,
          })}
        </div>
        <div className={style.content__buttonWrapper}>
          <NavigationLink href="/validate?plan=standard">
            <Button aria-label={t("buttonLabelError")}>
              {t("buttonLabelError")}
            </Button>
          </NavigationLink>
        </div>
      </article>
    </DefaultPage>
  );
}
