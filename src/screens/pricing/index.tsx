"use client";

import style from "./PricingStyles.module.scss";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import AwsCustomerComponent from "./awsCustomerComponent";
import {
  ActionBar,
  Breadcrumb,
  DefaultPage,
  NavigationLink,
} from "@/components";
import { useTranslations } from "next-intl";
import { Guarantees } from "./guarantees";
import { PlansDetails } from "./plansDetails";

export const Pricing = () => {
  const t = useTranslations("pricing");

  return (
    <DefaultPage showButton>
      <AwsCustomerComponent />

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
            <Link
              href="https://discord.gg/arCYZK3hM6"
              passHref
              target={"_blank"}
            >
              <span>{t("comparePlans.plans.free.benefits1")}</span>
            </Link>
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
        <Guarantees />
      </article>
    </DefaultPage>
  );
};
