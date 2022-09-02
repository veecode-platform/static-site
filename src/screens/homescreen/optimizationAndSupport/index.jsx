import Link from 'next/link';
import { Button } from '../../../components'
import style from './_OptimizationAndSupport.module.scss'

const Image1 = "assets/home/image1.png";
const Image2 = "assets/home/image2.png";
const Element1 = "assets/home/element1.png";
const Element2 = "assets/home/element2.png";

const OptimizationAndSupport = () => {
  return (
    <section className={style.wrapper}>
      {/* Part 1 */}
      <article className={style.optimizationContent}>
        <div className={style.optimizationContent__desc}>
          <div className={style.desc}>
            <div className={style.desc__title}>
              <h2>No more spending countless hours on configuration:</h2>
            </div>
            <div className={style.desc__subtitle}>
              What can you generate in 5 minutes?
            </div>
            <div className={style.desc__lists}>
              <ul className={style["desc__lists-list"]}>
                <li>Kong API Gateway</li>
                <li>Kubernetes</li>
                <li>AWS eks</li>
                <li>Mockserver</li>
                <li>Okta</li>
                <li>Dev Portal</li>
              </ul>
              <ul className={style["desc__lists-list"]}>
                <li>Insomnia</li>
                <li>Okteto</li>
                <li>Git Providers (Github)</li>
                <li>OpenAPI</li>
                <li>Code Generator Quarkus</li>
                <li>Code Generator Spring Boot</li>
              </ul>
            </div>
            <div className={style.desc__buttonWrapper}>
            <Link href="https://docs.platform.vee.codes/docs/installation/safira-cli" passHref>
            <a target="_blank">
              <Button>Download Now</Button>
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
            <span className={style.desc__subtitle}>Meet our support Team</span>
            <div className={style.desc__title}>
              <h2>Get the most out of the Platform</h2>
            </div>
            <div className={style.desc__text}>
              <strong>Optimize your productivity.</strong>
                <p>Streamline </p>
                <ul className={style["desc__text-list"]}>
                  <li>Installations</li>
                  <li>Configurations </li>
                  <li>Workflows</li>
                </ul>
                <p>We help you focus on</p>
                <ul className={style["desc__text-list"]}>
                  <li>Variations in automation processes</li>
                  <li>Teams and squads of different sizes</li>
                  <li>Sets of embedded technology</li>
                  </ul>
            </div>
            <div className={style.desc__buttonWrapper}>
              <Button>Find out</Button>
            </div>
          </div>
        </div>
        <div className={style.supportContent__image}>
          <img src={Image2} alt="Support section image" />
        </div>
      </article>
      {/* Part3 */}
      <article className={style.banner}>
        <div className={style.banner__container}>
          <div className={style.left}>
            <img src={Element1} alt="Element 1 picture" />
          </div>
          <div className={style.text}>
            <div className={style.text__title}>
              <h2>Count on our team of experts</h2>
            </div>
            <p>
            Our team will help you to be even more useful on our platform.
            </p>
          </div>
          <div className={style.right}>
            <img src={Element2} alt="Element 2 picture" />
          </div>
        </div>
      </article>
    </section>
  );
}

export default OptimizationAndSupport