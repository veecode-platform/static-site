import React, { useState, useEffect } from "react";
import style from "../../../styles/Checkout.module.scss";
import { Breadcrumb, DefaultPage, Switch, Loading, Paypal } from "../../components";
import storage from "../../../utils/storage";
import InfoBox from "./infoBox";

const ImageCard = "/assets/icons/card.png";

const Checkout = () => {

  const [userData, setUserData] = useState({});
  const [price, setPrice] = useState();
  const [billing, setBilling] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const getDateFormatted = (displayMonth) => {
    let date = new Date();
    date.setDate(date.getDate() + 15);
    const day = date.getDate();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const abv = day == 1 ? "st" : day == 2 ? "nd" : day == 3 ? "rd" : "th";
    if (displayMonth) return `${day}${abv} of ${month}.`;
    return `${day}${abv}.`;
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  const handleBilling = () => {
    setBilling(!billing);
    LoadingAnimation();
  }

  const handlePrice = () => {
    if (userData.plan == "standard") {
      billing ? setPrice(1790) : setPrice(1990)
    }
    else {
      billing ? setPrice(621) : setPrice(690)
    }
  }

  useEffect(() => {
    setUserData(JSON.parse(storage.getData("user")))
    if (Object.keys(userData).length !== 0) handlePrice();
  }, [price]);

  useEffect(() => {
    handlePrice()
  }, [billing]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1300) {
        setTimeout(() => {
          window.scrollTo({
            top: 115,
            left: 300,
            behavior: 'smooth'
          });
        }, 500);
      }
    }
  }, []);

  let info = {
    plan: userData.plan,
    sla: userData.plan == "1 Business day",
    price: formatter.format(price),
    priceA: formatter.format(price * 12),
    priceDeleted: price * 12 * (userData.plan == "standard" ? 1.1111 : 1.1112),
    users: "10",
    billing: billing
  }

  const LoadingAnimation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  return (
    <DefaultPage
      titleBar="disable"
      noBack
      noFooter
    >
      <section className={style.wrapper}>
        <article className={style.content}>
          <Breadcrumb active={3} />
          <div className={style.content__options}>
            <div className={style["content__options-infoBoxWrapper"]}>
              {
                isLoading ? <Loading /> : (
                  <InfoBox
                    info={info}
                    billing={billing}
                    formatter={formatter}
                    getDateFormatted={getDateFormatted}
                  />
                )
              }
            </div>
            <div className={style["content__options-payment"]}>
              <div className={style.image}>
                <img src={ImageCard} />
              </div>
              <div className={style.switchButton}>
                <Switch label={"subscription"} isOn={billing} handleToggle={handleBilling} />
              </div>
              <div className={style.paypalBox}>
                <Paypal plan={{ plan: info.plan, billing: info.billing, price: info.price }} />
              </div>
            </div>
          </div>
        </article>
      </section>
    </DefaultPage>
  );
};


export default Checkout;
