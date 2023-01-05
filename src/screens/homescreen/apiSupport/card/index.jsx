import style from './Card.module.scss'

const Card = ({
    title,
    items,
}) => {
    let list =[];
    items.forEach((item, index) =>{
        list.push(<li key={index} className={style["card__options-item"]}><h3>{item}</h3></li>);
    }) 
    return (
        <div className={style.card}>
            <div className={style.card__title}>
                <h2>{title}</h2>
            </div>
            <ul className={style.card__options}>
                {list}
            </ul>
        </div>
    );
};

export default Card;