import React from "react";
import style from "./LoadingStyles.module.scss";

const LoadingAnimation = "/assets/icons/loading.gif";

export const Loading = () => {
  return (
    <div className={style.loading}>
      <img
        src={LoadingAnimation}
        alt="Loading animation"
        className={style.loading__animation}
      />
    </div>
  );
};
