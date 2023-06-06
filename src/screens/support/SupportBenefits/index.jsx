import style from "./SupportBenefits.module.scss";
import { FaLayerGroup, FaInfoCircle, FaUsers, FaMedal, FaWrench } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const SupportBenefits = () => {

  const { t } = useTranslation();

  return (
    <div className={style.cards}>
      <h2 className={style.title}>{t("support-benefits-title")}</h2>
      {/* Card 01 */}
      <div className={style.card}>
        <div className={style.card__icon}>
        <FaInfoCircle />
        </div>
        <div className={style.card__details}>
          <h2 className={style["card__details-title"]}>{t("support-benefits-topic1")}</h2>
          <p className={style["card__details-desc"]}>
            {t("support-benefits-topic1.1")}
          </p>
        </div>
      </div>
      {/* Card 02 */}
      <div className={style.card}>
        <div className={style.card__icon}>
          <FaLayerGroup />
        </div>
        <div className={style.card__details}>
          <h2 className={style["card__details-title"]}>{t("support-benefits-topic2")}</h2>
          <p className={style["card__details-desc"]}>
            {t("support-benefits-topic2.1")}
          </p>
        </div>
      </div>
      {/* Card 03 */}
      <div className={style.card}>
        <div className={style.card__icon}>
        <FaWrench />
        </div>
        <div className={style.card__details}>
          <h2 className={style["card__details-title"]}>{t("support-benefits-topic3")}</h2>
          <p className={style["card__details-desc"]}>
            {t("support-benefits-topic3.1")}
          </p>
        </div>
      </div>
      {/* Card 04 */}
      <div className={style.card}>
        <div className={style.card__icon}>
          <FaUsers />
        </div>
        <div className={style.card__details}>
          <h2 className={style["card__details-title"]}>
            {t("support-benefits-topic4")}
          </h2>
          <p className={style["card__details-desc"]}>
            {t("support-benefits-topic4.1")}
            {" "}<strong>{t("support-benefits-topic4.2")}</strong> {t("support-benefits-topic4.3")}
          </p>
        </div>
      </div>
      {/* Card 05 */}
      <div className={style.card}>
        <div className={style.card__icon}>
          <FaMedal />
        </div>
        <div className={style.card__details}>
          <h2 className={style["card__details-title"]}>
            {t("support-benefits-topic5")}
          </h2>
          <p className={style["card__details-desc"]}>
            {t("support-benefits-topic5.1")}
            <br />{t("support-benefits-topic-option")} <strong>{t("support-benefits-bold1")}</strong> {t("support-benefits-topic5.2")}
            <br />{t("support-benefits-topic-option")} <strong>{t("support-benefits-bold2")}</strong> {t("support-benefits-topic5.3")}
            <br />
            <strong>
              {t("support-benefits-topic5.4")}
            </strong> <br/>
              {t("support-benefits-topic5.5")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportBenefits;
