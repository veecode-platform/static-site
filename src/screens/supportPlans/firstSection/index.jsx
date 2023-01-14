/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import style from "./FirstSection.module.scss";
import { Button } from "../../../components";
import Link from "next/link";
import Divider from "./divider";

const animation = "/assets/support/animation.svg";

const FirstSection = () => {
  return (
    <section className={style.wrapper}>
      <article className={style.content}>
        <div className={style.info}>

          <div className={style.info__title}>
            <h1>
              Get <span><strong>expert support</strong></span> from the <strong>best solutions</strong> on the market in just a few clicks at an <strong>affordable price</strong>.
            </h1>
          </div>
          <div className={style.info__buttons}>
            <Link href="#plans" passHref>
              <a>
                <Button>Learn More</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className={style.animation}>
          <div>
            <img
              src={animation}
              className={style.animation__img}
            />
          </div>
        </div>
        {/* <div className={style.content__staticNote}>
          <div>
            <img
              src={static_note}
            />
          </div>
        </div> */}
      </article>
      <Divider/>
    </section>
  );
};

export default FirstSection;