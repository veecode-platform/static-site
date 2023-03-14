/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { gtagEvents } from '../../../../../utils/gtag';
import { Button } from '../../../../components';
import style from './_card.module.scss';
import { useTranslation } from 'react-i18next';

const Card = ({ image, title, desc, buttonLabel, link ,tag}) => {
  const { t } = useTranslation();

  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style.card__image} />
      <h3 className={style.card__title}>{title}</h3>
      <p className={style.card__desc}>{t(desc)}</p>
      <div className={style.card__buttonWrapper}>
        <Link href={link}>
          <a target="_blank">
            <Button 
             alt
             handleClick={()=>gtagEvents(tag)}
             >
              {buttonLabel}
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card