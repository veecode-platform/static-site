import React from "react";
import style from '../../../styles/Switch.module.scss';

const SwitchComponent = ({label, isOn, handleToggle}) => {
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
            <strong>{isOn ? "Annual" : "Monthly"}</strong></label>
        </div>

      </div>
    );
  };
  
  export default SwitchComponent;
    
 

