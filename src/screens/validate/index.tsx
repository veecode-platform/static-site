"use client";

import React from "react";
import style from "./ValidateStyles.module.scss";
import { Formik, Form } from "formik";
import { object, string, boolean } from "yup";
import TagManager from "react-gtm-module";
import { useTranslations } from "next-intl";
import { Breadcrumb, Button, DefaultPage } from "@/components";
import { useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { UsePostData } from "@/hooks/usePostData";
import { Checkbox, Input } from "@/components/patterns/input";

export const Validate = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const t = useTranslations("validate");

  const formSchema = object({
    name: string().required(t("form.validate.required")),
    company: string().required(t("form.validate.required")),
    email: string()
      .email(t("form.validate.invalid-email"))
      .required(t("form.validate.required")),
    title: string().required(t("form.validate.required")),
    terms: boolean().isTrue(),
  });

  const handleFormRedirect = () => {
    router.push("/success");
  };

  const tagManagerArgs = {
    gtmId: "GTM-56RG967", //todo check ID
    events: {
      generateLead: {
        currency: "USD",
        value: 1,
      },
    },
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1300) {
        setTimeout(() => {
          window.scrollTo({
            top: 120,
            left: 300,
            behavior: "smooth",
          });
        }, 500);
      }
    }
  }, []);

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
            <div className={style["content__options-formWraper"]}>
              <Formik
                initialValues={{
                  name: "",
                  company: "",
                  email: "",
                  title: "",
                  terms: false,
                  plan: plan,
                }}
                validationSchema={formSchema}
                onSubmit={async (values) => {
                  localStorage.setItem("user", JSON.stringify(values));
                  await UsePostData(values);
                  TagManager.initialize(tagManagerArgs);
                  handleFormRedirect();
                }}
              >
                {({ errors, touched, handleSubmit, isSubmitting }) => (
                  <Form onSubmit={handleSubmit} className={style.form}>
                    <Input
                      name="name"
                      placeholder={t("form.name.placeholder")}
                      label={t("form.name.label")}
                      error={errors.name && touched.name && errors.name}
                    />
                    <Input
                      name="title"
                      placeholder={t("form.title.placeholder")}
                      label={t("form.title.label")}
                      error={errors.title && touched.title && errors.title}
                    />
                    <Input
                      name="company"
                      placeholder={t("form.org.placeholder")}
                      label={t("form.org.label")}
                      error={
                        errors.company && touched.company && errors.company
                      }
                    />
                    <Input
                      name="email"
                      placeholder={t("form.email.placeholder")}
                      label={t("form.email.label")}
                      error={errors.email && touched.email && errors.email}
                    />
                    <Checkbox
                      name="terms"
                      terms
                      error={errors.terms && touched.terms && errors.terms}
                    />
                    <div className={style.form__buttonWrapper}>
                      <Button type="submit" loading={isSubmitting}>
                        {t("buttonLabel")}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </article>
      </article>
    </DefaultPage>
  );
};
