import Link from "next/link";
import { Button } from "../../../components";
import style from "./OptimizationAndSupport.module.scss";

const Image1 = "assets/home/image1.webp";
const Image2 = "assets/home/image2.webp";

const OptimizationAndSupport = () => {
  return (
    <section className={style.wrapper}>
      {/* Part 1 */}
      <article className={style.optimizationContent}>
        <div className={style.optimizationContent__desc}>
          <div className={style.desc}>
            <div className={style.desc__title}>
              <h2>Discover our Free Tools</h2>
            </div>
            <ul className={style.desc__list}>
              <li>
                 Using <strong>DevPortal</strong> all your APIs will be able to be made available to your partners in an organized and secure way. 
              </li>
              <li>
                <strong>Safira-CLI</strong> is a built-in API acceleration tool. The product offers multiple commands
                 that boost productivity and eliminate repetitive tasks.
              </li>
              <li>
                <strong>VKPR</strong> is our solution for Cloud Infrastructure. With the CLI, you will provide a Kubernetes 
                cluster to attend to your company&apos;s needs. 
              </li>
            </ul>
            <div className={style.desc__buttonWrapper}>
              <Link
                href="https://docs.platform.vee.codes/docs/intro/"
                passHref
              >
                <a target="_blank">
                <Button
                    alt
                  >
                    Safira CLI
                  </Button>
                </a>
              </Link>
              <Link
                href="https://docs.vkpr.net/docs/intro/"
                passHref
              >
                <a target="_blank">
                <Button
                    alt
                  >
                    VKPR
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.optimizationContent__image}>
          <img src={Image1} alt="Optimization section image" />
        </div>
      </article>
      {/* Part 2 */}
      <article className={style.supportContent}>
        <div className={style.supportContent__desc}>
          <div className={style.desc}>
            <div className={style.desc__title}>
              <h2>Join our community</h2>
            </div>
            <div className={style.desc__text}>
              <p>
                Vee Code Platform encourages its users to help each other in a
                collaborative and selfsufficient environment. Join our
                community, bring your insights about services and products,
                increasing your productivity also helping the community to grow.
              </p>
            </div>
            <div className={style.desc__buttonWrapper}>
              <Link href="https://github.com/vfipaas/safira-support/discussions" passHref>
                <a target="_blank">
                  <Button
                    alt>
                      Join Us
                    </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.supportContent__image}>
          <img src={Image2} alt="Support section image" />
        </div>
      </article>
    </section>
  );
};

export default OptimizationAndSupport;
