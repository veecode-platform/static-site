/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from './Cards.module.scss';

const Cards = ({title,desc,image}) => {
  return (
    <div className={style.card}>
        <img 
         src={image}
         alt={title}
         className={style.card__image}
         />
        <h3
         className={style.card__title}>
        {title}
        </h3>
        <p 
         className={style.card__desc}
         >
        {desc}
        </p>
    </div>
  )
}

export default Cards