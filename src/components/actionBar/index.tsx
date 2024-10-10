"use client";

import style from "./ActionBarStyles.module.scss";
import { ActionBarProps } from "./types";
import { Button } from "../button";
import { ExternalLink, NavigationLink } from "../patterns";

export const ActionBar: React.FC<ActionBarProps> = ({
  title,
  variant,
  buttonLabel,
}) => {
  return (
    <div className={style.content}>
      <div className={style.content__title}>
        <h4>{title}</h4>
      </div>
      <div className={style.content__button}>
        {variant === "contact" && (
          <NavigationLink href="/contact-us">
            <Button>{buttonLabel}</Button>
          </NavigationLink>
        )}
        {variant === "docs" && (
          <Button>
            <ExternalLink
              href="https://docs.platform.vee.codes/"
              title={buttonLabel}
            />
          </Button>
        )}
      </div>
    </div>
  );
};
