import { Breadcrumb, DefaultPage } from "@/components";
import { routing } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import style from "./ValidateStyles.module.scss";
import { ValidateContent } from "./client/validateContent";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("validate.title"),
    description: t("validate.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ValidatePage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "validate" });

  return (
    <DefaultPage noFooter showButton={false}>
      <article className={style.container}>
        <Breadcrumb active={2} />
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
              })}
            </div>
          </div>
          <div className={style.content__options}>
            <ValidateContent />
          </div>
        </article>
      </article>
    </DefaultPage>
  );
}
