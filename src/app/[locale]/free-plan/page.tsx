import {
  getTranslations, setRequestLocale, 
} from 'next-intl/server';
import {
  ActionBar, DefaultPage, 
} from '@/components';
import { routing } from '@/i18n/routing';
import {
  LayoutProps, PageProps, 
} from '@/utils/types/pageProps';
import style from './FreePlanStyles.module.scss';
import { FreePlanFormContent } from './ui/freePlanFormContent';

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('free-plan.title'),
    description: t('free-plan.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function FreePlanPage({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'freePlan' });
  const a = await getTranslations({ locale, namespace: 'accessibility' });

  return (
    <DefaultPage noFooter showButton={false}>
      <ActionBar
        title={t('action.docs.title')}
        buttonLabel={t('action.docs.buttonLabel')}
        variant="docs"
        linkLabel={a('external-links.docs')}
      />

      {/* <article className={style.container}> */}
      <article className={style.content}>
        <div className={style.text}>
          <div className={style.text__header}>
            <h2>
              {t.rich('title', {
                strong: chunks => <strong>{chunks}</strong>,
              })}
            </h2>
          </div>
          <div className={style.text__resume}>
            {t.rich('description', {
              p: chunks => <p>{chunks}</p>,
              strong: chunks => <strong>{chunks}</strong>,
            })}
          </div>
        </div>
        <div className={style.content__options}>
          <FreePlanFormContent />
        </div>
      </article>
      {/* </article> */}
    </DefaultPage>
  );
}
