'use client';

import React from 'react';
import {
  Form, Formik, 
} from 'formik';
import { RiMailSendLine } from 'react-icons/ri';
import {
  object, string, 
} from 'yup';
import { Button } from '@/components';
import { UseNewsletterData } from '@/hooks/useNewsLetter';
import { useRouter } from '@/i18n/routing';
import style from './emailInputStyles.module.scss';
import { EmailInputProps } from './types';

export const EmailInput: React.FC<EmailInputProps> = ({ handleFeedback }) => {
  const formSchema = object({
    email: string()
      .email('*Verifique o e-mail inserido')
      .required('*O E-mail é obrigatório'),
  });

  const router = useRouter();

  return (
    <div className={style.field}>
      <span className={style.field__label}>
        Insira seu endereço de e-mail abaixo
      </span>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={formSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await UseNewsletterData(values.email);
            handleFeedback('create', {
              variant: 'success',
              message: 'Sua resposta foi registrada com sucesso!',
            });
            setTimeout(() => {
              handleFeedback('remove', { variant: null, message: '' });
            }, 5000);
            resetForm();
            setTimeout(() => {
              router.push('/');
            }, 3000);
          } catch (error:unknown) {
            handleFeedback('create', {
              variant: 'error',
              message: error as string,
            });
          }
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <fieldset className={style.field__actions}>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${style.input} ${errors.email && touched.email ? style.input__error : ''}`}
              />
              <Button
                size="sm"
                disabled={isSubmitting}
                aria-label={'Email para Newsletter'}
                type="submit"
                loading={isSubmitting}
              >
                <span className={style.buttonLabel}>
                  <RiMailSendLine /> Assinar
                </span>
              </Button>
            </fieldset>
            {errors.email && touched.email && (
              <span className={style.errors}>{errors.email}</span>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
