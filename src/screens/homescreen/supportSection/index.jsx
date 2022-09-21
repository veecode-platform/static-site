import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components";
import style from "./SupportSection.module.scss";

const BgDesktop = "assets/home/bg3.webp";
const BgMobile = "assets/home/bgmobile2.webp";

const SupportSection = () => {
  return (
    <section className={style.wrapper}>
      {/* Background */}
      <div className={style.wrapper__background}>
          <img
            src={BgDesktop}
            alt="background header - Desktop version"
            className={style["wrapper__background-desktop"]}
            />
          <img
              src={BgMobile}
              alt="background header - Mobile version"
              className={style["wrapper__background-mobile"]}
              />
      </div>
      <article className={style.content}>
        <div className={style.content__text}>
          <div className={style["content__text-title"]}>
            <h2>
              <span>Unlock</span>
              <br />
              your team&apos;s potential
            </h2>
          </div>
          <div className={style["content__text-desc"]}>
            <strong>Benefits of VeeCode Platform support</strong>
            <ul className={style.list}>
              <li>Submit your questions through our portal.</li>
              <li>Track the progress of your request.</li> 
              <li>Access our knowledge base.</li>
              <li>Service with established SLA.</li>
              <li>Direct assistance to your technical team.</li>
            </ul>
          </div>
          <div className={style["content__text-buttonWrapper"]}>
            <Link href="/pricing" prefetch={false}>
              <a>
                <Button>Buy Now</Button>
              </a>
            </Link>
            {/* <Link href="/support" prefetch={false}>
              <a>
                <Button>Support</Button>
              </a>
            </Link> */}
          </div>
        </div>
      </article>
    </section>
  );
};

export default SupportSection;
