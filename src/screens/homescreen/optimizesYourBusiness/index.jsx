import style from "./OptimizeYourBusiness.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

// const Icon = "/assets/home/image3.avif";
const Icon = "/assets/support/animation.svg";

const OptimizeYourBusiness = () => {
  const { t } = useTranslation();

  return (
    <section className={style.content}>
      <article className={style.content__contentWrapper}>
        <div className={style["content__contentWrapper-text"]}>
          <div className={style.title}>
            <h2>
              {t("home-optimize-title1")} <strong>{t("home-optimize-title2")}</strong>
            </h2>
          </div>
          <div className={style.details}>
            <div className={style.details__text}>
              <p>
                {t("home-optimize-subtitle1")} <strong> {t("home-optimize-subtitle2")}</strong> {t("home-optimize-subtitle3")} <strong>{t("home-optimize-subtitle4")}</strong> {t("home-optimize-subtitle5")} <strong>{t("home-optimize-subtitle6")}</strong>.
              </p>
            </div>
            <div className={style.details__buttonWrapper}>
              <Link href="https://docs.platform.vee.codes/" passHref>
                <a target="_blank">
                  <Button>{t("home-optimize-button-label")}</Button>
                </a>
              </Link>
              
              {/* <Link href="/docs" passHref> 
                <a className={style.button}>
                  <Button>Start For Free</Button>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div className={style["content__contentWrapper-image"]}>
          <div className={style.image}>
            <Image
                layout="responsive"
                src={Icon} 
                alt="Settings Image"
                width='100%'
                height='100%'
                unoptimized
                priority={true}
                />
          </div>
        </div>
      </article>
    </section>
  );
};

export default OptimizeYourBusiness;
