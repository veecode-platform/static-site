import { DefaultPage, FaqList } from "@/components";
import { routing } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import style from "./ContactUsStyles.module.scss";
import { FormElement } from "@/components/formElement/FormElement";

const flowImage = "/assets/icons/contact_form_img.png";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("contact-us.title"),
    description: t("contact-us.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactUsPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "contactUs" });

  return (
    <DefaultPage
      showButton
      titleBar
      title={t("title")}
      noBack
      showOptions
      subtitle={
        <>
          {t.rich("subtitle", {
            strong: (chunks: any) => (
              <strong>
                <a href="mailto: platform-sales@vee.codes">{chunks}</a>
              </strong>
            ),
          })}
        </>
      }
    >
      <section className={style.content}>
        <div className={style.content__options}>
          <div className={style["content__options-decoration"]}>
            <img src={flowImage} alt="contact us image" />
          </div>

          <div className={style["content__options-formWraper"]}>
            <FormElement type="CONTACT-US" company />
          </div>
        </div>
        <div className={style.content__faq}>
          <div>
            <h1>{t("faqSection.title")}</h1>
            <h2>{t("faqSection.subtitle")}</h2>
          </div>
          <FaqList />
        </div>
      </section>
    </DefaultPage>
  );
}
