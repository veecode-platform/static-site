import React from "react";
import style from '../../../styles/Switch.module.scss';
import { useTranslation } from "react-i18next";

const SwitchComponent = ({ label, isOn, handleToggle }) => {

  const { t } = useTranslation();

  return (
    <div className={style.wrapper}>
      <div className={style.switchButton}>
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          id={label}
        />
        <label
          htmlFor={label}
        >
          <strong>{isOn ? t("annual") : t("monthly")}</strong></label>
      </div>

    </div>
  );
};

export default SwitchComponent;



