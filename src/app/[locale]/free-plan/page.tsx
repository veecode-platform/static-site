import { routing } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import style from "./FreePlanStyles.module.scss";
import { ActionBar, DefaultPage } from "@/components";
import { FreePlanContent } from "./client/freePlanContent";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("free-plan.title"),
    description: t("free-plan.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function FreePlanPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "freePlan" });

  return (
    <DefaultPage noFooter showButton={false}>
      <ActionBar
        title={t("action.docs.title")}
        buttonLabel={t("action.docs.buttonLabel")}
        variant="docs"
      />

      {/* <article className={style.container}> */}
      <article className={style.content}>
        <div className={style.text}>
          <div className={style.text__header}>
            <h2>
              {t.rich("title", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </h2>
          </div>
          <div className={style.text__resume}>
            {t.rich("description", {
              p: (chunks) => <p>{chunks}</p>,
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </div>
        </div>
        <div className={style.content__options}>
          <FreePlanContent />
        </div>
      </article>
      {/* </article> */}
    </DefaultPage>
  );
}
