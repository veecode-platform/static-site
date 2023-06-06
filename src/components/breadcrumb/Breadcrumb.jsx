import style from "../../../styles/Breadcrumb.module.scss";
import { FaAngleRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Breadcrumb = ({ active }) => {

  const { t } = useTranslation();

  return (
    <div className={style.breadcrumb}>
      <div className={style.breadcrumb__item}>
        <span className={active === 1 ? style.selected : ""}>1</span><p>{t("breadcrumb1")}</p>
      </div>
      <div className={style.breadcrumb__divider}>
        <FaAngleRight />
      </div>
      <div className={style.breadcrumb__item}>
        <span className={active === 2 ? style.selected : ""}>2</span> <p>{t("breadcrumb2")}</p>
      </div>
      <div className={style.breadcrumb__divider}>
        <FaAngleRight />
      </div>
      <div className={style.breadcrumb__item}>
        <span className={active === 3 ? style.selected : ""}>3</span> <p>{t("breadcrumb3")}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
