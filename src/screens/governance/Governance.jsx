"use  client";

/* eslint-disable @next/next/no-img-element */
import { Button, DefaultPage } from "../../components";
import style from "./GovernanceStyles.module.scss";
import React from 'react';
import { useTranslation } from "react-i18next";


const NotebookImg = "/assets/governance/notebook.svg";
const Icon1 = "/assets/governance/icon1.svg";
const Icon2 = "/assets/governance/icon2.svg";
const Icon3 = "/assets/governance/icon3.svg";

export const Governance = () => {
  
  const { t }= useTranslation();

  return (
    <DefaultPage
      noFooter
      noBack
      showOptions
      noSpace
    >
       {/* FIRST SECTION */}
        <section className={style.firstSection}>
            <div className={style.firstSection__content}>
              <h2 className={style['firstSection__content-title']} >{t("governance-title")}</h2>
              <p className={style['firstSection__content-subtitle']} dangerouslySetInnerHTML={{ __html:t("governance-subtitle")}}/>
            </div>
        </section>

      {/* SECOND SECTION */}
        <section className={style.cards}>
          <article className={style.gridCards}>
            <div className={style.cardGreen}></div>
            <div className={style.cardBlack}><p className={style.cardText}>{t("governance-card-1")}</p></div>
            <div className={style.cardBlack}><p className={style.cardText}>{t("governance-card-2")}</p></div>
            <div className={style.cardGrey}><img src={Icon1} alt="" className={style.cardIcon}/></div>
            <div className={style.cardGreen}></div>
          </article>
          <article className={style.gridCardsContinuos}>
            <div className={style.cardGreen}></div>
            <div className={style.cardGrey}><img src={Icon2} alt="" className={style.cardIcon}/></div>
            <div className={style.cardBlack}><p className={style.cardText}>{t("governance-card-3")}</p></div>
            <div className={style.cardGreen}><img src={Icon3} alt="" className={style.cardIcon}/></div>
            <div className={style.cardBlack}></div>
          </article>

         <article className={style.cardsMobile}>
            <div className={style.card}>
              <img src={Icon1} alt="" className={style.card__icon}/>
              <div className={style.card__label}>
                <p>{t("governance-card-1")}</p>
              </div>
            </div>
            <div className={style.card}>
              <img src={Icon2} alt="" className={style.card__icon}/>
              <div className={style.card__label}>
                <p>{t("governance-card-2")}</p>
              </div>
            </div>
            <div className={style.card}>
              <img src={Icon3} alt="" className={style.card__icon}/>
              <div className={style.card__label}>
                <p>{t("governance-card-3")}</p>
              </div>
            </div>
         </article>
        </section>

        {/* THIRD SECTION */}
        <section className={style.contactSection}>
          <article className={style.content}>
          <img src={NotebookImg} alt="" className={style.content__image}/>
          <div className={style.content__text}>
            <p dangerouslySetInnerHTML={{ __html:t("governance-text1")}}/>
            <p>{t("governance-text2")}</p>
            <p>{t("governance-text3")}</p>
            <Button>{t("governance-button-label")}</Button>
          </div>
          </article>
        </section>
        
    </DefaultPage>
  )
}


{/* <section>

</section>

<section>
<div>
  <img
   src={NotebookImg}
   alt=""
  />
</div>
<div>
  <div>
    <p dangerouslySetInnerHTML={{ __html:t("governance-text1")}}/>
    <p dangerouslySetInnerHTML={{ __html:t("governance-text2")}}/>
    <p dangerouslySetInnerHTML={{ __html:t("governance-text3") ?? ""}}/>
  </div>
  <Button>
    {t("governance-button-label")}
  </Button>
</div>
</section> */}