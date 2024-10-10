import React from "react";
import style from "./SwitchStyles.module.scss";
import { SwitchProps } from "./types";
import { useTranslations } from "next-intl";

export const Switch: React.FC<SwitchProps> = ({
  label,
  isOn,
  handleToggle,
}) => {
  const t = useTranslations("checkout");

  return (
    <div className={style.wrapper}>
      <div className={style.switchButton}>
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          id={label}
        />
        <label htmlFor={label}>
          <strong>{isOn ? t("switch.annual") : t("switch.monthly")}</strong>
        </label>
      </div>
    </div>
  );
};
