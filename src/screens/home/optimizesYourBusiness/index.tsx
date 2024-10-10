import { useTranslations } from "next-intl";
import style from "./OptimizeYourBusiness.module.scss";
import { Container } from "@/components";

const DevportalImage = "/assets/home/printdevportal.png";

export const OptimizeYourBusiness = () => {
  const t = useTranslations("home");

  return (
    <section className={style.root}>
      <Container>
        <article className={style.content}>
          <div className={style["content__text"]}>
            {/* Title */}
            <div className={style.title}>
              <h2>{t("title-section2")}</h2>
            </div>
            {/* Details */}
            <div className={style.details}>
              <div className={style.details_text}>
                <p>
                  {t.rich("description-section2", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className={style["content__image"]}>
            <img
              src={DevportalImage}
              alt="Settings Image"
              className={style.image}
            />
          </div>
        </article>
      </Container>
    </section>
  );
};
