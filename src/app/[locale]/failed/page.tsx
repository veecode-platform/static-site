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
import style from './FailedStyles.module.scss';

const FailedImage = `/assets/icons/failed.png`;

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('failed.title'),
    description: t('failed.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function FailedPage({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'feedback' });

  return (
    <DefaultPage noFooter showOptions noBack>
      <article className={style.content}>
        <div className={style.content__image}>
          <Image
            src={FailedImage}
            alt="Failed Animation"
            width={200}
            height={62}
            style={{
              width: '100%',
              height: 'auto',
            }}
            unoptimized
            className={style['content__image-img']}
          />
        </div>
        <div className={style.content__details}>
          {t.rich('payment.error', {
            p: (chunks: any) => <p>{chunks}</p>,
          })}
        </div>
        <div className={style.content__buttonWrapper}>
          <NavigationLink href="/validate?plan=standard">
            <Button aria-label={t('buttonLabelError')}>
              {t('buttonLabelError')}
            </Button>
          </NavigationLink>
        </div>
      </article>
    </DefaultPage>
  );
}
