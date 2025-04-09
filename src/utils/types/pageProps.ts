import { Locale } from 'next-intl';

export type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};
