import style from "../../../styles/_Checkout.module.scss";
import { Breadcrumb, Paypal, DefaultPage } from "../../components";
import { FiCheck } from "react-icons/fi";

const Checkout = () => {
  /*const [disablePaypal, setDisabledPaypal] = useState(true)
      const handleDisabled = (e) => {setDisabledPaypal(!e.target.checked)}*/

  const getDateFormatted = () => {
    const day = new Date().getDate();
    const abv = day == 1 ? "st" : day == 2 ? "nd" : day == 3 ? "rd" : "th";
    return `${day}${abv}.`;
  };

  return (
    <DefaultPage titleBar="disable">
      <section className={style.wrapper}>
        <article className={style.content}>
          <Breadcrumb active={3} />
          <div className={style.content__options}>
            <div className={style["content__options-infoBoxWrapper"]}>
              <div className={style.box}>
                <h1>Order summary</h1>
              </div>
              <div className={style.info}>
                <div className={style.info__left}>
                  <p>Support plan: Premium</p>
                  <p>SLA</p>
                </div>
                <div className={style.info__right}>
                  <p>$749/mo</p>
                  <p>3 days</p>
                </div>
              </div>

              <div className={style.info}>
                <div className={style.info__left}>
                  <p>20 users</p>
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
                  <p style={{ marginBottom: "1em" }}>Due monthly:</p>
                  <p>
                    Billed Monthly on the <strong>{getDateFormatted()}</strong>
                  </p>
                </div>
                <div className={style.info__right}>
                  <p>$749/mo</p>
                  <p>
                    <strong>$749/mo</strong>
                  </p>
                </div>
              </div>

              <div className={style.guarantee}>
                <div className={style.guarantee__item}>
                  <FiCheck color="#33FFCE" />
                  <p>30 day trial</p>
                </div>

                <div className={style.guarantee__item}>
                  <FiCheck color="#33FFCE" />
                  <p>Annual contract</p>
                </div>

                <div className={style.guarantee__item}>
                  <FiCheck color="#33FFCE" />
                  <p>Full Access to our knowledge base</p>
                </div>
              </div>
              <Paypal />
            </div>
          </div>
        </article>
      </section>
    </DefaultPage>
  );
};

export default Checkout;
