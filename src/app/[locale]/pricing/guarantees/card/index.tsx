/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import style from './Card.module.scss';
import { GuaranteeCardProps } from './types';

export const Card: React.FC<GuaranteeCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <Image
          src={image}
          alt={title}
          width={160}
          height={158}
          unoptimized
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <h3 className={style.card__title}>{title}</h3>
      <p className={style.card__desc}>{description}</p>
    </div>
  );
};
