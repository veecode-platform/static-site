import { Container } from "@/components";
import style from "./HeroComponentStyles.module.scss";
import Image from "next/image";
import { EmailInput } from "./emailInput";

const ChatImage = "/assets/newsletter/img.png";

export const HeroComponent = () => {
  return (
    <section className={style.wrapper}>
      <Container>
        <div className={style.content}>
          <div className={style.content__text}>
            <h1 className={style["content__text-title"]}>
              Conecte-se ao universo da <strong>VeeCode Platform</strong>
            </h1>
            <p className={style["content__text-details"]}>
              Receba as últimas novidades, conteúdos exclusivos e atualizações
              sobre a VeeCode direto no seu e-mail. Assine nossa newsletter e
              esteja sempre à frente!
            </p>
            <EmailInput />
          </div>
        </div>
      </Container>
      <Image
        src={ChatImage}
        alt="Chat bubble image"
        width={750}
        height={750}
        className={style.chatImageStyle}
        style={{
          height: "auto",
        }}
      />
    </section>
  );
};
