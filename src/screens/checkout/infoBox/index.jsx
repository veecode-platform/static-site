import React from 'react';
import { FaCheck } from 'react-icons/fa';
import style from './InfoBox.module.scss';

const InfoBox = ({info, billing,formatter,getDateFormatted}) => {

  return (
   <div className={style.content}>
        <div className={style.content__title}>
                  <h2>Order summary</h2>
                </div>

                <div className={style.content__info}>
                  <div className={style["content__info-letterWrapper"]}>
                    <div className={style.left}>
                      <p>Support plan: <strong>{info.plan} </strong></p>
                    </div>
                    <div className={style.right}>
                      <p>{info.price}/mo</p>
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
                    <p>{info.users} users</p>
                    <p>Devportal</p>
                    <p>Safira-cli</p>
                    <p>VKPR</p>
                  </div>
                </div>

                <div className={style.content__info}>
                  <div className={style["content__info-letterWrapper"]}>
                    <div className={style.left}>
                      <p>After the 15th day of trial:</p>
                    </div>
                    <div className={style.right}>
                      <p>{billing ? info.priceA : info.price}</p>
                    </div>
                  </div>

                  <div className={style["content__info-letterWrapper"]}>
                    <div className={style.left}>
                      <p>Due {billing ? "yearly" : "monthly"}:</p>
                    </div>
                    <div className={style.right}>
                      <p>
                        {billing ? <del>{formatter.format(info.priceDeleted)}</del> : null}&nbsp;<strong>{billing ? info.priceA : info.price}</strong>
                      </p>
                    </div>
                  </div>

                  {!billing && <div className={style["content__info-letterWrapper"]}>
                    <div className={style.left}>
                      <p >Yearly: </p>   
                    </div>
                    <div className={style.right}>
                      <p style={{color:"red"}}><strong>{info.priceA}</strong></p>
                    </div>
                  </div>
                  }

                  <div className={style["content__info-letterWrapper"]} style={{marginTop: "1em"}}>
                    <div className={style.center}>
                      <p>Billed {billing ? "yearly" : "monthly" } on the <strong>{getDateFormatted(billing)}</strong></p>
                    </div>                
                  </div>
                </div>
                
                <div className={style.content__guarantee}>
                  <div className={style["content__guarantee-item"]}>
                    <FaCheck color="#33FFCE" />
                    <p>15 day trial</p>
                  </div>

                  <div className={style["content__guarantee-item"]}>
                    <FaCheck color="#33FFCE" />
                    <p>Annual contract</p>
                  </div>

                  <div className={style["content__guarantee-item"]}>
                    <FaCheck color="#33FFCE" />
                    <p>Full Access to our knowledge base</p>
                  </div>
                </div>         
   </div>
  )
}

export default InfoBox