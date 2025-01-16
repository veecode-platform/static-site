import React from "react";
import { FeedBackProps } from "./types";
import style from "./FeedBackStyles.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";


export const Feedback : React.FC<FeedBackProps> = ({show, variant,message}) => {
    return (
          <div className={`${style.root} ${show ? style.show : style.hide} ${style[variant!]}`}>
            {variant === "success" && <FaCheckCircle />} 
            {variant === "error" && <MdOutlineError />}
            <p>{message}</p>
          </div>
    )
}