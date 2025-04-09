import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  localeCookie: false,
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/plugins': '/plugins',
    '/plugin': '/plugin',
    '/plugin/[path]': '/plugin/[path]',
    '/pricing': {
      pt: '/planos',
      en: '/pricing',
    },
    '/pricing/#plans': {
      pt: '/planos/#plans',
      en: '/pricing/#plans',
    },
    '/free-plan': {
      pt: '/plano-gratis',
      en: '/free-plan',
    },
    '/free-plan?plan=free': {
      pt: '/plano-gratis?plan=free',
      en: '/free-plan?plan=free',
    },
    '/contact-us': {
      pt: '/fale-conosco',
      en: '/contact-us',
    },
    '/contact-success': {
      pt: '/contato-recebido',
      en: '/contact-success',
    },
    '/contact-failed': {
      pt: '/contato-falhado',
      en: '/contact-failed',
    },
    '/how-it-works': {
      pt: '/como-funciona',
      en: '/how-it-works',
    },
    '/support': {
      pt: '/suporte',
      en: '/support',
    },
    '/terms-of-service': {
      pt: '/termos-de-servico',
      en: '/terms-of-service',
    },
    '/privacy-policy': {
      pt: '/politica-de-privacidade',
      en: '/privacy-policy',
    },
    '/faq': {
      pt: '/perguntas-frequentes',
      en: '/faq',
    },
    '/success': {
      pt: '/tudo-certo',
      en: '/success',
    },
    '/failed': {
      pt: '/houve-um-erro',
      en: '/failed',
    },
    '/validate': {
      pt: '/validacao',
      en: '/validate',
    },
    '/validate?plan=standard': {
      pt: '/validacao?plan=standard',
      en: '/validate?plan=standard',
    },
    '/governance': {
      pt: '/governancia',
      en: '/governance',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
