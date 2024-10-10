import style from "./Guarantees.module.scss";
import { NavigationLink } from "@/components";
import { useTranslations } from "next-intl";
import { Card } from "./card";

const Img1 = "/assets/pricing/icon3.png";
const Img2 = "/assets/pricing/icon1.png";
const Img3 = "/assets/pricing/icon2.png";

export const Guarantees = () => {
  const t = useTranslations("pricing.comparePlans");

  return (
    <div className={style.container}>
      <div className={style.guaranteesWrapper}>
        <div className={style.guaranteesWrapper__text}>
          <p className={style["guaranteesWrapper__text-info"]}>
            {t.rich("footer", {
              strong: (chunks: any) => (
                <strong>
                  <NavigationLink href="/contact-us">{chunks}</NavigationLink>
                </strong>
              ),
            })}
          </p>
        </div>
        <div className={style.guaranteesWrapper__cards}>
          {/* 15 Days Guarantee */}
          <Card
            image={Img1}
            title={t("guarantees.card-1.title")}
            description={t("guarantees.card-1.description")}
          />
          {/* Expert Profeesionals */}
          <Card
            image={Img2}
            title={t("guarantees.card-2.title")}
            description={t("guarantees.card-2.description")}
          />
          {/* No Lock-in */}
          <Card
            image={Img3}
            title={t("guarantees.card-3.title")}
            description={t("guarantees.card-3.description")}
          />
        </div>
      </div>
    </div>
  );
};
