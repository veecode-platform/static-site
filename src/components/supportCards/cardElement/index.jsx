import style from "./CardElement.module.scss";

const CardElement = ({ title, items }) => {
    return (
        <div className={style.card}>
            <div className={style.card__title}>
                <h2>{title}</h2>
            </div>
            <ul className={style.card__options}>
                {items.map((item, index) => {
                    return (
                        <li key={index} className={style["card__options-item"]}>
                            <h3>{item}</h3>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CardElement;
