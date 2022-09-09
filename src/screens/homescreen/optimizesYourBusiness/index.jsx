import style from "./_OptimizeYourBusiness.module.scss";
import { Button } from "../../../components";
import Link from "next/link";

const Image = "assets/home/image3.png";

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
                <strong>cost that fits in your pocket</strong>.
              </p>
            </div>
            <div className={style.details__buttonWrapper}>
              <Link href="/support" passHref>
                <a>
                  <Button>SUPPORT</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={style["content__contentWrapper-image"]}>
          <img src={Image} alt="Settings Image" />
        </div>
      </div>
    </article>
  );
};

export default OptimizeYourBusiness;
