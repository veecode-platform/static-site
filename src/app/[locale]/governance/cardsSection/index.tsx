import Image from 'next/image';
import style from './cardsSectionStyles.module.scss';
import { CardsSectionProps } from './types';

const Icon1 = `/assets/governance/icon1.svg`;
const Icon2 = `/assets/governance/icon2.svg`;
const Icon3 = `/assets/governance/icon3.svg`;

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
          <Image
            src={Icon1}
            priority
            alt=""
            width={200}
            height={62}
            style={{
              width: '100%',
              height: 'auto',
            }}
            unoptimized
            className={style.cardIcon}
          />
        </div>
        <div className={style.cardGreen}></div>
      </article>
      <article className={style.gridCardsContinuos}>
        <div className={style.cardGreen}></div>
        <div className={style.cardGrey}>
          <Image
            src={Icon2}
            priority
            alt=""
            width={200}
            height={62}
            style={{
              width: '100%',
              height: 'auto',
            }}
            unoptimized
            className={style.cardIcon}
          />
        </div>
        <div className={style.cardBlack}>
          <p className={style.cardText}>{card3}</p>
        </div>
        <div className={style.cardGreen}>
          <Image
            src={Icon3}
            priority
            alt=""
            width={200}
            height={62}
            style={{
              width: '100%',
              height: 'auto',
            }}
            unoptimized
            className={style.cardIcon}
          />
        </div>
        <div className={style.cardBlack}></div>
      </article>

      <article className={style.cardsMobile}>
        <div className={style.card}>
          <Image
            src={Icon1}
            priority
            alt=""
            width={200}
            height={62}
            style={{
              width: '100%',
              height: 'auto',
            }}
            unoptimized
            className={style.cardIcon}
          />
          <div className={style.card__label}>
            <p>{card1}</p>
          </div>
        </div>
        <div className={style.card}>
          <Image
            src={Icon2}
            priority
            alt=""
            width={200}
            height={62}
            style={{
              width: '100%',
              height: 'auto',
            }}
            unoptimized
            className={style.cardIcon}
          />
          <div className={style.card__label}>
            <p>{card2}</p>
          </div>
        </div>
        <div className={style.card}>
          <Image
            src={Icon3}
            priority
            alt=""
            width={200}
            height={62}
            style={{
              width: '100%',
              height: 'auto',
            }}
            unoptimized
            className={style.cardIcon}
          />
          <div className={style.card__label}>
            <p>{card3}</p>
          </div>
        </div>
      </article>
    </section>
  );
};
