import Image from "next/image";
import style from "./awsCustomerComponent.module.scss";
import CardAwsContent from "./cardAwsContent";
import { cardAwsContentProps } from "./types";

const AwsMarketPlaceLogo = "/assets/pricing/aws-consumer/aws-marketplace.png";

const AwsCustomerComponent: React.FC<cardAwsContentProps> = ({
  title,
  description,
  cards,
}) => {
  return (
    <div className={style.content}>
      <div className={style.content__titleWrapper}>
        <div className={style.awsMarketplaceLogo}>
          <Image
            src={AwsMarketPlaceLogo}
            alt=""
            width={320}
            height={111}
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <h3 className={style.awsTitle}>{title}</h3>
      </div>
      <div className={style.content__awsSubtitle}>
        <p>{description}</p>
      </div>

      <article className={style.content__awsCards}>
        {cards.map((card) => (
          <CardAwsContent
            key={card.id}
            title={card.title}
            image={card.icon}
            bodyText={card.desc}
            footerText={card.info}
            link={card.link}
            linkLabel={card.linkLabel}
            buttonLabel1={card.buttonLabel1}
            buttonLabel2={card.buttonLabel2}
          />
        ))}
      </article>
    </div>
  );
};

export default AwsCustomerComponent;
