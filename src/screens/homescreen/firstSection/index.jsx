import style from "./_FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";

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
            Build your API in
            <strong> minutes </strong>
            and for <strong>free</strong> to use
          </h1>
        </div>
        <div className={style.content__text}>
          <p>
            With VeeCode Platform - No wasting your time preparing a development
            environment for building your APIs and creating your project in
            minutes from our intuitive guidelines.
          </p>
        </div>
        <div className={style.content__buttons}>
          <Link href="https://docs.platform.vee.codes/docs/intro" passHref>
            <a target="_blank">
              <Button>Start Now</Button>
            </a>
          </Link>

          <Link
            href="https://docs.platform.vee.codes/docs/installation/safira-cli"
            passHref
          >
            <a target="_blank">
              <Button>Download</Button>
            </a>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default FirstSection;
