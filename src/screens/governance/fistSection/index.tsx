import { FirstSectionProps } from "./types";
import style from "./FirstSectionStyles.module.scss";

export const FirstSection: React.FC<FirstSectionProps> = ({
  title,
  description,
}) => {
  return (
    <section className={style.firstSection}>
      <div className={style.firstSection__content}>
        <h2 className={style["firstSection__content-title"]}>{title}</h2>
        <p className={style["firstSection__content-subtitle"]}>{description}</p>
      </div>
    </section>
  );
};
