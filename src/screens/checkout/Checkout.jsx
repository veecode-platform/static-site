import React, {useState, useEffect} from "react";
import style from "../../../styles/_Checkout.module.scss";
import { Breadcrumb, Paypal, DefaultPage, Switch } from "../../components";
import { FaCheck } from 'react-icons/fa';
import storage from "../../../utils/storage";

const Checkout = () => {

  const getDateFormatted = () => {
    const day = new Date().getDate();
    const abv = day == 1 ? "st" : day == 2 ? "nd" : day == 3 ? "rd" : "th";
    return `${day}${abv}.`;
  };

  const [userData, setUserData] = useState({})
  useEffect(()=>{
    setUserData(JSON.parse(storage.getData("user")))
  }, [])

  const [billing, setBilling] = useState(true);
  const handleBilling = () =>{ setBilling(!billing) }

  const [price, setPrice] = useState("$749")
  const handlePrice = () => {
    if(billing){
      if(userData.plan == "premium") { setPrice("$674") }
      else { setPrice("$449")}
    }
    else{
      if(userData.plan == "premium") { setPrice("$749") }
      else { setPrice("$499") }
    }
  }

  useEffect(()=>{
    handlePrice()
  }, [billing])

  let info = {
    plan: userData.plan,
    sla: userData.plan == "premium" ? "3 days" : "5 days",
    price: price,
    users: userData.plan == "premium" ? "20" : "10",
    billing: billing
  }

  return (
    <DefaultPage titleBar="disable" noBack>
      <section className={style.wrapper}>
        <article className={style.content}>
          <Breadcrumb active={3} />
          <div className={style.content__options}>
            <div className={style["content__options-infoBoxWrapper"]}>
              <div className={style.box}>
                <h1>Order summary</h1>
              </div>
              <div className={style.info}>
                <div className={style.info__left} >
                  <p>Support plan: {info.plan}</p>
                  <p>SLA</p>
                </div>
                <div className={style.info__right}>
                  <p>{info.price}/mo</p>
                  <p>{info.sla}</p>
                </div>
              </div>

              <div className={style.info}>
                <div className={style.info__left}>
                  <p>{info.users} users</p>
                  <p>Devportal</p>
                  <p>Safira-cli</p>
                  <p>VKPR</p>
                </div>
                <div className={style.info__right}>
                  <p>$0/mo</p>
                  <p>$0/mo</p>
                  <p>$0/mo</p>
                  <p>$0/mo</p>
                </div>
              </div>

              <div className={style.info}>
                <div className={style.info__left}>
                  <p>Due today:</p>
                  <p style={{ marginBottom: "1em" }}>Due {billing ? "yearly" : "monthly"}:</p>
                  <p>
                    Billed Monthly on the <strong>{getDateFormatted()}</strong>
                  </p>
                </div>
                <div className={style.info__right}>
                  <p>{info.price}</p>
                  <p>
                    <strong>{info.price}</strong>
                  </p>
                </div>
              </div>

              <div className={style.guarantee}>
                <div className={style.guarantee__item}>
                  <FaCheck color="#33FFCE" />
                  <p>15 day trial</p>
                </div>

                <div
                  className={
                    style.guarantee__item
                  }
                >
                  <FaCheck color="#33FFCE" />
                  <p>Annual contract</p>
                </div>
                <div
                  className={
                    style.guarantee__item
                  }
                >
                  <FaCheck color="#33FFCE" />
                  <p>Full Access to our knowledge base</p>
                </div>
              </div>
              <Switch label={"subscription"} isOn={billing} handleToggle={handleBilling}/>
              <Paypal plan={{plan: info.plan, billing: info.billing}}/>
            </div>
          </div>
        </article>
      </section>
    </DefaultPage>
  );
};

export default Checkout;
