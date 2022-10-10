import React, { useRef } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import style from "./_AccordionItem.module.scss";
import classNames from "classnames";

const AccordionItem = ({item , onToggle, active}) => {
  
  const {title, desc} = item;
  const contentElement = useRef();

  return (
    <li 
        onClick={onToggle}
        className={classNames({
          [style.item] : true ,
          [style.item__active] : active
        })}
        >
      <span className={style.item__title}>
        {title}
        <button onClick={onToggle}>
            {active ? <FaAngleDown /> : <FaAngleRight />}
        </button>
      </span>
      <span
        className={
          classNames({
            [style.cardAnswer] : true,
            [style.cardAnswer__reset] : !active,
            [style.show] : active ,
            [style.hide] : !active,
          })
        }>
        {desc}
      </span>
    </li>
  );
};

export default AccordionItem;