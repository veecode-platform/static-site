import style from "./cardsSectionStyles.module.scss";
import { CardsSectionProps } from "./types";

const Icon1 = "/assets/governance/icon1.svg";
const Icon2 = "/assets/governance/icon2.svg";
const Icon3 = "/assets/governance/icon3.svg";

export const CardsSection: React.FC<CardsSectionProps> = ({
  card1,
  card2,
  card3,
}) => {
  return (
    <section className={style.cards}>
      <article className={style.gridCards}>
        <div className={style.cardGreen}></div>
        <div className={style.cardBlack}>
          <p className={style.cardText}>{card1}</p>
        </div>
        <div className={style.cardBlack}>
          <p className={style.cardText}>{card2}</p>
        </div>
        <div className={style.cardGrey}>
          <img src={Icon1} alt="" className={style.cardIcon} />
        </div>
        <div className={style.cardGreen}></div>
      </article>
      <article className={style.gridCardsContinuos}>
        <div className={style.cardGreen}></div>
        <div className={style.cardGrey}>
          <img src={Icon2} alt="" className={style.cardIcon} />
        </div>
        <div className={style.cardBlack}>
          <p className={style.cardText}>{card3}</p>
        </div>
        <div className={style.cardGreen}>
          <img src={Icon3} alt="" className={style.cardIcon} />
        </div>
        <div className={style.cardBlack}></div>
      </article>

      <article className={style.cardsMobile}>
        <div className={style.card}>
          <img src={Icon1} alt="" className={style.card__icon} />
          <div className={style.card__label}>
            <p>{card1}</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={Icon2} alt="" className={style.card__icon} />
          <div className={style.card__label}>
            <p>{card2}</p>
          </div>
        </div>
        <div className={style.card}>
          <img src={Icon3} alt="" className={style.card__icon} />
          <div className={style.card__label}>
            <p>{card3}</p>
          </div>
        </div>
      </article>
    </section>
  );
};
