import { use } from 'react';
import { useTranslations } from 'next-intl';
import {
  getTranslations, setRequestLocale, 
} from 'next-intl/server';
import {
  ActionBar, DefaultPage, 
} from '@/components';
import { routing } from '@/i18n/routing';
import { getAllPlugins } from '@/lib';
import {
  LayoutProps, PageProps, 
} from '@/utils/types/pageProps';
import { PluginCard } from './pluginCard';
import style from './PluginsStyles.module.scss';

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('plugins.title'),
    description: t('plugins.description'),
    keywords: ['veecode-platform', 'backstage-plugins'],
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default function PluginsPage({ params }: PageProps) {
  const { locale } = use(params);
  // Enable static rendering
  setRequestLocale(locale);

  // const t = await getTranslations({ locale, namespace: "plugins" });
  const t = useTranslations('plugins');
  const plugins = getAllPlugins(locale);

  return (
    <main>
      <DefaultPage titleBar title={t('title')} subtitle={t('description')}>
        <section className={style.wrapper}>
          {plugins.map(p => (
            <PluginCard
              key={p.id}
              image={p.image}
              title={p.title}
              path={p.path}
              tags={p.tags}
              desc={p.desc}
              buttonLabel={t('buttonLabel')}
            />
          ))}
        </section>
        <ActionBar
          title={t('action.contact.title')}
          buttonLabel={t('action.contact.buttonLabel')}
          variant="contact"
        />
      </DefaultPage>
    </main>
  );
}
