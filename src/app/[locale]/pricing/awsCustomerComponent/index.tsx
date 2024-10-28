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
        <img
          src={AwsMarketPlaceLogo}
          alt=""
          className={style.awsMarketplaceLogo}
        />
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
