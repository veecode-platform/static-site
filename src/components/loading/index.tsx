import React from 'react';
import Image from 'next/image';
import style from './LoadingStyles.module.scss';

const LoadingAnimation = `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/icons/loading.gif`;

export const Loading = () => {
  return (
    <div className={style.loading}>
      <Image
        src={LoadingAnimation}
        priority
        alt="Loading animation"
        width={200}
        height={62}
        style={{
          width: '100%',
          height: 'auto',
        }}
        unoptimized
        className={style.loading__animation}
      />   
    </div>
  );
};
