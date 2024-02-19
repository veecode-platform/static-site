import React from 'react'
import { useTranslation } from 'react-i18next';
import style from './awsCustomerComponent.module.scss';
import CardAwsContent from './cardAwsContent';

const AwsMarketPlaceLogo = "/assets/pricing/aws-consumer/aws-marketplace.png";
const LauchWorkshopImg = "/assets/pricing/aws-consumer/lauch-workshop.png";
const FastTrackImg = "/assets/pricing/aws-consumer/fast-track.png"

const AwsCustomerComponent = () => {

  const { t } = useTranslation();

  return (
    <div className={style.content}>
      <div className={style.content__titleWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={AwsMarketPlaceLogo}
          alt=""
          className={style.awsMarketplaceLogo}
        />
        <h3 className={style.awsTitle}>{t("aws-customer-title")}</h3>
      </div>
      <div className={style.content__awsSubtitle}>
        <p>{t("aws-customer-subtitle")}</p>
      </div>

      <article className={style.content__awsCards}>
        <CardAwsContent
          image={LauchWorkshopImg}
          bodyText={t("aws-customer-card1")}
          link="https://aws.amazon.com/marketplace/pp/prodview-7pqhop2z4kkx2?sr=0-4&ref_=beagle&applicationId=AWSMPContessa"
        />

        <CardAwsContent
          image={FastTrackImg}
          bodyText={t("aws-customer-card2")}
          link="https://aws.amazon.com/marketplace/pp/prodview-bckwzbve7ftgw?sr=0-3&ref_=beagle&applicationId=AWSMPContessa"
        />
      </article>
    </div>
  );
}

export default AwsCustomerComponent