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
            <span>What do you produce in 5 minutes?</span>
            <div className={style.desc__title}>
              <h2>No more spending hours configuring:</h2>
            </div>
            <ul className={style.desc__list}>
              <li>Docker Registry credential</li>
              <li>Repositories (github, gitlab and bitbucket)</li>
              <li>CI/CD routines</li>
              <li>API Gateway</li>
              <li>AWS credential To Test Structures</li>
              <li>DTO</li>
            </ul>
            <div className={style.desc__buttonWrapper}>
              <Button>Download Now</Button>
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
            <span>Meet our support</span>
            <div className={style.desc__title}>
              <h2>Get the most out of the platform</h2>
            </div>
            <div className={style.desc__text}>
              <strong>Optimize your productivity.</strong>
              <p>
                 There are many possibilities for installations and configurations,
                    various details and articulations to consider, variations
                    of automation processes, teams and squads of different sizes and
                    a set of embedded technology.
              </p>
            </div>
            <div className={style.desc__buttonWrapper}>
              <Button>Get Start</Button>
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
                <img
                    src={Element1}
                    alt="Element 1 picture"
                    />
            </div>
            <div className={style.text}>
                <div className={style.text__title}>
                    <h2>Count on our expert time</h2>
                </div>
                <p>Our team will help you make the most of it
                    to take advantage of the Platform</p>
            </div>
            <div className={style.right}>
                <img
                    src={Element2}
                    alt="Element 2 picture"
                    />            
            </div>
        </div>
      </article>
    </section>
  );
}

export default OptimizationAndSupport