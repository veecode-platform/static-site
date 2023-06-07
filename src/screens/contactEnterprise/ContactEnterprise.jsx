import React, { useEffect } from "react";
import { DefaultPage, FormElement } from "../../components";
import style from "../../../styles/ContactEnterprise.module.scss";
import { useTranslation } from "react-i18next";

const ContactEnterprise = () => {

  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1300) {
        setTimeout(() => {
          window.scrollTo({
            top: 105,
            left: 300,
            behavior: 'smooth'
          });
        }, 500);
      }
    }
  }, [])

  return (
    <DefaultPage
      titleBar="enable"
      title={t("contact-enterprise-title")}
      subtitle={<>{t("contact-enterprise-subtitle")} <a href='mailto: platform-sales@vee.codes' style={{ cursor: "pointer", color: '#33FFCE' }}> platform-sales@vee.codes</a></>}
      noFooter
      showOptions
    >
      <article className={style.content}>
        {/* DETAILS */}
        <div className={style.details}>
          <strong className={style.details__label}>
            {t("contact-enterprise-desc1")}
          </strong>
          <p className={style.details__text}>
          {t("contact-enterprise-desc2")}
          </p>
          <p className={style.details__text}>
          {t("contact-enterprise-desc3")}
          </p>
          <p className={style.details__text}>
          {t("contact-enterprise-desc4")}
          </p>
        </div>
        {/* FORM */}
        <div className={style.form}>
          <FormElement type="ENTERPRISE"/>
        </div>
      </article>
    </DefaultPage>
  );
};

export default ContactEnterprise;
