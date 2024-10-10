"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./FreePlanStyles.module.scss";
import { Formik, Form } from "formik";
import { object, string, boolean } from "yup";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TagManager from "react-gtm-module";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { ActionBar, Button, DefaultPage, NavigationLink } from "@/components";
import { UseContactData } from "@/hooks/useContactData";
import { Checkbox, Input } from "@/components/patterns/input";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const SuccessAnimation = "/assets/animations/success.json";

export const FreePlan = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const t = useTranslations("freePlan");
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");

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

  const formSchema = object({
    name: string().required(t("form.validate.required")),
    company: string().required(t("form.validate.required")),
    email: string()
      .email(t("form.validate.invalid-email"))
      .required(t("form.validate.required")),
    title: string().required(t("form.validate.required")),
    terms: boolean().isTrue(),
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormRedirect = async () => {
    await router.push("https://docs.platform.vee.codes/vkdr/intro/");
  };

  const tagManagerArgs = {
    gtmId: "GTM-56RG967", //todo checkout id
    events: {
      generateLead: {
        currency: "USD",
        value: 1,
      },
    },
  };

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
          <div className={style["content__options-formWraper"]}>
            <Formik
              initialValues={{
                name: "",
                company: "",
                email: "",
                title: "",
                terms: false,
                type: "FREE",
                plan: plan,
              }}
              validationSchema={formSchema}
              onSubmit={async (values) => {
                const response = await UseContactData(values);
                TagManager.initialize(tagManagerArgs);
                if (response) {
                  setOpen(true);
                  await handleFormRedirect();
                }
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
                    error={errors.company && touched.company && errors.company}
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

                  <Dialog
                    fullWidth
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="success-alert-dialog"
                    aria-describedby="success-alert-dialog"
                  >
                    <DialogTitle>
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          position: "absolute",
                          right: 8,
                          top: 8,
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </DialogTitle>
                    <DialogContent
                      className={style.animation}
                      style={{ textAlignLast: "center" }}
                    >
                      <DotLottieReact src={SuccessAnimation} autoplay />
                    </DialogContent>
                    <DialogTitle
                      style={{ alignSelf: "center", fontWeight: "bold" }}
                    >
                      <h3>{t("feedback.title")}</h3>
                    </DialogTitle>
                    <DialogContent style={{ margin: ".5em 1em 1.5em 1em" }}>
                      <DialogContentText>
                        <p style={{ fontSize: "1.5em", textAlign: "center" }}>
                          {t.rich("feedback.message", {
                            strong: (chunks) => <strong>{chunks}</strong>,
                          })}
                        </p>
                      </DialogContentText>
                      <NavigationLink href="/">
                        <p
                          style={{
                            textDecoration: "underline",
                            fontSize: ".9em",
                            textAlign: "center",
                            padding: "2em 0 1em 0",
                            color: "#1c8068",
                          }}
                        >
                          {t("feedback.footerLink")}
                        </p>
                      </NavigationLink>
                    </DialogContent>
                  </Dialog>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </article>
      {/* </article> */}
    </DefaultPage>
  );
};
