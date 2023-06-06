import Link from 'next/link'
import style from './PricingSection.module.scss'
import { useTranslation } from 'react-i18next';

const PricingSection = () => {

  const { t } = useTranslation();

  return (
    <article className={style.wrapper}>
        <div className={style.content}>
            <h2 className={style.content__title}>{t("support-pricing-title")}</h2>
            <p className={style.content__desc}>
                {t("support-pricing-desc1")} 
                <Link href="/compare-plans" prefetch={false}>
                    <a> {t("support-pricing-desc2")} </a>
                </Link>
                {t("support-pricing-desc3")}
            </p>
        </div>
    </article>
  )
}

export default PricingSection