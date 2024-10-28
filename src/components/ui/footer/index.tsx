"use client";

/* eslint-disable @next/next/no-img-element */
import style from "./FooterStyles.module.scss";
import { FaDiscord, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { gtagEvents } from "@/utils/helpers/gtag";
import { useTranslations } from "next-intl";
import { ExternalLink, NavigationLink, Container } from "@/components";

const Logo = "/assets/logo/logo.png";

export const Footer = () => {
  const t = useTranslations("footer");
  const a = useTranslations("accessibility");

  return (
    <footer className={style.footer}>
      <Container>
        <section className={style.content}>
          <div className={style.content__logoAndSocial}>
            <img src={Logo} alt="Veecode Plataform" className={style.logo} />
            <ul className={style.items}>
              {/* <li>
                <Link href="https://web.facebook.com/veecodeplatform/" passHref target="_blank">

                  <FaFacebookSquare/>

                </Link>
              </li>*/}
              <li>
                <ExternalLink
                  description={a("external-links.instagram")}
                  href="https://www.instagram.com/veecodeplatform/"
                >
                  <FaInstagram />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  description={a("external-links.linkedin")}
                  href="https://www.linkedin.com/showcase/veecode-platform/"
                >
                  <FaLinkedin />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  description={a("external-links.x")}
                  href="https://twitter.com/veecodeplatform"
                >
                  <FaXTwitter />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  description={a("external-links.discord")}
                  href="https://discord.gg/pREwxeVzAD"
                >
                  <FaDiscord />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  description={a("external-links.youtube")}
                  href="https://www.youtube.com/@veecodeplatform-br"
                >
                  <FaYoutube />
                </ExternalLink>
              </li>
            </ul>
          </div>
          <div className={style.content__details}>
            <div className={style["content__details-lists"]}>
              <ul>
                <li>
                  <span>{t("about-title")}</span>
                </li>
                <NavigationLink href="/how-it-works">
                  <li>{t("about-option1")}</li>
                </NavigationLink>
                <NavigationLink href="/support">
                  <li>{t("about-option2")}</li>
                </NavigationLink>

                <ExternalLink
                  description={a("external-links.github")}
                  href="https://github.com/vfipaas/safira-support/discussions"
                >
                  <li onClick={() => gtagEvents("joinUs")}>
                    {t("about-option3")}
                  </li>
                </ExternalLink>
              </ul>
              <ul>
                <li>
                  <span>{t("docs-title")}</span>
                </li>
                {/* <ExternalLink href="https://docs.platform.vee.codes/safira-cli/intro">
                  <li onClick={() => gtagEvents("safiraDocs")}>
                    {t("docs-option1")}
                  </li>
                </ExternalLink> */}
                <ExternalLink
                  description={a("external-links.vkdr")}
                  href="https://docs.platform.vee.codes/vkdr/intro/"
                >
                  <li onClick={() => gtagEvents("vkdrDocs")}>
                    {t("docs-option2")}
                  </li>
                </ExternalLink>
                <ExternalLink
                  description={a("external-links.docs")}
                  href="https://docs.platform.vee.codes/devportal/intro/"
                >
                  <li onClick={() => gtagEvents("devportal")}>
                    {t("docs-option3")}
                  </li>
                </ExternalLink>
              </ul>
              <ul>
                <li>
                  <span>{t("more-title")}</span>
                </li>
                <ExternalLink
                  description={a("external-links.blog")}
                  href="https://blog.platform.vee.codes/"
                >
                  <li>{t("more-option1")}</li>
                </ExternalLink>
                <NavigationLink href="/terms-of-service">
                  <li>{t("more-option2")}</li>
                </NavigationLink>
                <NavigationLink href="/privacy-policy">
                  <li>{t("more-option3")}</li>
                </NavigationLink>
                <NavigationLink href="/contact-us">
                  <li>{t("more-option4")}</li>
                </NavigationLink>
                <NavigationLink href="/faq">
                  <li>{t("more-option5")}</li>
                </NavigationLink>
                <NavigationLink href="/plugins">
                  <li>{t("more-option6")}</li>
                </NavigationLink>
              </ul>
            </div>
          </div>
        </section>
        <section className={style.footer__copy}>
          <p>
            Copyright &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
        </section>
      </Container>
    </footer>
  );
};
