import dynamic from 'next/dynamic'
import style from './AwsSupport.module.scss'
import Data from './awsSupport.json'

const Card = dynamic(()=> import('./card'));
// const kongLogo = "assets/home/tools/KONG.png"; 

const AwsSupport = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.title}>
      {/* <img
            src={AwsSupportLogo}
            alt="background header - Desktop Version"
            /> */}
        <h2>AWS <span>Support</span></h2>
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