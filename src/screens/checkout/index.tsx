"use client";

import React from "react";
import style from "./CheckoutStyles.module.scss";
import { Breadcrumb, Loading, Footer, Header } from "@/components";
import InfoBox from "./infoBox";
import storage from "@/utils/helpers/storage";
import { Switch } from "./switch";
import { PaypalComponent } from "./paypal";

const ImageCard = "/assets/icons/card.png";

const Checkout = () => {
  const [userData, setUserData] = React.useState<any>({}); // check userDataType
  const [price, setPrice] = React.useState<number>(0);
  const [billing, setBilling] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  //todo check the displayMonth params type
  const getDateFormatted = (displayMonth: boolean) => {
    let date = new Date();
    date.setDate(date.getDate() + 15);
    const day = date.getDate();
    const month = date.toLocaleString("en-us", { month: "long" });
    const abv = day == 1 ? "st" : day == 2 ? "nd" : day == 3 ? "rd" : "th";
    if (displayMonth) return `${day}${abv} of ${month}.`;
    return `${day}${abv}.`;
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const handleBilling = () => {
    setBilling(!billing);
    LoadingAnimation();
  };

  const handlePrice = () => {
    if (userData.plan == "standard") {
      billing ? setPrice(1790) : setPrice(1990);
    } else {
      billing ? setPrice(621) : setPrice(690);
    }
  };

  React.useEffect(() => {
    setUserData(JSON.parse(storage.getData("user")!));
    if (Object.keys(userData).length !== 0) handlePrice();
  }, [price]);

  React.useEffect(() => {
    handlePrice();
  }, [billing]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1300) {
        setTimeout(() => {
          window.scrollTo({
            top: 115,
            left: 300,
            behavior: "smooth",
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
    billing: billing,
  };

  const LoadingAnimation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className={style.wrapper}>
      <Header />
      <article className={style.content}>
        <Breadcrumb active={3} />
        <div className={style.content__options}>
          <div className={style["content__options-infoBoxWrapper"]}>
            {isLoading ? (
              <Loading />
            ) : (
              <InfoBox
                info={info}
                billing={billing}
                formatter={formatter}
                getDateFormatted={getDateFormatted}
              />
            )}
          </div>
          <div className={style["content__options-payment"]}>
            <div className={style.image}>
              <img src={ImageCard} />
            </div>
            <div className={style.switchButton}>
              <Switch
                label={"subscription"}
                isOn={billing}
                handleToggle={handleBilling}
              />
            </div>
            <div className={style.paypalBox}>
              <PaypalComponent
                plan={{
                  plan: info.plan,
                  billing: info.billing,
                  price: info.priceA,
                }}
              />
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </section>
  );
};

export default Checkout;
