import { Button, DefaultPage, NavigationLink } from "@/components";
import style from "./FailedStyles.module.scss";
import { FailedProps } from "./types";
import { useTranslations } from "next-intl";

const FailedImage = "/assets/icons/failed.png";

export const Failed: React.FC<FailedProps> = ({ variant }) => {
  const t = useTranslations("feedback");

  return (
    <DefaultPage noFooter showOptions noBack>
      <article className={style.content}>
        <div className={style.content__image}>
          <img src={FailedImage} alt="Failed Animation" />
        </div>
        <div className={style.content__details}>
          {variant === "payment" && (
            <>
              {t.rich("payment.error", {
                p: (chunks) => <p>{chunks}</p>,
              })}
            </>
          )}
          {variant === "contact" && (
            <>
              {t.rich("contact.error", {
                p: (chunks) => <p>{chunks}</p>,
              })}
            </>
          )}
        </div>
        <div className={style.content__buttonWrapper}>
          <NavigationLink /* href="/checkout" */ href="/">
            <Button>{t("buttonLabelError")}</Button>
          </NavigationLink>
        </div>
      </article>
    </DefaultPage>
  );
};
