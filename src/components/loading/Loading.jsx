import React from 'react';
import style from '../../../styles/Loading.module.scss';

const LoadingAnimation = '/assets/icons/loading.gif';

const Loading = () => {
  return (
    <div className={style.loading}>
        <img
            src={LoadingAnimation}
            alt="Loading animation"
            className={style.loading__animation}
        />
    </div>
  )
}

export default Loading