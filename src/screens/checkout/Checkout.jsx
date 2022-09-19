import React, {useState, useEffect} from "react";
import style from "../../../styles/Checkout.module.scss";
import { Breadcrumb, Paypal, DefaultPage, Switch } from "../../components";
import { FaCheck } from 'react-icons/fa';
import storage from "../../../utils/storage";

const Checkout = () => {
  const [userData, setUserData] = useState({});
  const [price, setPrice] = useState("")
  const [billing, setBilling] = useState(true);


  useEffect(()=>{
    setUserData(JSON.parse(storage.getData("user")))
    if(Object.keys(userData).length !== 0 ) handlePrice();
  }, [price])

  const handleBilling = () => { setBilling(!billing) }
  const handlePrice = () => {
    if(userData.plan == "premium" ){
      billing ? setPrice(944) : setPrice(1049)
    }
    else{
      billing ? setPrice(809) : setPrice(899)
    }
  }

  useEffect(()=>{
    handlePrice()
  }, [billing])


  let info = {
    plan: userData.plan,
    sla: userData.plan == "premium" ? "3 days" : "5 days",
    price: price,
    users: "10",
    billing: billing
  }

  const getDateFormatted = (displayMonth) => {
    let date = new Date();
    date.setDate(date.getDate() + 15);
    const day = date.getDate();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const abv = day == 1 ? "st" : day == 2 ? "nd" : day == 3 ? "rd" : "th";
    if(displayMonth) return `${day}${abv} of ${month}.`;
    return `${day}${abv}.`;
  };

  return (
    <DefaultPage 
      titleBar="disable"
      noBack
      >
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
                  <p>Support plan: <strong>{info.plan}</strong></p>
                  <p>SLA</p>
                  {info.plan == "premium" ? <p>Priorization for bug issues</p>: null}
                </div>
                <div className={style.info__right}>
                  <p>${info.price}/mo</p>
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
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>

              <div className={style.info}>
                <div className={style.info__left}>
                  <p>After the 15th day of trial:</p>
                  <p style={billing ? {marginBottom: "1em"} : null}>Due {billing ? "yearly" : "monthly"}:</p>
                  {!billing ? <p style={{ marginBottom: "1em" }}>Yearly: </p>: null}
                  <p>
                    Billed {billing ? "yearly" : "monthly" } on the <strong>{getDateFormatted(billing)}</strong>
                  </p>
                </div>
                <div className={style.info__right}>
                  <p>${billing ? info.price*12 : info.price}</p>
                  <p>
                    <strong>${billing ? info.price*12 : info.price}</strong>
                  </p>
                  {!billing ? <p style={{color:"red"}}><strong>${info.price*12}</strong></p>: null}
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
            </div>
            <div className={style["content__options-infoBoxWrapper"]}>
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
