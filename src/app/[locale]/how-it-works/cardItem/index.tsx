import style from "./CardItem.module.scss";
import { CardItemProps } from "./types";

export const CardItem: React.FC<CardItemProps> = ({
  image,
  title,
  children,
}) => {
  return (
    <div className={style.cardItem}>
      <div className={style.cardItem__image}>
        <img src={image} alt={title} />
      </div>
      <div className={style.cardItem__details}>
        <h2 className={style["cardItem__details-title"]}>{title}</h2>
        <div className={style["cardItem__details-text"]}>{children}</div>
      </div>
    </div>
  );
};
