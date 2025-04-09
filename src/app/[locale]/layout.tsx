import { GoogleAnalytics } from '@next/third-parties/google';
import { notFound } from 'next/navigation';
import {
  hasLocale,NextIntlClientProvider, 
} from 'next-intl';
import {
  getTranslations, setRequestLocale, 
} from 'next-intl/server';
import { poppins } from '@/font';
import { routing } from '@/i18n/routing';
// import { LANGUAGES } from '@/utils/constants/languages';
import './global.scss';
import { LayoutProps } from '@/utils/types/pageProps';

const thumbnailImageUrl =
  'https://cdn.platform.vee.codes/landing-page/thumbnail.png';

//function to generate the routes for all the locales
export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('home.title'),
    description: t('home.description'),
    keywords: ['backstage', 'idp', 'platform', 'veecode'],
    openGraph: {
      title: t('home.title'),
      images: thumbnailImageUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
  };
}

//function to get the translations
// async function getMessages(locale: string) {
//   try {
//     return (await import(`../../../locales/${locale}.json`)).default;
//   } catch (error) {
//     notFound();
//   }
// }

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LayoutProps>) {
  const { locale } = await params;
  // if (!LANGUAGES.includes(locale)) notFound();
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  // const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS_ID!} />
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
