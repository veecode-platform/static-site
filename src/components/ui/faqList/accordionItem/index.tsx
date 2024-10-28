import React, { useRef } from "react";
import style from "./AccordionItem.module.scss";
import classNames from "classnames";
import { BsPlus, BsDash } from "react-icons/bs";
import { AcordionItemProps } from "./types";

export const AccordionItem: React.FC<AcordionItemProps> = ({
  item,
  onToggle,
  active,
}) => {
  const { title, answer } = item;
  const contentElement = useRef();

  return (
    <li
      onClick={() => onToggle(item.id)}
      className={classNames({
        [style.item]: true,
        [style.item__active]: active,
      })}
    >
      <span className={style.item__title}>
        <p>{title}</p>
        <button aria-label="toggle-button" onClick={() => onToggle(item.id)}>
          {active ? <BsDash /> : <BsPlus />}
        </button>
      </span>
      <span
        className={classNames({
          [style.cardAnswer]: true,
          [style.cardAnswer__reset]: !active,
          [style.show]: active,
          [style.hide]: !active,
        })}
      >
        {answer}
      </span>
    </li>
  );
};
