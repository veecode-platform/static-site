import { FaCheck } from "react-icons/fa";
import style from "./ListDetails.module.scss";
import { useTranslations } from "next-intl";
import { ListDetailsProps } from "./types";

export const ListDetails: React.FC<ListDetailsProps> = ({ title, items }) => {
  const t = useTranslations("supportOptions.body");

  return (
    <article className={style.wrapper}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.details}>
        <ul className={style.details__list}>
          {items.map((item) => (
            <li className={style["details__list-item"]} key={item.id}>
              <span>
                <FaCheck />
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
