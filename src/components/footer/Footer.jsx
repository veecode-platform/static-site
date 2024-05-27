/* eslint-disable @next/next/no-img-element */
import style from "../../../styles/Footer.module.scss";
import { FaDiscord, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { gtagEvents } from "../../../utils/gtag";
import { useTranslation } from 'react-i18next';

const Logo = "/assets/logo/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={style.footer}>
      <section className={style.content}>
        <div className={style.content__logoAndSocial}>
          <img src={Logo} alt="Veecode Plataform" className={style.logo} />
          <ul className={style.items}>
            {/* <li>
                <Link href="https://web.facebook.com/veecodeplatform/" passHref>
                  <a target="_blank">
                  <FaFacebookSquare/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/veecodeplatform/" passHref>
                  <a target="_blank">
                    <FaInstagram />
                  </a>
                </Link>
              </li> */}
            <li>
              <Link href="https://www.linkedin.com/showcase/veecode-platform/" passHref>
                <a target="_blank">
                  <FaLinkedin />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/veecodeplatform" passHref><a target="_blank"><FaXTwitter/></a></Link>
            </li>
            <li>
              <Link href="https://discord.gg/pREwxeVzAD" passHref><a target="_blank"><FaDiscord /></a></Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@veecodeplatform-br" passHref>
                <a target="_blank">
                  <FaYoutube />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.content__details}>
          <div className={style["content__details-lists"]}>
            <ul>
              <li>
                <span>{t("footer-topic1")}</span>
              </li>
              <Link href="/how-it-works"><a><li>{t("footer-option1")}</li></a></Link>
              <Link href="/support"><a><li>{t("support")}</li></a></Link>
              <Link href="https://github.com/vfipaas/safira-support/discussions" passHref><a target="_blank" onClick={() => gtagEvents('joinUs')}><li>{t("footer-option2")}</li></a></Link>
            </ul>
            <ul>
              <li>
                <span>{t("footer-topic2")}</span>
              </li>
              <Link href="https://docs.platform.vee.codes/safira-cli/intro" passHref><a target="_blank" onClick={() => gtagEvents('safiraDocs')}><li>Safira CLI</li></a></Link>
              <Link href="https://docs.platform.vee.codes/vkpr/intro" passHref><a target="_blank" onClick={() => gtagEvents('vkprDocs')}><li>VKPR</li></a></Link>
              <Link href="https://docs.platform.vee.codes/devportal/intro/" passHref><a target="_blank" onClick={() => gtagEvents('devportal')}><li>Devportal</li></a></Link>
            </ul>
            <ul>
              <li>
                <span>{t("footer-topic3")}</span>
              </li>
              <Link href="https://blog.platform.vee.codes/" passHref>
                <a target='_blank'>
                  <li>Blog</li>
                </a>
              </Link>
              <Link href="/terms-of-service"><a><li>{t("terms-of-service")}</li></a></Link>
              <Link href="/privacy-policy"><a><li>{t("privacy-policy")}</li></a></Link>
              <Link href="/contact-us"><a><li>{t("contact-us")}</li></a></Link>
              <Link href="/faq"><a><li>FAQ</li></a></Link>
              <Link href="/plugins"><a><li>Plugins</li></a></Link>    
            </ul>
          </div>
        </div>
      </section>
      <section className={style.footer__copy}>
        <p>
          Copyright &copy; {new Date().getFullYear()} {t("footer-copyright")}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
