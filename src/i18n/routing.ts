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
    '/pricing': '/pricing',
    '/pricing/#plans': '/pricing/#plans',
    '/free-plan': '/free-plan',
    '/free-plan?plan=free': 'free-plan?plan=free',
    '/contact-us': '/contact-us',
    '/contact-success': '/contact-success',
    '/contact-failed': '/contact-failed',
    '/how-it-works': '/how-it-works',
    '/support': '/support',
    '/terms-of-service': '/terms-of-service',
    '/privacy-policy':'/privacy-policy',
    '/faq': '/faq',
    '/success': '/success',
    '/failed': '/failed',
    '/validate': '/validate',
    '/validate?plan=standard': '/validate?plan=standard',
    '/governance': '/governance',
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
