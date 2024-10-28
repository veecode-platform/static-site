/* eslint-disable @next/next/no-img-element */
import { Button, Container, NavigationLink } from "@/components";
import style from "./SupportSection.module.scss";
import { SupportSectionProps } from "./types";

const BgDesktop = "@/assets/home/bg3.webp";
const BgMobile = "@/assets/home/bgmobile2.webp";

export const SupportSection: React.FC<SupportSectionProps> = ({
  title,
  buttonLabel,
  supportItems,
}) => {
  return (
    <section className={style.root}>
      <Container>
        <article className={style.content}>
          <div className={style.content_text}>
            <div className={style["content_text-title"]}>
              <h2>{title}</h2>
              <div className={style["content_text-buttonWrapper"]}>
                <NavigationLink href="/pricing/#plans" prefetch={false}>
                  <Button aria-label={buttonLabel}>{buttonLabel}</Button>
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
