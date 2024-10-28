import style from "./TransformTeamSection.module.scss";
import { Button, Container, ExternalLink } from "@/components";
import type { TransformTeamSectionProps } from "./type";

const ComputerImg = "/assets/home/notebook2.png";

export const TransformTeamSection: React.FC<TransformTeamSectionProps> = ({
  title,
  description,
  buttonLabel,
}) => {
  return (
    <section className={style.root}>
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
              <ExternalLink href="https://docs.platform.vee.codes/devportal/installation-guide/VKDR/">
                <Button arial-label={buttonLabel}>{buttonLabel}</Button>
              </ExternalLink>
            </div>
          </div>
          <div className={style.imageWrapper}>
            <img
              src={ComputerImg}
              alt="Computer Logo"
              className={style.image}
            />
          </div>
        </section>
      </Container>
    </section>
  );
};
