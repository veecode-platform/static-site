import style from './AwsSupport.module.scss'
import Data from './awsSupport.json'

import Card from '../kongSupport/card/index.jsx';
const awsLogo = "assets/home/text_slide/aws.png"; 

const AwsSupport = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div>
          <img 
            className={style.container__logo}
            src={awsLogo}
            alt="AWS Support Logo - Desktop Version"
          />
        </div>
        <div className={style.container__title}>
          <h2>AWS <span>Support</span></h2>
        </div>
      </div>
      <article className={style.content}>
        {Data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </article>
    </section> 
  );
}

export default AwsSupport