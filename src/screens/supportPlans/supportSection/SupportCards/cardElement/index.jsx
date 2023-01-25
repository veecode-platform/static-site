import style from "./CardElement.module.scss";
import { useTranslation } from 'react-i18next';

const CardElement = ({ title, items }) => {
  const { t } = useTranslation();

    return (
        <div className={style.card}>
            <div className={style.card__title}>
                <h2>{t(title)}</h2>
            </div>
            <ul className={style.card__options}>
                {items.map((item, index) => {
                    return (
                        <li key={index} className={style["card__options-item"]}>
                            <h3>{t(item)}</h3>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CardElement;