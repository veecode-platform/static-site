import style from './SupportCategories.module.scss';
import { SupportCategoriesProps } from './types';

export const SupportCategories: React.FC<SupportCategoriesProps> = ({
  title,
  desc,
}) => {
  return (
    <div className={style.card}>
      <h2 className={style.card__title}>{title}</h2>
      <p className={style.card__desc}>{desc}</p>
    </div>
  );
};
