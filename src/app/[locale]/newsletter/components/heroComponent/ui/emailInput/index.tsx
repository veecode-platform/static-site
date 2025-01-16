"use client";

import { Button } from "@/components";
import style from "./emailInputStyles.module.scss";
import { RiMailSendLine } from "react-icons/ri";
import { Form, Formik } from "formik";
import { object, string } from "yup";

export const EmailInput = () => {
  const formSchema = object({
    email: string().email("*E-mail inválido").required("*Verifique o e-mail inserido"),
  });

  return (
    <div className={style.field}>
      <span className={style.field__label}>Insira seu endereço de e-mail abaixo</span>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={formSchema}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <fieldset className={style.field__actions}>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email} 
                onChange={handleChange} 
                onBlur={handleBlur} 
                className={`${style.input} ${errors.email && touched.email ? style.input__error : ""}`}
              />
              <Button
                size="sm"
                disabled={isSubmitting}
                aria-label={"Email para Newsletter"}
                type="submit"
                loading={isSubmitting}
              >
                <span className={style.buttonLabel}>
                  <RiMailSendLine /> Assinar
                </span>
              </Button>
            </fieldset>
            {errors.email && touched.email && <span className={style.errors}>{errors.email}</span>}
          </Form>
        )}
      </Formik>
    </div>
  );
};
