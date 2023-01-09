import React from 'react';
import  CardElement from './cardElement'; 
import style from '../../../styles/SupportCards.module.scss';

const SupportCards = ({data}) => {
  return (
    <article className={style.content}>
    {data.map((item) => (
      <CardElement 
        key={item.id}
        title={item.title}
        items={item.items} />
    ))}
  </article>
  )
}

export default SupportCards;