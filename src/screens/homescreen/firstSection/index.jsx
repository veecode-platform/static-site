import style from "./_FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import TextSlide from "./textSlide";

const Logo = "assets/home/logo.png";

const FirstSection = () => {
  return (
    <section className={style.wrapper}>
      <article className={style.content}>
        <img
          src={Logo}
          alt="Veecode plataform Logo"
          className={style.content__logo}
        />
        <div className={style.content__title}>
          <h1>
            Your API infrastructure in <strong> minutes </strong>
            <TextSlide/>
          </h1>
        </div>
        <div className={style.content__text}>
          <p>
          Your transition to the cloud doesn&lsquo;t have to be time-consuming, expensive or unaided. Count
          on our <strong>professional support</strong> and <strong>free tools</strong> to overcome these challenges quickly and
          easily.
          </p>
        </div>
        <div className={style.content__buttons}>
          <Link href="https://docs.platform.vee.codes/docs/intro" passHref>
            <a target="_blank">
              <Button>How It Works</Button>
            </a>
          </Link>

          <Link
            href="/pricing"
            passHref
          >
            <a>
              <Button>Buy Now</Button>
            </a>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default FirstSection;
