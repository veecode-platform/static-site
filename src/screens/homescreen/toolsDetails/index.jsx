/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button, DividerBottom } from "../../../components";
import Card from "./card";
import style from "./ToolsDetails.module.scss";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import data from './toolsDetails.json'

const ToolsDetails = () => {

  const { t } = useTranslation();

  let items = [];

  i18n.language == 'pt' ? items = data.pt : items = data.en;

  return (
    <section className={style.content}>
      <div className={style.content__title}>
        <h2>
          {t("home-tools-details-title1")} <span> {t("home-tools-details-title2")}</span>
        </h2>
      </div>

      <article className={style.content__wrapper}>
        <div className={style["content__wrapper-subtitle"]}>
          <p>{t("home-tools-details-subtitle1")} <span> {t("home-tools-details-subtitle2")}</span> {t("home-tools-details-subtitle3")} <span> {t("home-tools-details-subtitle4")}</span> {t("home-tools-details-subtitle5")}</p>
          <img src="/assets/home/cubes.png"></img>
        </div>

        <div className={style["content__wrapper-cards"]}>
          {items.map(item => (
            <div key={item.id} className={style.card}>
              <div className={style.card__item}>
                <img src={item.image} />
                <Link href={item.link} passHref>
                  <a target="_blank">
                    <button className={style["card__item-btn"]}>{item.title.toUpperCase()}</button>
                  </a>
                </Link>
              </div>
              <div className={style.card__desc}>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </article>
    </section>
  );
};

export default ToolsDetails;
