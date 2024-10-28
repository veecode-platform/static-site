/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Card.module.scss";
import { GuaranteeCardProps } from "./types";

export const Card: React.FC<GuaranteeCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style.card__image} />
      <h3 className={style.card__title}>{title}</h3>
      <p className={style.card__desc}>{description}</p>
    </div>
  );
};
