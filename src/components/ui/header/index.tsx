"use client";

import React from "react";
import classNames from "classnames";
import style from "./HeaderStyles.module.scss";
import { HeaderProps } from "./types";
import { useTranslations } from "next-intl";
import { FaBars } from "react-icons/fa";
import {
  SwitchLanguage,
  Container,
  ExternalLink,
  NavigationLink,
  Button,
} from "@/components";

const Logo = "../../assets/logo/logo.png";
const LogoMobile = "../../assets/logo/logo-mobile.png";

export const Header: React.FC<HeaderProps> = ({
  fixedHeader,
  showButton,
  showOptions,
  notTranslate,
}) => {
  const [open, setOpen] = React.useState(false);

  const t = useTranslations("header");
  const a = useTranslations("accessibility");

  return (
    <>
      <header
        className={classNames({
          [style.wrapper]: true,
          [style.wrapper__fixedHeader]: fixedHeader,
        })}
      >
        <Container>
          <section className={style.content}>
            <div>
              <NavigationLink href="/">
                <img
                  src={Logo}
                  alt="VeeCode Plataform Logo"
                  className={style.content__logo}
                />
                <img
                  src={LogoMobile}
                  alt="VeeCode Plataform Logo"
                  className={style.content__logoMobile}
                />
              </NavigationLink>
            </div>

            <nav className={style.nav}>
              {showOptions && (
                <>
                  <div className={style.nav__options}>
                    <ExternalLink
                      description={a("external-links.docs")}
                      href="https://docs.platform.vee.codes/"
                    >
                      <h2>{t("docs")} </h2>
                    </ExternalLink>
                  </div>

                  <div className={style.nav__options}>
                    <ExternalLink
                      description={a("external-links.blog")}
                      href="https://blog.platform.vee.codes/"
                    >
                      <h2>{t("blog")}</h2>
                    </ExternalLink>
                  </div>

                  <div className={style.nav__options}>
                    <NavigationLink href="/plugins">
                      <h2>{t("plugins")}</h2>
                    </NavigationLink>
                  </div>

                  <div className={style.nav__options}>
                    <NavigationLink href="/pricing">
                      <h2>{t("pricing")}</h2>
                    </NavigationLink>
                  </div>
                  <div className={style.nav__options}>
                    <NavigationLink href="/contact-us">
                      <h2>{t("contactUs")}</h2>
                    </NavigationLink>
                  </div>
                </>
              )}

              {showButton && (
                <div className={style.nav__options}>
                  <ExternalLink
                    description={a("external-links.demo")}
                    href="https://devportal.demo.vee.codes/"
                  >
                    <Button aria-label={t("demo")} headerButton>
                      {t("demo")}
                    </Button>
                  </ExternalLink>
                </div>
              )}
            </nav>

            {!notTranslate && <SwitchLanguage />}

            <button
              aria-label="menu"
              className={style.mobileButton}
              onClick={() => setOpen(!open)}
            >
              <FaBars />
            </button>
          </section>
        </Container>
      </header>

      <ul
        role="nav"
        className={classNames({
          [style["menuMobile"]]: open,
          [style["menuMobileHide"]]: !open,
        })}
      >
        <li className={style.menuMobile__item}>
          <NavigationLink href="/">Home</NavigationLink>
        </li>
        <li className={style.menuMobile__item}>
          <ExternalLink
            description={a("external-links.docs")}
            href="https://docs.platform.vee.codes/"
          >
            {t("docs")}
          </ExternalLink>
        </li>
        <li className={style.menuMobile__item}>
          <ExternalLink
            description={a("external-links.blog")}
            href="https://blog.platform.vee.codes/"
          >
            {t("blog")}
          </ExternalLink>
        </li>
        <li className={style.menuMobile__item}>
          <NavigationLink href="/plugins">{t("plugins")}</NavigationLink>
        </li>
        <li className={style.menuMobile__item}>
          <NavigationLink href="/pricing">{t("pricing")}</NavigationLink>
        </li>
        <li className={style.menuMobile__item}>
          <ExternalLink
            description={a("external-links.demo")}
            href="https://devportal.demo.vee.codes/"
          >
            {t("demo")}
          </ExternalLink>
        </li>
      </ul>
    </>
  );
};
