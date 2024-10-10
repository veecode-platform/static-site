"use client";

/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import style from "./ContactUsStyles.module.scss";
import { DefaultPage, FaqList } from "@/components";
import { FormElement } from "@/components/formElement/FormElement";

const flowImage = "/assets/icons/contact_form_img.png";

export const ContactUs = () => {
  const t = useTranslations("contactUs");

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
            strong: (chunks) => (
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
};
