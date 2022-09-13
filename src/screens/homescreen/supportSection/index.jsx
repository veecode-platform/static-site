import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components";
import style from "./_SupportSection.module.scss";

const BgDesktop = "assets/home/bg3.webp";
const BgMobile = "assets/home/bgmobile2.webp";

const customLoader = ({ src }) => {
  return src
}

const SupportSection = () => {
  return (
    <section className={style.wrapper}>
      {/* Background */}
      <div className={style.wrapper__background}>
        <div className={style["wrapper__background-desktop"]}>
          <Image
            layout="fill"
            src={BgDesktop}
            alt="background header - Desktop version"
            loader={customLoader}
            width='100'
            height='100'
            priority={true}
            objectFit="cover"
            />
        </div>
        <div className={style["wrapper__background-mobile"]}>
          <Image
              layout="fill"
              src={BgMobile}
              alt="background header - Mobile version"
              loader={customLoader}
              width='100'
              height='100'
              priority={true}
              objectFit="cover"
              />
        </div>
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
              <li>Submit your questions through our portal</li>
              <li>Track the progress of your request</li>
              <li>Access our knowledge base</li>
              <li>Service with established SLA</li>
              <li>Direct assistance to your technical team</li>
            </ul>
          </div>
          <div className={style["content__text-buttonWrapper"]}>
            <Link href="/pricing" prefetch={false}>
              <a>
                <Button>Buy Now</Button>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SupportSection;
