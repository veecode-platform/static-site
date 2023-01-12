import React from 'react';
import style from './Divider.module.scss';

const Divider = () => {
  return (
    <svg
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    className={style.divider}
  >
    <path d="M1200 120L0 16.48V0h1200v120z" />
  </svg>
  )
}

export default Divider