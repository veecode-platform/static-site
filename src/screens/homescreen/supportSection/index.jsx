/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components";
import style from "./SupportSection.module.scss";
import { useTranslation } from 'react-i18next';
import TextSlide from "./textSlide";

const BgDesktop = "/assets/home/bg3.webp";
const BgMobile = "/assets/home/bgmobile2.webp";

const SupportSection = () => {
  const { t } = useTranslation();

  return (
    <section className={style.wrapper}>
      {/* Background */}
      <div className={style.wrapper__background}>
        <img
          src={BgDesktop}
          alt="background header - Desktop version"
          className={style["wrapper__background-desktop"]}
        />
        <img
          src={BgMobile}
          alt="background header - Mobile version"
          className={style["wrapper__background-mobile"]}
        />
      </div>
      <article className={style.content}>
        <div className={style.content__text}>
          <div className={style["content__text-title"]}>
            <h1>
              {t("home-support-title1")} <strong>{t("home-support-title2")}</strong> {t("home-support-title3")}
              <TextSlide />
            </h1>
          </div>
          <div className={style["content__text-desc"]}>
            <strong>{t("home-support-subtitle1")}</strong>
            <ul className={style.list}>
              <li>{t("home-support-option1")}</li>
              <li>{t("home-support-option2")}</li>
              <li>{t("home-support-option3")}</li>
              <li>{t("home-support-option4")}</li>
              <li>{t("home-support-option5")}</li>
            </ul>
          </div>
          <div className={style["content__text-buttonWrapper"]}>

            {/* <Link href="/support-plans" prefetch={false}>
              <a>
                <Button>Learn More</Button>
              </a>
            </Link> */}
            <Link href="/trial" prefetch={false}>
              <a>
                <Button>{t("support-trial")}</Button>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SupportSection;
