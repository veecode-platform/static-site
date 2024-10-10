"use client";

import { Button, DefaultPage, NavigationLink } from "@/components";
import style from "./SuccessStyles.module.scss";
import { useTranslations } from "next-intl";
import { SuccessProps } from "./types";

const SuccessImage = "/assets/icons/success.png";

export const Success: React.FC<SuccessProps> = ({ variant }) => {
  const t = useTranslations("feedback");

  return (
    <DefaultPage noBack showOptions>
      <article className={style.content}>
        <div className={style.content__image}>
          <img src={SuccessImage} alt="Success Animation" />
        </div>
        <div className={style.content__details}>
          {variant === "payment" && (
            <>
              {t.rich("payment.success", {
                p: (chunks) => <p>{chunks}</p>,
              })}
            </>
          )}
          {variant === "contact" && (
            <>
              {t.rich("contact.success", {
                p: (chunks) => <p>{chunks}</p>,
              })}
            </>
          )}
        </div>
        <div className={style.content__buttonWrapper}>
          <NavigationLink href="/">
            <Button>{t("buttonLabelSuccess")}</Button>
          </NavigationLink>
        </div>
      </article>
    </DefaultPage>
  );
};
