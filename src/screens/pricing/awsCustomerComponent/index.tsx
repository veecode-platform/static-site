import { useTranslations } from "next-intl";
import style from "./awsCustomerComponent.module.scss";
import CardAwsContent from "./cardAwsContent";

const AwsMarketPlaceLogo = "/assets/pricing/aws-consumer/aws-marketplace.png";
const AwsAmi = "/assets/pricing/aws-consumer/ami.png";
const LauchWorkshopImg = "/assets/pricing/aws-consumer/lauch-workshop.png";
const FastTrackImg = "/assets/pricing/aws-consumer/fast-track.png";

const AwsCustomerComponent = () => {
  const t = useTranslations("pricing.awsCostumer");

  return (
    <div className={style.content}>
      <div className={style.content__titleWrapper}>
        <img
          src={AwsMarketPlaceLogo}
          alt=""
          className={style.awsMarketplaceLogo}
        />
        <h3 className={style.awsTitle}>{t("title")}</h3>
      </div>
      <div className={style.content__awsSubtitle}>
        <p>{t("description")}</p>
      </div>

      <article className={style.content__awsCards}>
        {/* AMI */}
        <CardAwsContent
          title={t("cards.card-01.title")}
          image={AwsAmi}
          bodyText={t("cards.card-01.description")}
          footerText={t("cards.card-01.footer")}
          link="https://aws.amazon.com/marketplace/pp/prodview-aybwnwq4fx2ts?sr=0-1&ref_=beagle&applicationId=AWSMPContessa"
          buttonLabel1={t("cards.card-01.buttonLabel1")}
          buttonLabel2={t("cards.card-01.buttonLabel2")}
        />
        {/* LAUCH WORKSHOP */}
        <CardAwsContent
          title={t("cards.card-02.title")}
          image={LauchWorkshopImg}
          bodyText={t("cards.card-02.description")}
          footerText={t("cards.card-02.footer")}
          link="https://aws.amazon.com/marketplace/pp/prodview-7pqhop2z4kkx2?sr=0-4&ref_=beagle&applicationId=AWSMPContessa"
          buttonLabel1={t("cards.card-02.buttonLabel1")}
          buttonLabel2={t("cards.card-02.buttonLabel2")}
        />
        {/* FAST TRACK */}
        <CardAwsContent
          title={t("cards.card-03.title")}
          image={FastTrackImg}
          bodyText={t("cards.card-03.description")}
          footerText={t("cards.card-03.footer")}
          link="https://aws.amazon.com/marketplace/pp/prodview-bckwzbve7ftgw?sr=0-3&ref_=beagle&applicationId=AWSMPContessa"
          buttonLabel1={t("cards.card-03.buttonLabel1")}
          buttonLabel2={t("cards.card-03.buttonLabel2")}
        />
      </article>
    </div>
  );
};

export default AwsCustomerComponent;
