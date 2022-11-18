/* eslint-disable @next/next/no-img-element */
import { Button , Input, Checkbox, TextArea} from "../../components";
import style from "../../../styles/FormElement.module.scss";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { UseContactData } from "../../hooks/UseContactData";
import { useRouter } from "next/router";

const FormElement = ({ company, checkbox }) => {
  const formSchema = object({
    name: string().required("*required"),
    company: string().required("*required"),
    email: string().email("*invalid email").required("*required"),
    question: string().required("*required"),
  });

  const router = useRouter();

  const handleFormRedirect = async () => {
    await router.push("/contact-success");
  };

  return (
   <div className={style.formWrapper}>
     <Formik
      initialValues={{
        name: "",
        company: "",
        email: "",
        question: "",
        vkpr: false,
        safiracli: false,
        support: false,
        devportal: false,
      }}
      validationSchema={formSchema}
      onSubmit={async (values) => {
        //console.log(values);
        const response = await UseContactData(values);
        await handleFormRedirect();
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={style.form}>
          <Input
            name="name"
            placeholder="Your name"
            label="Full name"
            error={errors.name && touched.name && errors.name}
          />
          <Input
            name="email"
            placeholder="you@acme.com"
            label="Email"
            error={errors.email && touched.email && errors.email}
          />
          {company && (
                      <Input
                      name="company"
                      placeholder="Acme, Inc."
                      label="Company / Organization"
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
            placeholder="Your message"
            label="How can we help?"
            error={errors.question && touched.question && errors.question}
          ></TextArea>

          <div className={style.form__buttonWrapper}>
            <Button type="submit" loading={isSubmitting} alt>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>

   </div>  );
};

export default FormElement;
