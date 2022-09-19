import style from "../../../styles/ScrollTop.module.scss";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

//scroll function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900) return setVisible(true);
    if (scrolled <= 900) return setVisible(false);
  };
  if (typeof window !== "undefined") {
     window.addEventListener("scroll", toggleVisible);
  }
  return (
    <>
      <button
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className={style.top}
      >
        <FaAngleUp />
      </button>
    </>
  );
};

export default ScrollTop;
