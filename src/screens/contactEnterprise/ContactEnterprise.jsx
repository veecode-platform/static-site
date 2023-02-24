import React, { useEffect } from "react";
import { DefaultPage, FormElement } from "../../components";
import style from "../../../styles/ContactEnterprise.module.scss";

const ContactEnterprise = () => {

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
      title="Our Support Enterprise"
      subtitle={<>We do it with you and for you. Use the form below or send an email to <a href='mailto: platform-sales@vee.codes' style={{ cursor: "pointer", color: '#33FFCE' }}> platform-sales@vee.codes</a></>}
      noFooter
      showOptions
    >
      <article className={style.content}>
        {/* DETAILS */}
        <div className={style.details}>
          <strong className={style.details__label}>
            Use our main strength to your advantage.
          </strong>
          <p className={style.details__text}>
            With enterprise support, you have immediate access to expert
            professionals dedicated to your challenges. In this plan, all our
            expertise is at your disposal, and we really mean it when we say
            we&apos;ll do it with and for you. Go further in your digital
            transition and count on us to make it easy.
          </p>
          <p className={style.details__text}>
            Problems with Devops, IaC, Kong, Kubernetes and much more will be
            solved with specialized professionals in each stack, don&apos;t let
            technology problems affect your business, count on us to use
            technology to scale and stand out from the market competition.
          </p>
          <p className={style.details__text}>
            Contact us, we are excited to welcome you on our team!
          </p>
        </div>
        {/* FORM */}
        <div className={style.form}>
          <FormElement />
        </div>
      </article>
    </DefaultPage>
  );
};

export default ContactEnterprise;
