import React from 'react';
import  CardElement from './cardElement'; 
import style from './SupportCards.module.scss';
import { useTranslation } from 'react-i18next';

const SupportCards = ({data}) => {
  const { t } = useTranslation();

  return (
    <article className={style.content}>
    {data.map((item) => (
      <CardElement 
        key={item.id}
        title={t(item.title)}
        items={item.items} />
    ))}
  </article>
  )
}

export default SupportCards;