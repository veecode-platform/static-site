'use client';

import {
  Formik, Form, 
} from 'formik';
import { useTranslations } from 'next-intl';
import TagManager from 'react-gtm-module';
import {
  object, string, 
} from 'yup';
import { UseContactData } from '@/hooks/useContactData';
import { useRouter } from '@/i18n/routing';
import { Button } from '../..';
import {
  Checkbox, Input, TextArea, 
} from '../patterns/input';
import style from './FormElementStyles.module.scss';
import { FormElementProps } from './types';

export const FormElement: React.FC<FormElementProps> = ({
  company,
  checkbox,
  type,
}) => {
  const t = useTranslations('contactUs.form');

  const formSchema = object({
    name: string().required('*required'),
    company: string().required('*required').default(null),
    email: string().email('*invalid email').required('*required'),
    question: string().required('*required'),
  });

  const router = useRouter();

  const tagManagerArgs = {
    gtmId: 'GTM-56RG967',
    events: {
      generateLead: {
        currency: 'USD',
        value: 1,
      },
    },
  };

  return (
    <div className={style.formWrapper}>
      <Formik
        initialValues={{
          name: '',
          company: '',
          email: '',
          question: '',
          type: type,
          vkpr: false,
          safiracli: false,
          support: false,
          devportal: false,
        }}
        validationSchema={formSchema}
        onSubmit={async values => {
          try {
            await UseContactData(values);
            TagManager.initialize(tagManagerArgs);
            router.push('/contact-success');
          } catch (error:unknown) {
            // eslint-disable-next-line no-console
            console.error(error);
            router.push('/contact-failed');
          }
        }}
      >
        {({ errors, touched, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className={style.form}>
            <Input
              name="name"
              placeholder={t('name.placeholder')}
              label={t('name.label')}
              error={errors.name && touched.name && errors.name}
            />
            <Input
              name="email"
              placeholder={t('email.placeholder')}
              label={t('email.label')}
              error={errors.email && touched.email && errors.email}
            />
            {company && (
              <Input
                name="company"
                placeholder={t('org.placeholder')}
                label={t('org.label')}
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
              placeholder={t('message.placeholder')}
              label={t('message.label')}
              error={errors.question && touched.question && errors.question}
            ></TextArea>

            <div className={style.form__buttonWrapper}>
              <Button
                aria-label={t('buttonLabel')}
                type="submit"
                loading={isSubmitting}
                alt
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
