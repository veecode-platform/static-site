import style from "./_SupportBenefits.module.scss";
import { FaPaperPlane, FaLayerGroup, FaGlobe, FaShieldAlt, FaInfoCircle } from "react-icons/fa";

const SupportBenefits = () => {
  return (
    <div className={style.cards}>
      {/* Card 01 */}
      <div className={style.card}>
        <div className={style.card__icon}>
             <FaPaperPlane />
        </div>
        <div className={style.card__details}>
            <h2 className={style["card__details-title"]}>Communicate directly with Gruntwork engineers in Slack</h2>
            <p className={style["card__details-desc"]}>
                We create a shared Slack channel so you can chat with Gruntwork
                engineers from your own Slack account. Message us any time with
                questions relating to your Gruntwork infrastructure.
            </p>
        </div>
      </div>
      {/* Card 02 */}
      <div className={style.card}>
        <div className={style.card__icon}>
             <FaLayerGroup />
        </div>
        <div className={style.card__details}>
            <h2 className={style["card__details-title"]}>Communicate directly with Gruntwork engineers in Slack</h2>
            <p className={style["card__details-desc"]}>
                We create a shared Slack channel so you can chat with Gruntwork
                engineers from your own Slack account. Message us any time with
                questions relating to your Gruntwork infrastructure.
            </p>
        </div>
      </div>
      {/* Card 03 */}
      <div className={style.card}>
        <div className={style.card__icon}>
             <FaGlobe />
        </div>
        <div className={style.card__details}>
            <h2 className={style["card__details-title"]}>Communicate directly with Gruntwork engineers in Slack</h2>
            <p className={style["card__details-desc"]}>
                We create a shared Slack channel so you can chat with Gruntwork
                engineers from your own Slack account. Message us any time with
                questions relating to your Gruntwork infrastructure.
            </p>
        </div>
      </div>
      {/* Card 04 */}
      <div className={style.card}>
        <div className={style.card__icon}>
             <FaShieldAlt />
        </div>
        <div className={style.card__details}>
            <h2 className={style["card__details-title"]}>Communicate directly with Gruntwork engineers in Slack</h2>
            <p className={style["card__details-desc"]}>
                We create a shared Slack channel so you can chat with Gruntwork
                engineers from your own Slack account. Message us any time with
                questions relating to your Gruntwork infrastructure.
            </p>
        </div>
      </div>
      {/* Card 05 */}
      <div className={style.card}>
        <div className={style.card__icon}>
             <FaInfoCircle />
        </div>
        <div className={style.card__details}>
            <h2 className={style["card__details-title"]}>Communicate directly with Gruntwork engineers in Slack</h2>
            <p className={style["card__details-desc"]}>
                We create a shared Slack channel so you can chat with Gruntwork
                engineers from your own Slack account. Message us any time with
                questions relating to your Gruntwork infrastructure.
            </p>
        </div>
      </div>
    </div>
  );
};

export default SupportBenefits;
