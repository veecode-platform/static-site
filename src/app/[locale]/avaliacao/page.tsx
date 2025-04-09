import { setRequestLocale } from 'next-intl/server';
import { PageProps } from '@/utils/types/pageProps';
import {
  HeaderDefault, HeroComponent, 
} from './components';

export async function generateMetadata() {
  return {
    title: 'VeeCode Platform | Avaliacao',
    description: 'Nível de adoção de práticas de Platform Engineering',
  };
}

export default async function AvaliacaoPage({ params }: PageProps) {
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
