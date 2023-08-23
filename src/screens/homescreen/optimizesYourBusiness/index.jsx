import style from "./OptimizeYourBusiness.module.scss";
import { useTranslation } from 'react-i18next';

// const Icon = "/assets/support/animation.svg";
const DevportalImage = "/assets/home/printdevportal.webp";

const OptimizeYourBusiness = () => {
  const { t } = useTranslation();

  return (
    <section className={style.content}>
      <article className={style.content_contentWrapper}>
        <div className={style["content_contentWrapper-text"]}>
          {/* Title */}
          <div className={style.title}>
            <h2 dangerouslySetInnerHTML={{ __html: t("home-optimize-title1") }} />
          </div>
          {/* Details */}
          <div className={style.details}>
            <div className={style.details_text}>
              <p>
                {t("home-optimize-subtitle1")}
                <strong> {t("home-optimize-subtitle2")}</strong>
                {t("home-optimize-subtitle3")}
                <strong>{t("home-optimize-subtitle4")}</strong>
                {t("home-optimize-subtitle5")}
              </p>
            </div>
          </div>
        </div>
        <div className={style["content_contentWrapper-image"]}>
          <img src={DevportalImage}
            alt="Settings Image" className={style.image} />
        </div>
      </article>
    </section>
  );
};

export default OptimizeYourBusiness;
