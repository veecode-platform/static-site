import React from "react";
import style from '../../../styles/_Switch.module.scss';

const SwitchComponent = ({label, isOn, handleToggle}) => {
    return (
      <div className={style.wrapper}>
        <div className={style["wraper-switch"]}>
            <input
                checked={isOn}
                onChange={handleToggle}
                className={style["switch-checkbox"]}
                id={label}
                type="checkbox"
            />
            <label
                className={style["switch-label"]}
                htmlFor={label}
            >
                <span className={style[`switch-button`]}/>
            </label>
            <span>{isOn ? "Annual" : "Monthly"}</span>
        </div>
      </div>
    );
  };
  
  export default SwitchComponent;
    
 

