/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components";
import style from "./SupportSection.module.scss";
import { useTranslation } from 'react-i18next';

const BgDesktop = "assets/home/bg3.webp";
const BgMobile = "assets/home/bgmobile2.webp";

const SupportSection = () => {
  const { t } = useTranslation();

  return (
    <section className={style.wrapper}>
      {/* Background */}
      <div className={style.wrapper__background}>
          <img
            src={BgDesktop}
            alt="background header - Desktop version"
            className={style["wrapper__background-desktop"]}
            />
          <img
              src={BgMobile}
              alt="background header - Mobile version"
              className={style["wrapper__background-mobile"]}
              />
      </div>
      <article className={style.content}>
        <div className={style.content__text}>
          <div className={style["content__text-title"]}>
            <h2>
              <span>{t('Unlock')}</span>
              <br />
              {t('your team&apos;s potential')}
            </h2>
          </div>
          <div className={style["content__text-desc"]}>
            <strong>{t('Benefits of VeeCode Platform support')}</strong>
            <ul className={style.list}>
              <li>{t('Direct assistance to your technical team.')}</li>
              <li>{t('Get the best technology support on hand.')}</li> 
              <li>{t('Service with established SLA.')}</li>
              <li>{t('Most affordable price on the market.')}</li>
              <li>{t('Solve all of your problems with Devops, IaC, Cloud, Microsservices and more.')}</li>
            </ul>
          </div>
          <div className={style["content__text-buttonWrapper"]}>
            <Link href="/compare-plans" prefetch={false}>
              <a>
                <Button>{t('Buy Now')}</Button>
              </a>
            </Link>
            {/* <Link href="/support" prefetch={false}>
              <a>
                <Button>Support</Button>
              </a>
            </Link> */}
          </div>
        </div>
      </article>
    </section>
  );
};

export default SupportSection;
