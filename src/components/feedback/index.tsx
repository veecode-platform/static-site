import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineError } from 'react-icons/md';
import style from './FeedBackStyles.module.scss';
import { FeedBackProps } from './types';

export const Feedback: React.FC<FeedBackProps> = ({
  show,
  variant,
  message,
}) => {
  return (
    <div
      className={`${style.root} ${show ? style.show : style.hide} ${style[variant!]}`}
    >
      {variant === 'success' && <FaCheckCircle />}
      {variant === 'error' && <MdOutlineError />}
      <p>{message}</p>
    </div>
  );
};
