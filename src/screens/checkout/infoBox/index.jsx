import React from 'react';
import { FaCheck } from 'react-icons/fa';
import style from './InfoBox.module.scss';
import { useTranslation } from 'react-i18next';

const InfoBox = ({info, billing,formatter,getDateFormatted}) => {

  const { t } = useTranslation(); 

  return (
   <div className={style.content}>
        <div className={style.content__title}>
                  <h2>{t("checkout-summary")}</h2>
                </div>

                <div className={style.content__info}>
                  <div className={style["content__info-letterWrapper"]}>
                    <div className={style.left}>
                      <p>{t("checkout-sup-plan")} <strong>{info.plan} </strong></p>
                    </div>
                    <div className={style.right}>
                      <p>{info.price}/{t("checkout-mo")}</p>
                    </div>
                  </div>

                  <div className={style["content__info-letterWrapper"]}>
                    <div className={style.left}>
                      <p>SLA</p>
                    </div>
                    <div className={style.right}>
                      <p>{info.sla}</p>
                    </div>
                  </div>

                  {info.plan == "premium" && <div className={style["content__info-letterWrapper"]}>
                    <div className={style.center}>
                      <p>Priorization for bug issues</p>
                    </div>                
                  </div>}
                </div>

                <div className={style.content__info}>
                  <div>
                    <p>{t("checkout-tickets")}</p>
                  </div>
                </div>

                <div className={style.content__info}>
                  {/* <div className={style["content__info-letterWrapper"]}>
                    <div className={style.left}>
                      <p>After the 7th day of trial:</p>
                    </div>
                    <div className={style.right}>
                      <p>{billing ? info.priceA : info.price}</p>
                    </div>
                  </div> */}

                  <div className={style["content__info-letterWrapper"]}>
                    <div className={style.left}>
                      <p>{t("checkout-due")} {billing ? t("checkout-year") : t("checkout-monthly") }:</p>
                    </div>
                    <div className={style.right}>
                      <p>
                        {billing ? <del>{formatter.format(info.priceDeleted)}</del> : null}&nbsp;<strong>{billing ? info.priceA : info.price}</strong>
                      </p>
                    </div>
                  </div>

                  {!billing && <div className={style["content__info-letterWrapper"]}>
                    <div className={style.left}>
                      <p>{t("checkout-year")}: </p>   
                    </div>
                    <div className={style.right}>
                      <p style={{color:"red"}}><strong>{info.priceA}</strong></p>
                    </div>
                  </div>
                  }

                  <div className={style["content__info-letterWrapper"]} style={{marginTop: "1em"}}>
                    <div className={style.center}>
                      <p>{t("checkout-billed1")} {billing ? t("checkout-year") : t("checkout-monthly") } {t("checkout-billed2")} <strong>{getDateFormatted(billing)}</strong></p>
                    </div>                
                  </div>
                </div>
                
                <div className={style.content__guarantee}>
                  {/* <div className={style["content__guarantee-item"]}>
                    <FaCheck color="#33FFCE" />
                    <p>15 days trial</p>
                  </div> */}

                  <div className={style["content__guarantee-item"]}>
                    <FaCheck color="#33FFCE" />
                    <p>{t("checkout-contract")}</p>
                  </div>
                </div>         
   </div>
  )
}

export default InfoBox