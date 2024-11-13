import { Container } from "@/components";
import style from "./HeroComponentStyles.module.scss";
import Image from "next/image";
import Link from "next/link";

const VeeCodeImg = "/assets/avaliacao/logo-rotate.png";

export const HeroComponent = () => {
  return (
    <section className={style.wrapper}>
      <Container>
        <div className={style.content}>
          <div className={style.content__text}>
            <h1 className={style["content__text-title"]}>
              Nível de adoção de práticas de{" "}
              <strong>Platform Engineering</strong>
            </h1>
            <p className={style["content__text-details"]}>
              Descubra o nível de adoção de práticas de{" "}
              <strong>Platform Engineering</strong> da sua equipe e receba um
              breve diagnóstico gratuito com oportunidades de aprimoramento.
              Preencha nosso formulário e receba insights sobre como fortalecer
              o potencial do seu time de TI.
            </p>

            <button
              className={style["content__text-button"]}
              aria-label="Fazer avaliação"
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc_afWLVhssuQCBh9XlGIJcqlT4ignKL9gKN3xYSGDtRoyDog/viewform">
                Avaliação
              </Link>
            </button>
          </div>
        </div>
      </Container>
      <Image
        src={VeeCodeImg}
        alt="VeeCode Platform Logo"
        width={750}
        height={750}
        className={style.firstLogo}
        style={{
          height: "auto",
        }}
      />
      <Image
        src={VeeCodeImg}
        alt="VeeCode Platform Logo"
        width={750}
        height={750}
        className={style.secondLogo}
        style={{
          height: "auto",
        }}
      />
    </section>
  );
};
