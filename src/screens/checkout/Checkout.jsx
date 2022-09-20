import React, {useState, useEffect} from "react";
import style from "../../../styles/Checkout.module.scss";
import { Breadcrumb, Paypal, DefaultPage, Switch } from "../../components";
import { FaCheck } from 'react-icons/fa';
import storage from "../../../utils/storage";

const Checkout = () => {
  const [userData, setUserData] = useState({});
  const [price, setPrice] = useState();
  const [billing, setBilling] = useState(true);

  const getDateFormatted = (displayMonth) => {
    let date = new Date();
    date.setDate(date.getDate() + 15);
    const day = date.getDate();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const abv = day == 1 ? "st" : day == 2 ? "nd" : day == 3 ? "rd" : "th";
    if(displayMonth) return `${day}${abv} of ${month}.`;
    return `${day}${abv}.`;
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

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
    setUserData(JSON.parse(storage.getData("user")))
    if(Object.keys(userData).length !== 0 ) handlePrice();
  }, [price]);

  useEffect(()=>{
    handlePrice()
  }, [billing]);

  useEffect(()=>{
    if (typeof window !== "undefined"){
      if ( window.innerWidth > 1300){
          setTimeout(() => {
            window.scrollTo({
              top: 115,
              left: 300,
              behavior: 'smooth'
            });
          }, 500);
      }
    }
  },[]);

  let info = {
    plan: userData.plan,
    sla: userData.plan == "premium" ? "3 days" : "5 days",
    price: formatter.format(price),
    priceA: formatter.format(price*12),
    priceDeleted: price*12*1.1112,
    users: "10",
    billing: billing
  }

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
                <div className={style.letterWrapper}>
                  <div className={style.letterWrapper__left}>
                    <p>Support plan: <strong>{info.plan}</strong></p>
                  </div>
                  <div className={style.letterWrapper__right}>
                    <p>{info.price}/mo</p>
                  </div>
                </div>

                <div className={style.letterWrapper}>
                  <div className={style.letterWrapper__left}>
                    <p>SLA</p>
                  </div>
                  <div className={style.letterWrapper__right}>
                    <p>{info.sla}</p>
                  </div>
                </div>

                {info.plan == "premium" && <div className={style.letterWrapper}>
                  <div className={style.letterWrapper__center}>
                    <p>Priorization for bug issues</p>
                  </div>                
                </div>}
              </div>

              <div className={style.info}>
                <div>
                  <p>{info.users} users</p>
                  <p>Devportal</p>
                  <p>Safira-cli</p>
                  <p>VKPR</p>
                </div>
              </div>

              <div className={style.info}>
                <div className={style.letterWrapper}>
                  <div className={style.letterWrapper__left}>
                    <p>After the 15th day of trial:</p>
                  </div>
                  <div className={style.letterWrapper__right}>
                    <p>{billing ? info.priceA : info.price}</p>
                  </div>
                </div>

                <div className={style.letterWrapper}>
                  <div className={style.letterWrapper__left}>
                    <p>Due {billing ? "yearly" : "monthly"}:</p>
                  </div>
                  <div className={style.letterWrapper__right}>
                    <p>
                      {billing ? <del>{formatter.format(info.priceDeleted)}</del> : null}&nbsp;<strong>{billing ? info.priceA : info.price}</strong>
                    </p>
                  </div>
                </div>

                {!billing && <div className={style.letterWrapper}>
                  <div className={style.letterWrapper__left}>
                    <p >Yearly: </p>   
                  </div>
                  <div className={style.letterWrapper__right}>
                    <p style={{color:"red"}}><strong>{info.priceA}</strong></p>
                  </div>
                </div>
                }

                <div className={style.letterWrapper} style={{marginTop: "1em"}}>
                  <div className={style.letterWrapper__center}>
                    <p>Billed {billing ? "yearly" : "monthly" } on the <strong>{getDateFormatted(billing)}</strong></p>
                  </div>                
                </div>
              </div>
              
              <div className={style.guarantee}>
                <div className={style.guarantee__item}>
                  <FaCheck color="#33FFCE" />
                  <p>15 day trial</p>
                </div>

                <div className={style.guarantee__item}>
                  <FaCheck color="#33FFCE" />
                  <p>Annual contract</p>
                </div>

                <div className={style.guarantee__item}>
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
