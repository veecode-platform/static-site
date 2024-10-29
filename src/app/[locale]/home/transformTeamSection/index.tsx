import style from "./TransformTeamSection.module.scss";
import { Button, Container, ExternalLink } from "@/components";
import type { TransformTeamSectionProps } from "./type";
import Image from "next/image";

const ComputerImg = "/assets/home/notebook2.png";
const BannerMobile = "/assets/home/banner-mobile.png";
const BannerDesktop = "/assets/home/banner.webp";

export const TransformTeamSection: React.FC<TransformTeamSectionProps> = ({
  title,
  description,
  linkLabel,
  buttonLabel,
}) => {
  return (
    <section className={style.root}>
      {/* Banner Mobile */}
      <Image
        alt=""
        src={BannerMobile}
        width={500}
        height={500}
        sizes="100vw"
        priority
        className={style.bannerMobile}
      />
      {/* Banner Desktop */}
      <Image
        alt=""
        src={BannerDesktop}
        width={500}
        height={500}
        sizes="100vw"
        priority
        className={style.bannerDesktop}
      />

      <Container>
        <section className={style.content}>
          <div className={style.textContent}>
            <div className={style.textContent__title}>
              <h2>{title}</h2>
            </div>
            <div className={style.textContent__description}>
              <p>{description}</p>
            </div>
            <div className={style.textContent__buttonGroup}>
              <ExternalLink
                description={linkLabel}
                href="https://docs.platform.vee.codes/devportal/installation-guide/VKDR/"
              >
                <Button aria-label={buttonLabel}>{buttonLabel}</Button>
              </ExternalLink>
            </div>
          </div>
          <div className={style.imageWrapper}>
            <Image
              src={ComputerImg}
              alt="Computer Logo"
              width={500}
              height={500}
              priority
              className={style.image}
            />
          </div>
        </section>
      </Container>
    </section>
  );
};
