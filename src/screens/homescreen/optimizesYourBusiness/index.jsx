import style from "./_OptimizeYourBusiness.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import Image from "next/image";

const Icon = "assets/home/image3.png";

const OptimizeYourBusiness = () => {
  return (
    <article className={style.content}>
      <div className={style.content__contentWrapper}>
        <div className={style["content__contentWrapper-text"]}>
          <div className={style.title}>
            <h2>
              <strong>VeeCode Platform</strong> Optimizes Your Business
              Transformation
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
              <Link href="/support" passHref>
                <a>
                  <Button>Support</Button>
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
      </div>
    </article>
  );
};

export default OptimizeYourBusiness;
