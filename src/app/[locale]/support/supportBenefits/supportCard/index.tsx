import style from './SupportCardStyles.module.scss';
import { SupportCardProps } from './types';

export const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={style.card}>
      <div className={style.card__icon}>{icon}</div>
      <div className={style.card__details}>
        <h2 className={style['card__details-title']}>{title}</h2>
        <p className={style['card__details-desc']}>{description}</p>
      </div>
    </div>
  );
};
