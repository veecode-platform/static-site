/* eslint-disable @next/next/no-img-element */
import style from "./_FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import Image from "next/image";
import TextSlide from "./textSlide";
import { gtagSafiraDocs } from "../../../../utils/gtag";

const Logo = "/assets/logo/logo.png";
const BgDesktop = "/assets/home/bg1.webp"; 
const BgMobile = "/assets/home/bgmobile1.webp";
// import '../../i18n';
import { useTranslation } from 'react-i18next';

const FirstSection = () => {
  const { t } = useTranslation();

  return (
    <section className={style.wrapper}>
      {/* Background */}
      <div className={style.wrapper__background}>
          <img
            src={BgDesktop}
            alt="background header - Desktop Version"
            className={style["wrapper__background-desktop"]}
            />
          <img
              src={BgMobile}
              alt="background header - Mobile version"
              className={style["wrapper__background-mobile"]}
              />
      </div>
      <article className={style.content}>
        {/* <div className={style.content__logo}>
            <Image
                layout="responsive"
                src={Logo} 
                alt="Settings Image"
                width='307px'
                height='96px'
                unoptimized
                priority={true}
                />
        </div> */}
        <div className={style.content__title}>
          <h1>
          We provide <strong>instant support</strong> on
            <TextSlide />
          </h1>
        </div>
        <div className={style.content__text}>
          <p>
            Your transition to the cloud doesn&lsquo;t have to be time-consuming, expensive, or lonely. Count on our{" "}
            <strong>professional support</strong> and{" "}
            <strong>free tools </strong> 
            to overcome your challenges quickly and easily! 
            {/* incorporating: */}
          </p>
        </div>
        <div className={style.content__buttons}>      
          <Link href="/support" passHref>
            <a>
              <Button>Learn More</Button>
            </a>
          </Link>

          <Link href="/trial" passHref>
            <a>
              <Button>Support Trial</Button>
            </a>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default FirstSection;