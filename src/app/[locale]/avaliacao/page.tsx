import { use } from 'react';
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

export default function AvaliacaoPage({ params }: PageProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <HeaderDefault />
      <HeroComponent />
    </>
  );
}
