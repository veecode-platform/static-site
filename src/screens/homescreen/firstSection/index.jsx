/* eslint-disable @next/next/no-img-element */
import style from "./_FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
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
        <div className={style.content__title}>
          <h1>
            Get expert support from the best solutions on the market in just a few clicks at an affordable price.
          </h1>
        </div>
        <div className={style.content__buttons}>      
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
