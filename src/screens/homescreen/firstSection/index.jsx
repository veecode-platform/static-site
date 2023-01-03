/* eslint-disable @next/next/no-img-element */
import style from "./_FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import Image from "next/image";
import TextSlide from "./textSlide";
import { gtagSafiraDocs } from "../../../../utils/gtag";

const Logo = "assets/home/logo.png";
const BgDesktop = "assets/home/bg4.png"; 
const BgMobile = "assets/home/background-mobile.png";

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
            Get expert support from the best solutions on the market in just a few clicks at an affordable price.
            {/* <TextSlide /> */}
          </h1>
        </div>
        {/* <div className={style.content__text}>
          <p>
            Your transition to the cloud doesn&lsquo;t have to be
            time-consuming, expensive, or lonely. Count on our{" "}
            <strong>professional support</strong> and{" "}
            <strong>free tools</strong> to overcome your challenges quickly 
            and easily! 
          </p>
        </div> */}
        <div className={style.content__buttons}>      
          {/*<Link href="/how-it-works" passHref>
            <a>
              <Button>How it Works</Button>
            </a>
          </Link>*/}

          <Link href="/support" passHref>
            <a>
              <Button>Learn More</Button>
            </a>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default FirstSection;
