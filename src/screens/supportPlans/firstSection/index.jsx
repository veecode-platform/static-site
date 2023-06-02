/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import style from "./FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import Divider from "./divider";
import { useTranslation } from 'react-i18next';

const animation = "/assets/support/animation.gif";

const FirstSection = () => {
  const { t } = useTranslation();
 
  return (
    <section className={style.wrapper} id="firstsec">
      <article className={style.content}>
        <div className={style.info}>
          <div className={style.info__title}>
            <h1>
              {t('sup-plans-first-title1')} <span>{t('sup-plans-first-title2')}</span>{" "} 
              {t('sup-plans-first-title3')} <strong>{t('sup-plans-first-title4')}</strong>{" "}
               {t('sup-plans-first-title5')} 
               {" "}<strong>{t('sup-plans-first-title6')}</strong>
            </h1>
          </div>
          <div className={style.info__buttons}>
            <Link href="/support" passHref>
              <a>
                <Button>{t('learn-more')}</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className={style.animation}>
          <div>
            <img
              src={animation}
              className={style.animation__img}
            />
          </div>
        </div>
      </article>
      <Divider/>
    </section>
  );
};

export default FirstSection;