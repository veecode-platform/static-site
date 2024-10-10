import { FaCheck } from "react-icons/fa";
import style from "./ListDetails.module.scss";
import { useTranslations } from "next-intl";

export const ListDetails = () => {
  const t = useTranslations("supportOptions.body");

  return (
    <article className={style.wrapper}>
      <h3 className={style.title}>{t("title2")}</h3>
      <div className={style.details}>
        <ul className={style.details__list}>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option1")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option2")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option3")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option4")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option5")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option6")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option7")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option8")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option9")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option10")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option11")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option12")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option13")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option14")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option15")}
          </li>
          <li className={style["details__list-item"]}>
            <span>
              <FaCheck />
            </span>
            {t("benefits.option16")}
          </li>
        </ul>
      </div>
    </article>
  );
};
