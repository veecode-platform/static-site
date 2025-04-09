import {
  getTranslations, setRequestLocale, 
} from 'next-intl/server';
import {
  Button, DefaultPage, NavigationLink, ScrollTop, 
} from '@/components';
import { routing } from '@/i18n/routing';
import {
  LayoutProps, PageProps, 
} from '@/utils/types/pageProps';
import { CardItem } from './cardItem';
import style from './HowItWorksStyles.module.scss';

//assets
const Icon1 = '/assets/howitworks/icon1.png';
const Icon2 = '/assets/howitworks/icon2.png';
const Icon3 = '/assets/howitworks/icon3.png';
const Icon4 = '/assets/howitworks/icon4.png';
const Icon5 = '/assets/howitworks/icon5.png';
const Icon6 = '/assets/howitworks/icon6.png';
const Icon7 = '/assets/howitworks/icon7.png';
const Icon8 = '/assets/howitworks/icon8.png';
const Icon9 = '/assets/howitworks/icon9.png';

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('how-it-works.title'),
    description: t('how-it-works.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function HowItWorksPage({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'howItWorks' });

  return (
    <DefaultPage
      titleBar
      title={t('title')}
      subtitle={t('subtitle')}
      showButton
      showOptions
    >
      <article className={style.root}>
        <CardItem image={Icon1} title={t('options.option1.title')}>
          {t.rich('options.option1.description', {
            p: chunks => <p>{chunks}</p>,
          })}
        </CardItem>
        <CardItem image={Icon2} title={t('options.option2.title')}>
          {t.rich('options.option2.description', {
            p: chunks => <p>{chunks}</p>,
          })}
        </CardItem>
        <CardItem image={Icon3} title={t('options.option3.title')}>
          {t.rich('options.option3.description', {
            p: chunks => <p>{chunks}</p>,
          })}
        </CardItem>
        <CardItem image={Icon4} title={t('options.option4.title')}>
          {t.rich('options.option4.description', {
            p: chunks => <p>{chunks}</p>,
          })}
        </CardItem>
        <CardItem image={Icon5} title={t('options.option5.title')}>
          {t.rich('options.option5.description', {
            p: chunks => <p>{chunks}</p>,
          })}
        </CardItem>
        <CardItem image={Icon6} title={t('options.option6.title')}>
          {t.rich('options.option6.description', {
            p: chunks => <p>{chunks}</p>,
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </CardItem>
        <CardItem image={Icon7} title={t('options.option7.title')}>
          {t.rich('options.option7.description', {
            p: chunks => <p>{chunks}</p>,
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </CardItem>
        <CardItem image={Icon8} title={t('options.option8.title')}>
          {t.rich('options.option8.description', {
            p: chunks => <p>{chunks}</p>,
          })}
        </CardItem>
        <CardItem image={Icon9} title={t('options.option9.title')}>
          {t.rich('options.option9.description', {
            p: chunks => <p>{chunks}</p>,
          })}
        </CardItem>
      </article>
      <NavigationLink href="/pricing">
        <Button aria-label={t('buttonLabel')}>{t('buttonLabel')}</Button>
      </NavigationLink>
      <ScrollTop />
    </DefaultPage>
  );
}
