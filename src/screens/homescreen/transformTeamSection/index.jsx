/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './TransformTeamSection.module.scss';
import { Button } from '../../../components';
import Link from 'next/link';

const ComputerImg = '/assets/home/notebook.png'

export const TransformTeamSection = () => {

  const { t } = useTranslation();

  return (
    <section className={style.container}>
      <section className={style.container__content}>
        <div className={style.textContent}>
          <div className={style.textContent__title}>
            <h2
              dangerouslySetInnerHTML={{
                __html: t("home-first-section-title"),
              }}
            />
          </div>
          <div className={style.textContent__description}>
            <p
              dangerouslySetInnerHTML={{ __html: t("home-first-section-body") }}
            />
          </div>
          <div className={style.textContent__buttonGroup}>
            <Link href="http://docs.platform.vee.codes/devportal/installation-guide/VKDR/Intro" passHref>
              <a target="_blank">
                <Button>{t("home-first-section-label1")}</Button>
              </a>
            </Link>
            {/*<Link href="/compare-plans">
              <a>
                <Button>{t("home-first-section-label2")}</Button>
              </a>
            </Link>*/}
          </div>
        </div>
        <div className={style.imageWrapper}>
          <img src={ComputerImg} alt="Computer image" className={style.image} />
        </div>
      </section>
    </section>
  );
}