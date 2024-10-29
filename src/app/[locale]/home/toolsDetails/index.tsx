import Link from "next/link";
import style from "./ToolsDetails.module.scss";
import { Container } from "@/components";
import { toolsDetailsProps } from "./types";
import Image from "next/image";

const Banner = "/assets/home/bglight.webp";

export const ToolsDetails: React.FC<toolsDetailsProps> = ({
  title,
  tools,
  subtitle,
  buttonLabel,
}) => {
  return (
    <section className={style.content}>
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
        <article className={style.wrapper}>
          <div className={style.wrapper_title}>
            <h2>{title}</h2>
          </div>

          <div className={style.wrapper_cardsWrapper}>
            <div className={style["wrapper_cardsWrapper-cards"]}>
              {tools.map((item) => (
                <div key={item.id} className={style.card}>
                  <img src={item.icon} alt="" className={style.card_icon} />
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={style["wrapper_cardsWrapper-subtitle"]}>
            <p>{subtitle}</p>
            <Link
              href="https://docs.platform.vee.codes/devportal/intro"
              target="_blank"
              prefetch={false}
            >
              <button aria-label={buttonLabel} className={style.button}>
                {buttonLabel}
              </button>
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
};
