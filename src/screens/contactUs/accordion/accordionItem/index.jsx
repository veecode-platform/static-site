import React, { useRef } from "react";
import style from "./_AccordionItem.module.scss";
import classNames from "classnames";
import { BsPlus ,BsDash} from "react-icons/bs";

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
            {active ? <BsDash /> : <BsPlus />}
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