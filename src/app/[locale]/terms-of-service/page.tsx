import {
  getTranslations, setRequestLocale, 
} from 'next-intl/server';
import {
  DefaultPage, ScrollTop, 
} from '@/components';
import { routing } from '@/i18n/routing';
import {
  LayoutProps, PageProps, 
} from '@/utils/types/pageProps';
import style from './TermsOfServiceStyles.module.scss';

export async function generateMetadata(props: Omit<LayoutProps, 'children'>) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('terms-of-service.title'),
    description: t('terms-of-service.description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function TermsOfServicePage({ params }: PageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'termsOfService' });

  return (
    <DefaultPage titleBar title={t('title')} noPrevious showButton showOptions>
      <article className={style.content}>
        {/* Definitions */}
        <h2>{t('blocks.definitions.title')}</h2>
        {t.rich('blocks.definitions.content', {
          p: chunks => <p>{chunks}</p>,
          strong: chunks => <strong>{chunks}</strong>,
        })}
        {/* General Terms And Conditions */}
        {/* Updates to terms */}
        <h2>{t('blocks.generalTerms.title')}</h2>
        <h3> {t('blocks.generalTerms.updateToTerms.title')}</h3>
        <p>{t('blocks.generalTerms.updateToTerms.item1')}</p>
        <p>{t('blocks.generalTerms.updateToTerms.item2')}</p>
        <p>{t('blocks.generalTerms.updateToTerms.item3')}</p>
        <p>
          {t.rich('blocks.generalTerms.updateToTerms.item4', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        {/* Services offered and Terms */}
        <h3>{t('blocks.generalTerms.servicesOffered.title')}</h3>
        <p>
          {t.rich('blocks.generalTerms.servicesOffered.item1', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.generalTerms.servicesOffered.item2', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.generalTerms.servicesOffered.item3', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>{t('blocks.generalTerms.servicesOffered.item4')}</p>
        {/* Customers and Users */}
        <h3>{t('blocks.generalTerms.customersAndUsers.title')}</h3>
        <p>
          {t.rich('blocks.generalTerms.customersAndUsers.item1', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.generalTerms.customersAndUsers.item2', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.generalTerms.customersAndUsers.item3', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.generalTerms.customersAndUsers.item4', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        {/* Pricing And Biling */}
        <h3>{t('blocks.generalTerms.pricingAndBilling.title')}</h3>
        <p>{t('blocks.generalTerms.pricingAndBilling.item1')}</p>
        <p>{t('blocks.generalTerms.pricingAndBilling.item2')}</p>
        <p>{t('blocks.generalTerms.pricingAndBilling.item3')}</p>
        <p>{t('blocks.generalTerms.pricingAndBilling.item4')}</p>
        <p>{t('blocks.generalTerms.pricingAndBilling.item5')}</p>
        <p>{t('blocks.generalTerms.pricingAndBilling.item6')}</p>
        {/* Renewal, Upgrade And Termination */}
        <h3>{t('blocks.generalTerms.renewAndUpgrade.title')}</h3>
        <p>{t('blocks.generalTerms.renewAndUpgrade.item1')}</p>
        <p>{t('blocks.generalTerms.renewAndUpgrade.item2')}</p>
        <p>{t('blocks.generalTerms.renewAndUpgrade.item3')}</p>
        <p>
          {t.rich('blocks.generalTerms.renewAndUpgrade.item4', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.generalTerms.renewAndUpgrade.item5', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>{t('blocks.generalTerms.renewAndUpgrade.item6')}</p>
        <p>{t('blocks.generalTerms.renewAndUpgrade.item7')}</p>
        <p>{t('blocks.generalTerms.renewAndUpgrade.item8')}</p>
        {/* Liability Limitations */}
        <h3>{t('blocks.generalTerms.liabilityLimitations.title')}</h3>
        <p>{t('blocks.generalTerms.liabilityLimitations.item1')}</p>
        <p>{t('blocks.generalTerms.liabilityLimitations.item2')}</p>
        <p>{t('blocks.generalTerms.liabilityLimitations.item3')}</p>
        <p>{t('blocks.generalTerms.liabilityLimitations.item4')}</p>
        <p>{t('blocks.generalTerms.liabilityLimitations.item5')}</p>
        {/* INTELLECTUAL PROPERTY */}
        <h3>{t('blocks.generalTerms.intelectualProperty.title')}</h3>
        <p>{t('blocks.generalTerms.intelectualProperty.item1')}</p>
        <p>{t('blocks.generalTerms.intelectualProperty.item2')}</p>
        <p>{t('blocks.generalTerms.intelectualProperty.item3')}</p>
        <p>{t('blocks.generalTerms.intelectualProperty.item4')}</p>
        <p>{t('blocks.generalTerms.intelectualProperty.item5')}</p>
        <p>{t('blocks.generalTerms.intelectualProperty.item6')}</p>
        {/* Service Terms */}
        {/* RENEWAL & TERMINATION */}
        <h2>{t('blocks.renewalTermination.title')}</h2>
        <p>{t('blocks.renewalTermination.items.item1')}</p>
        <p>{t('blocks.renewalTermination.items.item2')}</p>
        {/* SERVICES DEFINITION */}
        <h2>{t('blocks.servicesDefinition.title')}</h2>
        <p>
          {t.rich('blocks.servicesDefinition.items.item1', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.servicesDefinition.items.item2', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.servicesDefinition.items.item3', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.servicesDefinition.items.item4', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.servicesDefinition.items.item5', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.servicesDefinition.items.item6', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.servicesDefinition.items.item7', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.servicesDefinition.items.item8', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p>
          {t.rich('blocks.servicesDefinition.items.item9', {
            strong: chunks => <strong>{chunks}</strong>,
          })}
        </p>
      </article>
      <ScrollTop />
    </DefaultPage>
  );
}
