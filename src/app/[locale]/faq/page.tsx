import { use } from 'react';
import { useTranslations } from 'next-intl';
import {
  getTranslations, setRequestLocale, 
} from 'next-intl/server';
import {
  ActionBar, DefaultPage, FaqList, 
} from '@/components';
import { routing } from '@/i18n/routing';
import {
  LayoutProps, PageProps, 
} from '@/utils/types/pageProps';

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('faq.title'),
    description: t('faq.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default function FaqPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  // const t = await getTranslations({ locale, namespace: "faq" });
  const t = useTranslations('faq');

  return (
    <DefaultPage
      titleBar
      title={t('title')}
      subtitle={t('subtitle')}
      showOptions
    >
      <FaqList />
      <ActionBar
        title={t('action.contact.title')}
        buttonLabel={t('action.contact.buttonLabel')}
        variant="contact"
      />
    </DefaultPage>
  );
}
