import { useTranslations } from "next-intl";
import style from "./PricingSection.module.scss";
import { NavigationLink } from "@/components";

export const PricingSection = () => {
  const t = useTranslations("supportOptions.body");

  return (
    <article className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.content__title}>{t("title4")}</h2>
        <p className={style.content__desc}>
          {t.rich("description4", {
            strong: (chunks) => (
              <strong>
                <NavigationLink href="/pricing/#plans">{chunks}</NavigationLink>
              </strong>
            ),
          })}
        </p>
      </div>
    </article>
  );
};
