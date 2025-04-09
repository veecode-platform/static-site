import style from './SupportBenefits.module.scss';
import { SupportCard } from './supportCard';
import { SupportBenefitsProps } from './types';

export const SupportBenefits: React.FC<SupportBenefitsProps> = ({
  title,
  cards,
}) => {
  return (
    <div className={style.cards}>
      <h2 className={style.title}>{title}</h2>
      {cards.map(card => (
        <SupportCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.desc}
        />
      ))}
    </div>
  );
};
