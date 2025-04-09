import {
  getTranslations, setRequestLocale, 
} from 'next-intl/server';
import { DefaultPage } from '@/components';
import { routing } from '@/i18n/routing';
import {
  LayoutProps, PageProps, 
} from '@/utils/types/pageProps';
import { CardsSection } from './cardsSection';
import { ContactSection } from './contactSection';
import { FirstSection } from './fistSection';

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('governance.title'),
    description: t('governance.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function GovernancePage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'governance' });

  return (
    <DefaultPage noFooter noBack showOptions noSpace>
      <FirstSection
        title={t('title')}
        description={
          <>
            {t.rich('section-1', {
              strong: chunks => <strong>{chunks}</strong>,
            })}
          </>
        }
      />
      <CardsSection
        card1={t('section-2.card-1')}
        card2={t('section-2.card-2')}
        card3={t('section-2.card-3')}
      />
      <ContactSection
        description={
          <>
            {t.rich('section-3', {
              p: chunks => <p>{chunks}</p>,
              strong: chunks => <strong>{chunks}</strong>,
            })}
          </>
        }
        buttonLabel={t('buttonLabel')}
      />
    </DefaultPage>
  );
}
