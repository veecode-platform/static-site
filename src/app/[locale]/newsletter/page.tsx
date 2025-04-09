import { setRequestLocale } from 'next-intl/server';
import { PageProps } from '@/utils/types/pageProps';
import {
  HeaderDefault, HeroComponent, 
} from './components';

export async function generateMetadata() {
  return {
    title: 'VeeCode Platform | Newsletter',
    description: 'Conecte-se ao universo VeeCode',
  };
}

export default async function NewsletterPage({ params }: PageProps) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <HeaderDefault />
      <HeroComponent />
    </>
  );
}
