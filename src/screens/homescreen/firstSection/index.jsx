/* eslint-disable @next/next/no-img-element */
import style from "./_FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";

const BgDesktop = "/assets/home/bg1.webp"; 
const BgMobile = "/assets/home/bgmobile1.webp";

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
          <h2>
              <span>Unlock</span>
              <br />
              your team&apos;s potential
            </h2>
        </div>
        <div className={style.content__text}>
          <p>
            Your transition to the cloud doesn&lsquo;t have to be time-consuming, expensive, or lonely. Count on our{" "}
            <strong>professional support</strong> and{" "}
            <strong>free tools </strong> 
            to overcome your challenges quickly and easily! 
          </p>
        </div>
        <div className={style.content__buttons}>      
          <Link href="/support-plans/?lng=en" passHref>
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