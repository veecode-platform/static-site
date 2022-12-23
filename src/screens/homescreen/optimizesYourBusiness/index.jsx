import style from "./OptimizeYourBusiness.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import Image from "next/image";

const Icon = "assets/home/image3.png";

const OptimizeYourBusiness = () => {
  return (
    <section className={style.content}>
      <article className={style.content__contentWrapper}>
        <div className={style["content__contentWrapper-text"]}>
          <div className={style.title}>
            <h2>
              <strong>VeeCode Platform</strong> 
              {" "} automates your API Infrastructure
            </h2>
          </div>
          <div className={style.details}>
            <div className={style.details__text}>
              <p>
                Automate the provisioning and construction of cloud APIs,
                assisted by our <strong> expert support</strong> and with a
                <strong> cost that fits in your pocket</strong>.
              </p>
            </div>
            <div className={style.details__buttonWrapper}>
              <Link href="/how-it-works" passHref>
                <a>
                  <Button>How it Works</Button>
                </a>
              </Link>
              
              <Link href="/docs" passHref> 
                <a>
                  <Button className={style.button}>Get started for free</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={style["content__contentWrapper-image"]}>
          <div className={style.image}>
            <Image
                layout="responsive"
                src={Icon} 
                alt="Settings Image"
                width='100%'
                height='100%'
                unoptimized
                priority={true}
                />
          </div>
        </div>
      </article>
    </section>
  );
};

export default OptimizeYourBusiness;
