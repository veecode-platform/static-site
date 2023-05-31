/* eslint-disable @next/next/no-img-element */
import style from "./_FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const BgDesktop = "/assets/home/bg1.webp";
const BgMobile = "/assets/home/bgmobile1.webp";

const FirstSection = () => {
  
  const { t } = useTranslation();

  return (
    <section className={style.wrapper}>
      {/* Background */}
      <div className={style.wrapper__background}>
        <img
          src={BgDesktop}
          alt="background header - Desktop Version"
          className={style["wrapper__background-desktop"]}
        />
        <img
          src={BgMobile}
          alt="background header - Mobile version"
          className={style["wrapper__background-mobile"]}
        />
      </div>
      <article className={style.content}>
        <div className={style.content__title}>
          <h2>
            <span>{t("home-first-title1")}</span>
            <br />
            {t("home-first-title2")}
          </h2>
        </div>
        <div className={style.content__text}>
          <p>
            {t("home-first-subtitle1")}{" "}
            <strong>{t("home-first-subtitle2")}</strong> {t("home-first-subtitle3")}{" "}
            <strong>{t("home-first-subtitle4")}</strong>
            {t("home-first-subtitle5")}
          </p>
        </div>
        <div className={style.content__buttons}>
          <Link href="/support-plans/?lng=en" passHref>
            <a>
              <Button>{t("home-first-button-label1")}</Button>
            </a>
          </Link>

          <Link href="/trial" passHref>
            <a>
              <Button>{t("support-trial")}</Button>
            </a>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default FirstSection;