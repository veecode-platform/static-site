'use client';

import React from 'react';
import {
  Form, Formik, 
} from 'formik';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import TagManager from 'react-gtm-module';
import {
  object, string, boolean, 
} from 'yup';
import { Button } from '@/components';
import {
  Checkbox, Input, 
} from '@/components/ui/patterns/input';
import { UsePostData } from '@/hooks/usePostData';
import { useRouter } from '@/i18n/routing';
import style from './ValidateFormContentStyles.module.scss';

export const ValidateFormContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  const t = useTranslations('validate');

  const formSchema = object({
    name: string().required(t('form.validate.required')),
    company: string().required(t('form.validate.required')),
    email: string()
      .email(t('form.validate.invalid-email'))
      .required(t('form.validate.required')),
    title: string().required(t('form.validate.required')),
    terms: boolean().isTrue().default(true).required('*required'),
  });

  const tagManagerArgs = {
    gtmId: 'GTM-56RG967', //todo check ID
    events: {
      generateLead: {
        currency: 'USD',
        value: 1,
      },
    },
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 1300) {
        setTimeout(() => {
          window.scrollTo({
            top: 120,
            left: 300,
            behavior: 'smooth',
          });
        }, 500);
      }
    }
  }, []);

  return (
    <div className={style.formWrapper}>
      <Formik
        initialValues={{
          name: '',
          company: '',
          email: '',
          title: '',
          type: 'PLAN-STANDARD',
          terms: false,
          plan: plan,
        }}
        validationSchema={formSchema}
        onSubmit={async values => {
          try {
            localStorage.setItem('user', JSON.stringify(values));
            await UsePostData(values);
            TagManager.initialize(tagManagerArgs);
            router.push('/success');
          } catch (error:unknown) {
            // eslint-disable-next-line no-console
            console.error(error);
            router.push('/failed');
          }
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className={style.form}>
            <Input
              name="name"
              placeholder={t('form.name.placeholder')}
              label={t('form.name.label')}
              error={errors.name && touched.name && errors.name}
            />
            <Input
              name="title"
              placeholder={t('form.title.placeholder')}
              label={t('form.title.label')}
              error={errors.title && touched.title && errors.title}
            />
            <Input
              name="company"
              placeholder={t('form.org.placeholder')}
              label={t('form.org.label')}
              error={errors.company && touched.company && errors.company}
            />
            <Input
              name="email"
              placeholder={t('form.email.placeholder')}
              label={t('form.email.label')}
              error={errors.email && touched.email && errors.email}
            />
            <Checkbox
              name="terms"
              terms
              error={errors.terms && touched.terms && errors.terms}
            />
            <div className={style.form__buttonWrapper}>
              <Button
                aria-label={t('buttonLabel')}
                type="submit"
                loading={isSubmitting}
              >
                {t('buttonLabel')}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
