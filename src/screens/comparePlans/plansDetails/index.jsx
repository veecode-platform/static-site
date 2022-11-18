import Link from 'next/link';
import React from 'react';
import { Button } from '../../../components';
import style from './plansDetails.module.scss';

const PlansDetails = ({ title, subtitle, link, label,children }) => {
  return (
    <div className={style.planTable}>
      <div
        className={style.planTable__title}>
          <h2 
           className={style["planTable__title-title"]}
           >
            {title}
          </h2>
      </div>
      <div className={style.planTable__subtitle}>
        <p 
         className={style["planTable__subtitle-subtitle"]}
         >
          {subtitle}
        </p>
      </div>
      <div className={style.planTable__button}>
        <Link href={link}>
          <a>
            <Button alt>
              {label}
            </Button>
          </a>
        </Link>
      </div>
      <ul className={style.planTable__list}>
        {children}
      </ul>
    </div>
  )
}

export default PlansDetails