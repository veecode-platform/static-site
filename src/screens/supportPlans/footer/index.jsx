/* eslint-disable @next/next/no-img-element */
import style from "./FooterSection.module.scss";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import { gtagEvents } from "../../../../utils/gtag";
// import { useTranslation } from 'react-i18next';

const Logo = "/assets/logo/logo.png";

const FooterSection = () => {
  // const { t } = useTranslation();

  return (
    <footer className={style.footer}>
      <section className={style.content}>
        <div className={style.content__logoAndSocial}>
          <img src={Logo} alt="Veecode Plataform" className={style.logo}/>
            <ul className={style.items}>
              <li>
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
              </li>
              <li>
                <Link href="https://www.linkedin.com/showcase/veecode-platform/" passHref>
                  <a target="_blank">
                    <FaLinkedin />
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/support" passHref><a target="_blank"><FaTwitterSquare /></a></Link>
              </li> */}
            </ul>
        </div>
        <div className={style.content__details}>
          <div className={style["content__details-lists"]}>
            <ul>
              <li>
                <span>Sobre</span>
              </li>
              <Link href="/how-it-works"><a><li>Como Funciona</li></a></Link>
              <Link href="/support"><a><li>Suporte</li></a></Link>
              <Link href="https://github.com/vfipaas/safira-support/discussions" passHref><a target="_blank" onClick={()=>gtagEvents('joinUs')}><li>Conheça nossa comunidade</li></a></Link>
            </ul>
            <ul>
              <li>
                <span>Docs</span>
              </li>
              <Link href="https://docs.platform.vee.codes/docs/intro" passHref><a target="_blank" onClick={()=>gtagEvents('safiraDocs')}><li>Safira CLI</li></a></Link>
              <Link href="https://docs.vkpr.net/docs/intro/" passHref><a target="_blank" onClick={()=>gtagEvents('vkprDocs')}><li>VKPR</li></a></Link>
              <Link href="https://docs.platform.vee.codes/docs/tutorials/devportal/" passHref><a target="_blank" onClick={()=>gtagEvents('devportal')}><li>Devportal</li></a></Link>
            </ul>
            <ul>
              <li>
                <span>Saiba Mais</span>
              </li>
              <Link href="/terms-of-service"><a><li>Termos de Uso</li></a></Link>
              <Link href="/privacy-policy"><a><li>Política de Privacidade</li></a></Link>
              <Link href="/contact-us"><a><li>Fale Conosco</li></a></Link>
              <Link href="/faq"><a><li>FAQ</li></a></Link>
            </ul>
          </div>
        </div>
      </section>
      <section className={style.footer__copy}>
        <p>
          Copyright &copy; {new Date().getFullYear()} VeeCode Platform. Todos os direitos são reservados
        </p>
      </section>
    </footer>
  );
};

export default FooterSection;
