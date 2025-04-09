import style from './PricingSection.module.scss';
import { PricingSectionProps } from './types';

export const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  desc,
}) => {
  return (
    <article className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.content__title}>{title}</h2>
        <p className={style.content__desc}>{desc}</p>
      </div>
    </article>
  );
};
