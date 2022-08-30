import { Button } from '../../../components'
import style from './_OptimizationAndSupport.module.scss'

const Image1 = "assets/home/image1.png";
const Image2 = "assets/home/image2.png";

const OptimizationAndSupport = () => {
  return (
    <section className={style.wrapper}>
      {/* Part 1 */}
      <article className={style.optimizationContent}>
        <div className={style.optimizationContent__desc}>
          <div className={style.desc}>
            <span>O que você produz em 5 minutos?</span>
            <div className={style.desc__title}>
              <h2>Chega de dedicar horas na configuração de:</h2>
            </div>
            <ul className={style.desc__list}>
              <li>Docker Registry credential</li>
              <li>Repositories (github, gitlab and bitbucket)</li>
              <li>Rotinas de CI/CD</li>
              <li>API Gateway</li>
              <li>AWS credential À Estruturas de Testes</li>
              <li>DTO</li>
            </ul>
            <div className={style.desc__buttonWrapper}>
              <Button>Baixe agora</Button>
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
            <span>Conheça nosso suporte</span>
            <div className={style.desc__title}>
              <h2>Tire o máximo de proveito da plataforma</h2>
            </div>
            <div className={style.desc__text}>
              <strong>Otimize sua produtividade.</strong>
              <p>
                São muitas possibilidades de instalações e configurações,
                diversos detalhes e articularidades para considerar, variações
                de processos de automação, times e squads de diversos tamanhos e
                um conjunto de tecnologia embarcada.
              </p>
            </div>
            <div className={style.desc__buttonWrapper}>
              <Button>Saiba Mais</Button>
            </div>
          </div>
        </div>
        <div className={style.supportContent__image}>
          <img src={Image2} alt="Support section image" />
        </div>
      </article>
    </section>
  );
}

export default OptimizationAndSupport