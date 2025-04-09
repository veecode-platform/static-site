import Image from 'next/image';
import {
  getTranslations, setRequestLocale, 
} from 'next-intl/server';
import {
  DefaultPage, FaqList, 
} from '@/components';
import { routing } from '@/i18n/routing';
import {
  LayoutProps, PageProps, 
} from '@/utils/types/pageProps';
import style from './ContactUsStyles.module.scss';
import { FormElement } from './ui/FormElement';

const flowImage = '/assets/icons/contact_form_img.png';

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('contact-us.title'),
    description: t('contact-us.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function ContactUsPage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'contactUs' });

  return (
    <DefaultPage
      showButton
      titleBar
      title={t('title')}
      noBack
      showOptions
      subtitle={
        <>
          {t.rich('subtitle', {
            strong: (chunks: any) => (
              <strong>
                <a href="mailto: platform-sales@vee.codes">{chunks}</a>
              </strong>
            ),
          })}
        </>
      }
    >
      <section className={style.content}>
        <div className={style.content__options}>
          <div className={style['content__options-decoration']}>
            <Image
              src={flowImage}
              alt="contact us image"
              width={653}
              height={653}
              style={{
                width: '100%',
                height: 'auto',
              }}
              priority
            />
          </div>

          <div className={style['content__options-formWraper']}>
            <FormElement type="CONTACT-US" company />
          </div>
        </div>
        <div className={style.content__faq}>
          <div>
            <h1>{t('faqSection.title')}</h1>
            <h2>{t('faqSection.subtitle')}</h2>
          </div>
          <FaqList />
        </div>
      </section>
    </DefaultPage>
  );
}
