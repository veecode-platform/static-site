import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components';
import style from './headerDefaultStyles.module.scss';

const Logo = `/assets/logo/logo.png`;
const LogoMobile = `/assets/logo/logo-mobile.png`;

export const HeaderDefault = () => {
  return (
    <header className={style.wrapper}>
      <Container>
        <section className={style.content}>
          <div className={style.content__logo}>
            <Link
              href="https://platform.vee.codes"
              aria-label="Link para acessar a página inicial do site da VeeCode Platform"
            >
              <Image
                src={Logo}
                priority
                alt="VeeCode Plataform Logo"
                width={200}
                height={62}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                unoptimized
                className={style.logo}
              />
            </Link>
            <Link
              href="https://platform.vee.codes"
              aria-label="Link para acessar a página inicial do site da VeeCode Platform"
            >
              <Image
                src={LogoMobile}
                priority
                alt="VeeCode Plataform Logo"
                width={34}
                height={48}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                unoptimized
                className={style.logoMobile}
              />
            </Link>
          </div>

          <div className={style.content__contactUs}>
            <Link
              href="https://platform.vee.codes/pt/fale-conosco"
              aria-label="Link do formulário para avaliação"
            >
              Fale Conosco
            </Link>
          </div>
        </section>
      </Container>
    </header>
  );
};
