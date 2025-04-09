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

const SuccessImage = '/assets/icons/success.png';

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('success.title'),
    description: t('success.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function SuccessPage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'feedback' });

  return (
    <DefaultPage noBack showOptions>
      <article className={style.content}>
        <div className={style.content__image}>
          <Image
            src={SuccessImage}
            priority
            alt="Success Animation"
            width={200}
            height={62}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className={style['content__image-img']}
          />
        </div>
        <div className={style.content__details}>
          {t.rich('payment.success', {
            p: (chunks: any) => <p>{chunks}</p>,
          })}
        </div>
        <div className={style.content__buttonWrapper}>
          <NavigationLink href="/">
            <Button aria-label={t('buttonLabelSuccess')}>
              {t('buttonLabelSuccess')}
            </Button>
          </NavigationLink>
        </div>
      </article>
    </DefaultPage>
  );
}
