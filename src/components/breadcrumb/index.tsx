"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { FaAngleRight } from "react-icons/fa";
import style from "./BreadcrumbStyles.module.scss";
import { BreadcrumbProps } from "./types";

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ active }) => {
  const t = useTranslations("pricing.comparePlans.breadcrumb");

  return (
    <div className={style.breadcrumb}>
      <div className={style.breadcrumb__item}>
        <span className={active === 1 ? style.selected : ""}>1</span>
        <p>{t("option1")}</p>
      </div>
      <div className={style.breadcrumb__divider}>
        <FaAngleRight />
      </div>
      <div className={style.breadcrumb__item}>
        <span className={active === 2 ? style.selected : ""}>2</span>
        <p>{t("option2")}</p>
      </div>
      <div className={style.breadcrumb__divider}>
        <FaAngleRight />
      </div>
      <div className={style.breadcrumb__item}>
        <span className={active === 3 ? style.selected : ""}>3</span>
        <p>{t("option3")}</p>
      </div>
    </div>
  );
};
