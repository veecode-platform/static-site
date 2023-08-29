/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "../../../components";
import style from "./SupportSection.module.scss";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import data from './SupportDetails.json';

const BgDesktop = "/assets/home/bg3.webp";
const BgMobile = "/assets/home/bgmobile2.webp";

const SupportSection = () => {

  const { t } = useTranslation();
  let items = [];
  i18n.language == 'pt' ? items = data.pt : items = data.en;

  return (
    <section className={style.wrapper}>
     {/* <div className={style.wrapper_background}>
      <img src={BgDesktop} alt="" className={style["wrapper_background-desktop"]} />
      <img src={BgMobile} alt="" className={style["wrapper_background-mobile"]} />
     </div> */}
      <article className={style.content}>
        <div className={style.content_text}>
          <div className={style["content_text-title"]}>
            <h2>
              {t("home-support-title1")} <strong> {t("home-support-title2")}</strong> {t("home-support-title3")} <strong> {t("home-support-title4")}</strong>
            </h2>
            <div className={style["content_text-buttonWrapper"]}>
              <Link href="/compare-plans/#plans" prefetch={false}>
                <a>
                  <Button>{t("home-support-buttonLabel")}</Button>
                </a>
              </Link>
            </div>
          </div>

          <div className={style.content_cardsSection}>
            <div className={style["content_cardsSection-cards"]}>
              {items.map(item => (
                <div key={item.id} className={style.card}>
                    <img 
                     src={item.icon} 
                     alt={item.title}
                     className={style.card_icon}
                     />
                    <div className={style.card_desc}>
                      <p> <strong>{item.title} :</strong>
                      {item.desc}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>

        </div> 
      </article>
    </section>
  );
};

export default SupportSection;
