/* eslint-disable @next/next/no-img-element */
import { Button , Input, Checkbox, TextArea} from "../../components";
import style from "../../../styles/FormElement.module.scss";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { UseContactData } from "../../hooks/UseContactData";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
import { useTranslation } from "react-i18next";

const FormElement = ({ company, checkbox, type }) => {

  const { t } = useTranslation();

  const formSchema = object({
    name: string().required("*required"),
    company: company ? string().required("*required") : null,
    email: string().email("*invalid email").required("*required"),
    question: string().required("*required"),
  });

  const router = useRouter();

  const handleFormRedirect = async () => {
    await router.push("/contact-success");
  };

  const tagManagerArgs = {
    gtmId: 'GTM-56RG967',
    events: {
        generateLead: {
            currency: "USD",
            value: 1,
        }
    }
}

  return (
   <div className={style.formWrapper}>
     <Formik
      initialValues={{
        name: "",
        company: "",
        email: "",
        question: "",
        type: type,
        vkpr: false,
        safiracli: false,
        support: false,
        devportal: false,
      }}
      validationSchema={formSchema}
      onSubmit={async (values) => {
        const response = await UseContactData(values);
        TagManager.initialize(tagManagerArgs);
        await handleFormRedirect();
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={style.form}>
          <Input
            name="name"
            placeholder={t("sup-plans-form-placeholder1")}
            label={t("sup-plans-form-label1")}
            error={errors.name && touched.name && errors.name}
          />
          <Input
            name="email"
            placeholder={t("sup-plans-form-placeholder4")}
            label="Email"
            error={errors.email && touched.email && errors.email}
          />
          {company && (
                      <Input
                      name="company"
                      placeholder={t("sup-plans-form-placeholder3")}
                      label={t("sup-plans-form-label3")}
                      error={errors.company && touched.company && errors.company}
                    />
          )}
          {checkbox && (
            <div className={style.form__checkboxWrapper}>
              <h1>Which products are you interested in?</h1>
              <Checkbox name="vkpr">VKPR</Checkbox>
              <Checkbox name="safiracli">Safira-cli</Checkbox>
              <Checkbox name="support">Expert Support</Checkbox>
              <Checkbox name="devportal">Devportal</Checkbox>
            </div>
          )}
          <TextArea
            name="question"
            placeholder={t("contact-us-form-desc-placeholder")}
            label={t("contact-us-form-desc-label")}
            error={errors.question && touched.question && errors.question}
          ></TextArea>

          <div className={style.form__buttonWrapper}>
            <Button type="submit" loading={isSubmitting} alt>
              {t("submit")}
            </Button>
          </div>
        </Form>
      )}
    </Formik>

   </div>  );
};

export default FormElement;
