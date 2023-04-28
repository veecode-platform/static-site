import style from "./OptimizeYourBusiness.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import Image from "next/image";
// import { useTranslation } from 'react-i18next';

// const Icon = "/assets/home/image3.avif";
const Icon = "/assets/support/animation.svg";


const OptimizeYourBusiness = () => {
  // const { t } = useTranslation();

  return (
    <section className={style.content}>
      <article className={style.content__contentWrapper}>
        <div className={style["content__contentWrapper-text"]}>
          <div className={style.title}>
            <h2>
              Maximize <br/> Your Team<br></br> Productivity with<br></br> <strong>VeeCode Platform</strong>
            </h2>
          </div>
          <div className={style.details}>
            <div className={style.details__text}>
              <p>
                Break barriers and unleash the full potential of going cloud native with our open-source DevPortal. From <strong>software and IaC templates</strong> with streamlined documentation to effortless <strong>API and services management</strong>, try our Platform Engineering solution <strong>for free</strong>.
              </p>
            </div>
            <div className={style.details__buttonWrapper}>
              <Link href="https://docs.platform.vee.codes/" passHref>
                <a>
                  <Button>Start Now</Button>
                </a>
              </Link>
              
              {/* <Link href="/docs" passHref> 
                <a className={style.button}>
                  <Button>Start For Free</Button>
                </a>
              </Link> */}
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
