/* eslint-disable @next/next/no-img-element */
import { Button, Container, NavigationLink } from "../../../components";
import style from "./SupportSection.module.scss";
import { useTranslations } from "next-intl";

const BgDesktop = "@/assets/home/bg3.webp";
const BgMobile = "@/assets/home/bgmobile2.webp";

export const SupportSection = () => {
  const t = useTranslations("home");

  const supportItems = [
    {
      id: 0,
      icon: "/assets/home/Support/1.svg",
      desc: t.rich("option-1", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 1,
      icon: "/assets/home/Support/2.svg",
      desc: t.rich("option-2", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 2,
      icon: "/assets/home/Support/3.svg",
      desc: t.rich("option-3", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 3,
      icon: "/assets/home/Support/4.svg",
      desc: t.rich("option-4", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 4,
      icon: "/assets/home/Support/5.svg",
      desc: t.rich("option-5", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
  ];

  return (
    <section className={style.root}>
      <Container>
        <article className={style.content}>
          <div className={style.content_text}>
            <div className={style["content_text-title"]}>
              <h2>
                {t.rich("title-section4", {
                  span: (chunks) => <span>{chunks}</span>,
                })}
              </h2>
              <div className={style["content_text-buttonWrapper"]}>
                <NavigationLink href="/pricing/#plans" prefetch={false}>
                  <Button>{t("buttonLabel-section4")}</Button>
                </NavigationLink>
              </div>
            </div>

            <div className={style.content_cardsSection}>
              <div className={style["content_cardsSection-cards"]}>
                {supportItems.map((item) => (
                  <div key={item.id} className={style.card}>
                    <img src={item.icon} alt="" className={style.card_icon} />
                    <div className={style.card_desc}>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
};
