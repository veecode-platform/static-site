import Image from 'next/image';
import {
  getTranslations, setRequestLocale, 
} from 'next-intl/server';
import {
  Button, DefaultPage, NavigationLink, 
} from '@/components';
import { routing } from '@/i18n/routing';
import {
  LayoutProps, PageProps, 
} from '@/utils/types/pageProps';
import style from './SuccessStyles.module.scss';

const FailedImage = '/assets/icons/failed.png';

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('contact-success.title'),
    description: t('contact-success.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function ContactSuccessPage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'feedback' });

  return (
    <DefaultPage noBack showOptions>
      <article className={style.content}>
        <Image
          src={FailedImage}
          priority
          alt="Failed Animation" 
          width={200}
          height={62}
          style={{
            width: '100%',
            height: 'auto',
          }}
          className={style.content__image}
        />
        <div className={style.content__details}>
          {t.rich('contact.error', {
            p: chunks => <p>{chunks}</p>,
          })}
        </div>
        <div className={style.content__buttonWrapper}>
          <NavigationLink href="/contact-us">
            <Button aria-label={t('buttonLabelError')}>
              {t('buttonLabelError')}
            </Button>
          </NavigationLink>
        </div>
      </article>
    </DefaultPage>
  );
}
