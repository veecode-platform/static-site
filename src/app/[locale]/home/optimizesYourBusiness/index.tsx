import style from "./OptimizeYourBusiness.module.scss";
import { Container } from "@/components";
import { OptimizesyourBusinessProps } from "./type";
import Image from "next/image";

const DevportalImage = "/assets/home/printdevportal.png";
const Banner = "/assets/home/bg2.webp";

export const OptimizeYourBusiness: React.FC<OptimizesyourBusinessProps> = ({
  title,
  description,
}) => {
  return (
    <section className={style.root}>
      <Image
        alt=""
        src={Banner}
        width={500}
        height={500}
        sizes="100vw"
        priority
        className={style.banner}
      />
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
            <Image
              src={DevportalImage}
              alt="Settings Image"
              width={500}
              height={500}
              priority
              className={style.image}
              sizes="(max-width: 768px) 100vw, (max-width:1200px) 45vw"
            />
          </div>
        </article>
      </Container>
    </section>
  );
};
