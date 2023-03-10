/* eslint-disable @next/next/no-img-element */
import style from "./Plans.module.scss";
import PlansDetails from "./plansDetails";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const veeCodeLogo = '/assets/logo/black_logo.png';
const stacks = '/assets/home/stacks_plan.png'

const Plans = () => {
  const { t } = useTranslation();

    return (
        <section className={style.content} id="plans">
            <div className={style.header}>
                <div>
                    <img
                        className={style.header__logo}
                        src={veeCodeLogo}
                        alt="Vee Code Logo - Desktop Version"
                    />
                </div>
                <div className={style.header__title}>
                    <h2>
                        <span>{t('Plans')}</span>
                    </h2>
                </div>
            </div>
            <div className={style.body}>
                <div className={style.subtitle}>
                    <p>
                        <strong>{t('Lower the barriers')}</strong> {t('for your development team through our specialized support in the stacks you work in')}
                    </p>
                </div>
            </div>


            <article className={style.plans}>
                {/* STANDARD */}
                <PlansDetails
                    title={t("Standard")}
                    subtitle={t("Start your free trial right now, with no credit card required to sign up!")}
                    link="/validate?plan=standard"
                    label={t("Start at")}
                    emphasis="$ 1990"
                    text={t("per Month")}
                    buttonLabel={t("Free Test")}
                    banner
                >
                    <li><span><FaCheck /></span>{t('8x5 support')}</li>
                    <li><span><FaCheck /></span>{t('One business day SLA')}</li>
                    <li><span><FaCheck /></span>{t('10 tickets per month')}</li>
                    <li><span><FaCheck /></span>{t('2 simultaneous tickets')}</li>
                    <li><span><FaCheck /></span>{t('Direct access to technical professionals')}</li>
                </PlansDetails>

                <PlansDetails
                    title={t("Basic")}
                    subtitle={t("Start your free trial right now, with no credit card required to sign up!")}
                    link="/validate?plan=standard"
                    label={t("Start at")}
                    emphasis="$ 1990"
                    text={t("per Month")}
                    buttonLabel={t("Free Test")}
                >
                    <li><span><FaCheck /></span>{t('8x5 support')}</li>
                    <li><span><FaCheck /></span>{t('One business day SLA')}</li>
                    <li><span><FaCheck /></span>{t('10 tickets per month')}</li>
                    <li><span><FaCheck /></span>{t('2 simultaneous tickets')}</li>
                    <li><span><FaCheck /></span>{t('Direct access to technical professionals')}</li>
                </PlansDetails>

                {/* ENTERPRISE */}
                <PlansDetails
                    title={t("Enterprise")}
                    subtitle={t("Get personalized service according to your company's specific needs")}
                    link="/contact-enterprise"
                    headline={t('Personalize your experience')}
                    buttonLabel={t('Contact Us')}
                    banner={false}
                >
                    <li><span><FaCheck /></span>{t('24x7 support')}</li>
                    <li><span><FaCheck /></span>{t('SLA on the same business day')}</li>
                    <li><span><FaCheck /></span>{t('Prioritized bug fixes')}</li>
                    <li><span><FaCheck /></span> {t('Direct access to technical professionals')}</li>
                    <li><span><FaCheck /></span> {t('DevOps training and documentation')}</li>
                </PlansDetails>
            </article>
        </section>
    );
};

export default Plans;