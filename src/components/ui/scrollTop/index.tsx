"use client";

import React from "react";
import style from "./ScrollStyles.module.scss";
import { FaAngleUp } from "react-icons/fa";

//scroll function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ScrollTop = () => {
  const [visible, setVisible] = React.useState(false);

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
        arial-label="scroll-up"
      >
        <FaAngleUp />
      </button>
    </>
  );
};
