import React from "react";
import style from "./headerDefaultStyles.module.scss";
import { Container } from "@/components";
import Image from "next/image";

const Logo = "/assets/logo/logo.png";
const LogoMobile = "/assets/logo/logo-mobile.png";

export const HeaderDefault = () => {
  return (
    <header className={style.wrapper}>
      <Container>
        <section className={style.content}>
          <div className={style.content__logo}>
            <Image
              src={Logo}
              priority
              alt="VeeCode Plataform Logo"
              width={200}
              height={62}
              style={{
                width: "100%",
                height: "auto",
              }}
              className={style.logo}
            />
            <Image
              src={LogoMobile}
              priority
              alt="VeeCode Plataform Logo"
              width={34}
              height={48}
              style={{
                width: "100%",
                height: "auto",
              }}
              className={style.logoMobile}
            />
          </div>
          <div className={style.content__contactUs}>
            <a>Fale Conosco</a>
          </div>
        </section>
      </Container>
    </header>
  );
};
