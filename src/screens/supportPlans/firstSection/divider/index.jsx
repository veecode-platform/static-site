import React from 'react';
import style from './Divider.module.scss';

const Divider = () => {
  return (
    <div className={style.divider}>
      <svg
        className={style.svg}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1200 120L0 16.48V0h1200v120z" />
      </svg>
    </div>
  )
}

export default Divider