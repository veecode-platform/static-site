/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Button } from '../../../../components';
import style from './_card.module.scss';

const Card = ({ image, title, desc, buttonLabel, link }) => {
  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style.card__image} />
      <h3 className={style.card__title}>{title}</h3>
      <p className={style.card__desc}>{desc}</p>
      <div className={style.card__buttonWrapper}>
        <Link href={link}>
          <a target="_blank">
            <Button alt>{buttonLabel}</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card