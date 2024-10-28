import React from "react";
import { Button, NavigationLink } from "@/components";
import style from "./plansDetails.module.scss";
import { PlansDetailsProps } from "./types";

export const PlansDetails: React.FC<PlansDetailsProps> = ({
  title,
  subtitle,
  freePlan,
  label,
  buttonLabel,
  children,
}) => {
  return (
    <div className={style.planTable}>
      <div className={style.planTable__title}>
        <h2 className={style["planTable__title-title"]}>{title}</h2>
      </div>
      <div className={style.planTable__subtitle}>
        <p className={style["planTable__subtitle-subtitle"]}>{subtitle}</p>
      </div>
      <div className={style.planTable__button}>
        <div className={style["planTable__button-label"]}>
          {label && <p>{label}</p>}
        </div>
        <NavigationLink
          href={freePlan ? "/free-plan?plan=free" : "/validate?plan=standard"}
        >
          <Button alt>{buttonLabel}</Button>
        </NavigationLink>
      </div>
      <ul className={style.planTable__list}>{children}</ul>
    </div>
  );
};
