import React from 'react';
import style from '../../../styles/SupportPlans.module.scss';
import SupportSection from './supportSection';
import data from './data.json';

const SupportPlans = () => {
  return (
    <section 
    className={style.wrapper}
     >
      {
        data.map((item,index)=>{
          return(
            <SupportSection
              key={item.title}
              title={item.title}
              img={item.img}
              data={item.data}
              buttonLabel={item.buttonLabel}
              buttonLink={item.buttonLink}
            />
          )
        })
      }
  </section>
  )
}

export default SupportPlans