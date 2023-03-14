import React from "react";
import { Breadcrumb, ContactBar, DefaultPage, Guarantees } from "../../components";
import style from "../../../styles/ComparePlans.module.scss";
import PlansDetails from "./plansDetails";
import { FaCheck, FaCheckCircle, FaMinus } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Link from "next/link";

const ComparePlans = () => {
  const { t } = useTranslation();

  return (
    <DefaultPage
      showButton
      titleBar="enable"
      title="Chose our support for you"
      subtitle="No more stress with the digital transition, choose the support that most fits your need:"
    >
      <Breadcrumb active={1} />

      <article className={style.content}>
        {/* BASIC */}
        <PlansDetails
          title={t("Basic")}
          subtitle={<>{t("Acelerate your business, secure support for our Developer Portal solution. Solve your problems with API automation, Pipelines, and ")} <Link href='/how-it-works' passHref><a style={{ cursor: "pointer", color: "#1C8068", fontWeight: "bold" }}>{t("more")}</a></Link>.</>}
          link="/validate?plan=basic"
          label={t("Start at")}
          emphasis="$ 690"
          text={t("per Month")}
          buttonLabel={t("Checkout")}
        >
          <li><span><FaCheck /></span>{t('8x5')} <Link href="/support" passHref><a><span>{t('Support')}</span></a></Link></li>
          <li><span><FaCheck /></span>{t('One business day SLA')}</li>
          <li><span><FaCheck /></span>{t('Support to TechDocs, CI/CD and Pull Request plugins')}</li>
          <li><span><FaCheck /></span>{t('Support to 2 project templates')}</li>
          <li><span><FaCheck /></span>{t('Direct access to our experts')}</li>
        </PlansDetails>

        {/* STANDARD */}
        <PlansDetails
          title={t("Standard")}
          subtitle={<>{t("Get all your questions answered about our solutions. No more problems with DevOps, API Development, Kubernetes, AWS and")} <Link href='/how-it-works' passHref><a style={{ cursor: "pointer", color: "#1C8068", fontWeight: "bold" }}>{t("more")}</a></Link>.</>}
          link="/validate?plan=standard"
          label={t("Start at")}
          emphasis="$ 1990"
          text={t("per Month")}
          buttonLabel={t("Checkout")}
        >
          <li><span><FaCheck /></span>{t('8x5')} <Link href="/support" passHref><a><span>{t('Support')}</span></a></Link></li>
          <li><span><FaCheck /></span>{t('One business day SLA')}</li>
          <li><span><FaCheck /></span>{t('Support to all plugins')}</li>
          <li><span><FaCheck /></span>{t('Support to all templates')}</li>
          <li><span><FaCheck /></span>{t('Direct access to our experts')}</li>
        </PlansDetails>



        {/* ENTERPRISE */}
        <PlansDetails
          title={t("Enterprise")}
          subtitle={t("Bring us your problem, and we will bring you the solution. This plan includes all our solutions in a customized way to your demand!")}
          link="/contact-enterprise"
          headline={t('Personalize your experience')}
          buttonLabel={t('Contact Us')}
        >
          <li><span><FaCheck /></span>{t('24x7')} <Link href="/support" passHref><a><span>{t('Support')}</span></a></Link></li>
          <li><span><FaCheck /></span>{t('SLA on the same business day')}</li>
          <li><span><FaCheck /></span>{t('Support to all plugins')}</li>
          <li><span><FaCheck /></span> {t('Support to all templates')}</li>
          <li><span><FaCheck /></span> {t('Direct access to our experts')}</li>
          <li><span><FaCheck /></span> {t('DevOps training and documentation')}</li>
        </PlansDetails>
      </article>
      <article className={style.sectionBar}>
        <ContactBar />
        <Guarantees />
      </article>
    </DefaultPage>
  );
};

export default ComparePlans;
