import Link from "next/link";
import React from "react";
import { Button } from "../../../components";
import style from "./plansDetails.module.scss";

const PlansDetails = ({
  title,
  subtitle,
  link,
  label,
  emphasis,
  headline,
  text,
  buttonLabel,
  children,
}) => {
  return (
    <div className={style.planTable}>
      <div className={style.planTable__title}>
        <h2 className={style["planTable__title-title"]}>{title}</h2>
      </div>
      <div className={style.planTable__subtitle}>
        <p className={style["planTable__subtitle-subtitle"]}>{subtitle}</p>
      </div>
      <div className={style.planTable__button}>
        <div className={style["planTable__button-label"]}>
          {label && <p>{label}</p>}
          {<strong>{emphasis}</strong>}
          {text && <p>{text}</p>}
          {headline && <h2>{headline}</h2>}
        </div>
        <Link href={link}>
          <a>
            <Button alt>{buttonLabel}</Button>
          </a>
        </Link>
      </div>
      <ul className={style.planTable__list}>{children}</ul>
    </div>
  );
};

export default PlansDetails;
