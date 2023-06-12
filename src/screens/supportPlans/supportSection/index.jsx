/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Button } from '../../../components';
import SupportCards from './SupportCards';
import style from './SupportSection.module.scss';
import { useTranslation } from 'react-i18next';

const SupportSection = ({ title, img, data, buttonLabel, buttonLink }) => {
  const { t } = useTranslation();

    return (
        <section className={style.wrapper}>
            <div className={style.container}>
                <div className={style.title}>
                   <img
                        className={style.title__logo}
                        src={img}
                        alt={title}
                    />
                    <h2 className={style.title__text}> 
                    {title}<span>{t('support')}</span>
                    </h2>
                </div>
            </div>

            <article className={style.cards}>
                <SupportCards data={data} />
            </article>
            <div className={style.content__button}>
                <Link href={buttonLink} prefetch={false}>
                    <a>
                        <Button>{t(buttonLabel)}</Button>
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default SupportSection;