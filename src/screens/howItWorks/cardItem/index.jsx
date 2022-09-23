import React from 'react'
import style from './CardItem.module.scss'

const CardItem = ({image, title, text1, text2}) => {
    return (
        <div className={style.cardItem}>
            <div className={style.cardItem__image}>
                <img src={image} alt={title} />
            </div>
            <div className={style.cardItem__details}>
                <h2 className={style["cardItem__details-title"]}>{title}</h2>
                <p className={style["cardItem__details-text"]}>
                    {text1}
                </p>
                <p className={style["cardItem__details-text"]}>
                    {text2}
                </p>
            </div>
        </div>
    )
}

export default CardItem