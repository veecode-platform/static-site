import style from "../../../styles/_Breadcrumb.module.scss";
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = ({ active }) => {
  return (
    <div className={style.breadcrumb}>
      <div className={style.breadcrumb__item}>
        <span className={active === 1 ? style.selected : ""}>1</span><p>Select Plan</p>
      </div>
      <div className={style.breadcrumb__divider}>
        <FaAngleRight />
      </div>
      <div className={style.breadcrumb__item}>
        <span className={active === 2 ? style.selected : ""}>2</span> <p>Validate</p>
      </div>
      <div className={style.breadcrumb__divider}>
        <FaAngleRight />
      </div>
      <div className={style.breadcrumb__item}>
        <span className={active === 3 ? style.selected : ""}>3</span> <p>Checkout</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
