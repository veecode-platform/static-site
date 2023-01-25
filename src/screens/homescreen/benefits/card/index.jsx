import style from './Card.module.scss'
import { useTranslation } from 'react-i18next';

const Card = ({
    image,
    title,
    titleItem1,
    descItem1,
    titleItem2,
    descItem2,
    titleItem3,
    descItem3,
}) => {
    const { t } = useTranslation();

    return (
        <div className={style.card}>
            <div className={style.card__title}>
                <h2>{t(title)}</h2>
            </div>
            <ul className={style.card__options}>
                <li className={style["card__options-item"]}>
                    <h3>{t(titleItem1)}</h3>
                    <p>{t(descItem1)}</p>
                </li>
                <li className={style["card__options-item"]}>
                    <h3>{t(titleItem2)}</h3>
                    <p>{t(descItem2)}</p>
                </li>
                <li className={style["card__options-item"]}>
                    <h3>{t(titleItem3)}</h3>
                    <p>{t(descItem3)}</p>
                </li>
            </ul>
        </div>
    );
};

export default Card;