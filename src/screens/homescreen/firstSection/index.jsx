/* eslint-disable @next/next/no-img-element */
import style from "./_FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
const BgDesktop = "assets/home/backy.webp"; 
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
            Get <span><strong>expert support</strong></span> from the <strong>best solutions</strong> on the market in just a few clicks at an <strong>affordable price</strong>.
          </h1>
        </div>
        <div className={style.content__buttons}>      
          <Link href="#Plans" passHref>
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
