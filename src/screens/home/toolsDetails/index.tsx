/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import style from "./ToolsDetails.module.scss";
import { useTranslations } from "next-intl";
import { Container } from "@/components";

export const ToolsDetails = () => {
  const t = useTranslations("home");

  const tools = [
    {
      id: 0,
      icon: "/assets/home/toolsDetails/1.png",
      desc: t.rich("card-1", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 1,
      icon: "/assets/home/toolsDetails/2.png",
      desc: t.rich("card-2", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 2,
      icon: "/assets/home/toolsDetails/3.png",
      desc: t.rich("card-3", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 3,
      icon: "/assets/home/toolsDetails/4.png",
      desc: t.rich("card-4", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
  ];

  return (
    <section className={style.content}>
      <Container>
        <article className={style.wrapper}>
          <div className={style.wrapper_title}>
            <h2>
              {t.rich("title-section3", {
                span: (chunks) => <span>{chunks}</span>,
              })}
            </h2>
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
            <p>{t("subtitle-section3")}</p>
            <Link
              href="https://docs.platform.vee.codes/devportal/intro"
              target="_blank"
              prefetch={false}
            >
              <button className={style.button}>
                {t("buttonLabel-section3")}
              </button>
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
};
