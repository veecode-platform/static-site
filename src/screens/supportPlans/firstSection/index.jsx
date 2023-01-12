/* eslint-disable @next/next/no-img-element */
import style from "./FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import Image from "next/image";

const BgDesktop = "/assets/support/bg1.webp";
const BgMobile = "assets/home/background-mobile.png";
const Logo = "/assets/home/logo.avif";
const animation = "/assets/support/platform_animation.gif";

const FirstSection = () => {
  return (
    <section className={style.wrapper}>
      {/* Background */}
      <div className={style.wrapper__background}>
        <img
          src={BgDesktop}
          alt="background header - Desktop Version"
          className={style["wrapper__background-desktop"]}
        />
        {/* <img
          src={BgMobile}
          alt="background header - Mobile version"
          className={style["wrapper__background-mobile"]}
        /> */}
      </div>
      <article className={style.content}>
        <div className={style.info}>
          <div className={style.info__logo}>
            <Image
              layout="responsive"
              src={Logo}
              alt="Settings Image"
              width='307px'
              height='96px'
              unoptimized
              priority={true}
            />
          </div>
          <div className={style.info__title}>
            <h1>
              Get <span><strong>expert support</strong></span> from the <strong>best solutions</strong> on the market in just a few clicks at an <strong>affordable price</strong>.
            </h1>
          </div>
          <div className={style.info__buttons}>
            <Link href="#plans" passHref>
              <a>
                <Button>Learn More</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className={style.animation}>
          <div>
            <img
              src={animation}
            />
          </div>
        </div>

      </article>
    </section>
  );
};

export default FirstSection;