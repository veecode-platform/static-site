/* eslint-disable @next/next/no-img-element */
import style from "./Plans.module.scss";
import PlansDetails from "./plansDetails";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Link from "next/link";

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
                {/* BASIC */}
                <PlansDetails
                    title={t("Basic")}
                    subtitle={<>{t("Acelerate your business now, secure support for our Developer Portal solution. Solve your problems with API automation, Pipelines, and ")} <Link href='/how-it-works' passHref><a style={{ cursor: "pointer", color: "#1C8068", fontWeight: "bold" }}>{t("more")}</a></Link>.</>}
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
        </section>
    );
};

export default Plans;