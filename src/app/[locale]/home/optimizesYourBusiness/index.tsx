import style from "./OptimizeYourBusiness.module.scss";
import { Container } from "@/components";
import { OptimizesyourBusinessProps } from "./type";

const DevportalImage = "/assets/home/printdevportal.png";

export const OptimizeYourBusiness: React.FC<OptimizesyourBusinessProps> = ({
  title,
  description,
}) => {
  return (
    <section className={style.root}>
      <Container>
        <article className={style.content}>
          <div className={style["content__text"]}>
            {/* Title */}
            <div className={style.title}>
              <h2>{title}</h2>
            </div>
            {/* Details */}
            <div className={style.details}>
              <div className={style.details_text}>
                <p>{description}</p>
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
