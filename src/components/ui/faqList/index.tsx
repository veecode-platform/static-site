'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '../../container';
import { AccordionItem } from './accordionItem';
import style from './FaqListStyles.module.scss';
import { IFaq } from './types';

export const FaqList = () => {
  const t = useTranslations('faq.items');
  const [clicked, setClicked] = React.useState<number>(0);

  const handleToggle = (id: number) => {
    if (clicked === id) {
      return setClicked(0);
    }
    setClicked(id);
  };

  const items: IFaq[] = [
    {
      id: 1,
      title: t('ask1.title'),
      answer: t('ask1.answer'),
    },
    {
      id: 2,
      title: t('ask2.title'),
      answer: t('ask2.answer'),
    },
    {
      id: 3,
      title: t('ask3.title'),
      answer: t('ask3.answer'),
    },
    {
      id: 4,
      title: t('ask4.title'),
      answer: t('ask4.answer'),
    },
    {
      id: 5,
      title: t('ask5.title'),
      answer: t('ask5.answer'),
    },
    {
      id: 6,
      title: t('ask6.title'),
      answer: t('ask6.answer'),
    },
    {
      id: 7,
      title: t('ask7.title'),
      answer: t('ask7.answer'),
    },
    {
      id: 8,
      title: t('ask8.title'),
      answer: t('ask8.answer'),
    },
    {
      id: 9,
      title: t('ask9.title'),
      answer: t('ask9.answer'),
    },
    {
      id: 10,
      title: t('ask10.title'),
      answer: t('ask10.answer'),
    },
    {
      id: 11,
      title: t('ask11.title'),
      answer: t('ask11.answer'),
    },
  ];

  return (
    <section
      className={style.wrapper}
      onBlur={() => {
        setClicked(0);
      }}
    >
      <Container>
        <article className={style.content}>
          <ul className={style.content__faqList}>
            {items.map(item => (
              <AccordionItem
                key={item.id}
                item={item}
                onToggle={() => {
                  handleToggle(item.id);
                }}
                active={clicked === item.id}
              />
            ))}
          </ul>
        </article>
      </Container>
    </section>
  );
};
