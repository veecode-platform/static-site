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
              {t('Get')} <span>{t('expert support')}</span>{" "} 
              {t('from the')} <strong>{t('best solutions')}</strong>{" "}
               {t('on the market in just a few clicks at an')} 
               {" "}<strong>{t('affordable price')}</strong>
            </h1>
          </div>
          <div className={style.info__buttons}>
            <Link href="#plans" passHref>
              <a>
                <Button>{t('Learn More')}</Button>
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