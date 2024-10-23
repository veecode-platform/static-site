import style from "./Guarantees.module.scss";
import { Card } from "./card";
import { GuaranteesProps } from "./types";

export const Guarantees: React.FC<GuaranteesProps> = ({ details, cards }) => {
  return (
    <div className={style.container}>
      <div className={style.guaranteesWrapper}>
        <div className={style.guaranteesWrapper__text}>
          <p className={style["guaranteesWrapper__text-info"]}>{details}</p>
        </div>
        <div className={style.guaranteesWrapper__cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              image={card.icon}
              title={card.title}
              description={card.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
