/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./TransformTeamSection.module.scss";
import { Button, Container } from "../../../components";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ComputerImg = "/assets/home/notebook.png";

export const TransformTeamSection = () => {
  const t = useTranslations("home");

  return (
    <section className={style.root}>
      <Container>
        <section className={style.content}>
          <div className={style.textContent}>
            <div className={style.textContent__title}>
              <h2>
                {t.rich("title-section1", {
                  span: (chunks) => <span>{chunks}</span>,
                })}
              </h2>
            </div>
            <div className={style.textContent__description}>
              <p>
                {t.rich("description-section1", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
            <div className={style.textContent__buttonGroup}>
              <Link
                href="http://docs.platform.vee.codes/devportal/installation-guide/VKDR/Intro"
                passHref
                target="_blank"
              >
                <Button>{t("buttonLabel-section1")}</Button>
              </Link>
            </div>
          </div>
          <div className={style.imageWrapper}>
            <img
              src={ComputerImg}
              alt="Computer image"
              className={style.image}
            />
          </div>
        </section>
      </Container>
    </section>
  );
};
