import {
  ActionBar,
  Breadcrumb,
  DefaultPage,
  ExternalLink,
  NavigationLink,
} from "@/components";
import { routing } from "@/i18n/routing";
import style from "./PricingStyles.module.scss";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import AwsCustomerComponent from "./awsCustomerComponent";
import { PlansDetails } from "./plansDetails";
import { FaCheck } from "react-icons/fa";
import { Guarantees } from "./guarantees";

//assets
const Img1 = "/assets/pricing/icon3.png";
const Img2 = "/assets/pricing/icon1.png";
const Img3 = "/assets/pricing/icon2.png";
const AwsAmi = "/assets/pricing/aws-consumer/ami.png";
const LauchWorkshopImg = "/assets/pricing/aws-consumer/lauch-workshop.png";
const FastTrackImg = "/assets/pricing/aws-consumer/fast-track.png";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("pricing.title"),
    description: t("pricing.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PricingPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "pricing" });
  const a = await getTranslations({ locale, namespace: "accessibility" });

  const guaranteesCards = [
    {
      id: 1,
      icon: Img1,
      title: t("comparePlans.guarantees.card-1.title"),
      desc: t("comparePlans.guarantees.card-1.description"),
    },
    {
      id: 2,
      icon: Img2,
      title: t("comparePlans.guarantees.card-2.title"),
      desc: t("comparePlans.guarantees.card-2.description"),
    },
    {
      id: 3,
      icon: Img3,
      title: t("comparePlans.guarantees.card-3.title"),
      desc: t("comparePlans.guarantees.card-3.description"),
    },
  ];

  const awsCustomerCards = [
    {
      id: 1,
      title: t("awsCostumer.cards.card-01.title"),
      icon: AwsAmi,
      desc: t("awsCostumer.cards.card-01.description"),
      info: t("awsCostumer.cards.card-01.footer"),
      link: "https://aws.amazon.com/marketplace/pp/prodview-aybwnwq4fx2ts?sr=0-1&ref_=beagle&applicationId=AWSMPContessa",
      linkLabel: a("external-links.aws.ami"),
      buttonLabel1: t("awsCostumer.cards.card-01.buttonLabel1"),
      buttonLabel2: t("awsCostumer.cards.card-01.buttonLabel2"),
    },
    {
      id: 2,
      title: t("awsCostumer.cards.card-02.title"),
      icon: LauchWorkshopImg,
      desc: t("awsCostumer.cards.card-02.description"),
      info: t("awsCostumer.cards.card-02.footer"),
      link: "https://aws.amazon.com/marketplace/pp/prodview-7pqhop2z4kkx2?sr=0-4&ref_=beagle&applicationId=AWSMPContessa",
      linkLabel: a("external-links.aws.lauch-workshop"),
      buttonLabel1: t("awsCostumer.cards.card-02.buttonLabel1"),
      buttonLabel2: t("awsCostumer.cards.card-02.buttonLabel2"),
    },
    {
      id: 3,
      title: t("awsCostumer.cards.card-03.title"),
      icon: FastTrackImg,
      desc: t("awsCostumer.cards.card-03.description"),
      info: t("awsCostumer.cards.card-03.footer"),
      link: "https://aws.amazon.com/marketplace/pp/prodview-bckwzbve7ftgw?sr=0-3&ref_=beagle&applicationId=AWSMPContessa",
      linkLabel: a("external-links.aws.fast-track"),
      buttonLabel1: t("awsCostumer.cards.card-03.buttonLabel1"),
      buttonLabel2: t("awsCostumer.cards.card-03.buttonLabel2"),
    },
  ];

  return (
    <DefaultPage showButton>
      <AwsCustomerComponent
        title={t("awsCostumer.title")}
        description={t("awsCostumer.description")}
        cards={awsCustomerCards}
      />

      <div className={style.supportTitle}>
        <h2>{t("comparePlans.title")}</h2>
        <h4>{t("comparePlans.description")}</h4>
      </div>

      <Breadcrumb active={1} />

      <article className={style.content} id="plans">
        {/* FREE */}
        <PlansDetails
          title={t("comparePlans.plans.free.title")}
          subtitle={t("comparePlans.plans.free.description")}
          label={t.rich("comparePlans.plans.free.details", {
            span: (chunks) => <span>{chunks}</span>,
          })}
          freePlan
          buttonLabel={t("comparePlans.plans.free.action")}
        >
          <li>
            <span>
              <FaCheck />
            </span>
            <ExternalLink
              description={a("external-links.discord")}
              href="https://discord.gg/arCYZK3hM6"
            >
              <span>{t("comparePlans.plans.free.benefits1")}</span>
            </ExternalLink>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("comparePlans.plans.free.benefits2")}
          </li>
        </PlansDetails>

        {/* STANDARD */}
        <PlansDetails
          title={t("comparePlans.plans.support.title")}
          subtitle={t.rich("comparePlans.plans.support.description", {
            strong: (chunks) => (
              <strong>
                <NavigationLink href="/how-it-works">{chunks}</NavigationLink>
              </strong>
            ),
          })}
          label={t.rich("comparePlans.plans.support.details", {
            span: (chunks) => <span>{chunks}</span>,
          })}
          buttonLabel={t("comparePlans.plans.support.action")}
        >
          <li>
            <span>
              <FaCheck />
            </span>
            <NavigationLink href="/support">
              {t.rich("comparePlans.plans.support.benefits1", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </NavigationLink>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("comparePlans.plans.support.benefits2")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("comparePlans.plans.support.benefits3")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("comparePlans.plans.support.benefits4")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("comparePlans.plans.support.benefits5")}
          </li>
        </PlansDetails>
      </article>
      <article className={style.sectionBar}>
        <ActionBar
          title={t("action.contact.title")}
          buttonLabel={t("action.contact.buttonLabel")}
          variant="contact"
        />
        <Guarantees
          details={t.rich("comparePlans.footer", {
            strong: (chunks: any) => (
              <strong>
                <NavigationLink href="/contact-us">{chunks}</NavigationLink>
              </strong>
            ),
          })}
          cards={guaranteesCards}
        />
      </article>
    </DefaultPage>
  );
}
