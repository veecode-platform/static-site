import style from './Card.module.scss'

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
    return (
        <div className={style.card}>
            <div className={style.card__icon}>
                <img src={image} alt={title} className={style["card__icon-image"]}/>
            </div>
            <div className={style.card__title}>
                <h2>{title}</h2>
            </div>
            <ul className={style.card__options}>
                <li className={style["card__options-item"]}>
                    <h3>{titleItem1}</h3>
                    <p>{descItem1}</p>
                </li>
                <li className={style["card__options-item"]}>
                    <h3>{titleItem2}</h3>
                    <p>{descItem2}</p>
                </li>
                <li className={style["card__options-item"]}>
                    <h3>{titleItem3}</h3>
                    <p>{descItem3}</p>
                </li>
            </ul>
        </div>
    );
};

export default Card;