/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "./ToolsDetails.module.scss";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import data from './toolsDetails.json';

const ToolsDetails = () => {

  const { t } = useTranslation();

  let items = [];

  i18n.language == 'pt' ? items = data.pt : items = data.en;

  return (
    <section className={style.content}>
      <article className={style.wrapper}>
        <div className={style.wrapper_title}>
          <h2>
          {t("home-tools-details-title1")}  <span>{t("home-tools-details-title2")} </span> {t("home-tools-details-title3")}
          </h2>
        </div>

        <div className={style.wrapper_cardsWrapper}>
          <div className={style["wrapper_cardsWrapper-cards"]}>
            {items.map(item => (
              <div key={item.id} className={style.card}>
                  <p dangerouslySetInnerHTML={{ __html: item.desc }} />
              </div>
            ))}
          </div>
        </div>

        <div className={style["wrapper_cardsWrapper-subtitle"]}>
            <p>{t("home-tools-details-subtitle1")} </p>
            <Link href="https://docs.platform.vee.codes/devportal/self-service-demo/prerequisites/" prefetch={false}>
              <a target="_blank">
                <button
                  className={style.button}
                >{t("home-tools-details-button-label")}
                </button>
              </a>
            </Link>   
        </div>
      </article>
    </section>
  );
};

export default ToolsDetails;
