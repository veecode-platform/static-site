import Image from 'next/image';
import style from './CardItem.module.scss';
import { CardItemProps } from './types';

export const CardItem: React.FC<CardItemProps> = ({
  image,
  title,
  children,
}) => {
  return (
    <div className={style.cardItem}>
      <div className={style.cardItem__image}>
        <Image
          src={image}
          alt={title}
          width={200}
          height={62}
          style={{
            width: '100%',
            height: 'auto',
          }}
          unoptimized
          className={style['cardItem__image-img']}
        />
      </div>
      <div className={style.cardItem__details}>
        <h2 className={style['cardItem__details-title']}>{title}</h2>
        <div className={style['cardItem__details-text']}>{children}</div>
      </div>
    </div>
  );
};
