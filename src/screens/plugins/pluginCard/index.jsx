import React from 'react';
import { Button } from '../../../components';
import style from './PluginCard.module.scss';

const PluginCard = ({id,image,title, tags, desc, buttonLabel}) => {
  return (
      <div className={style.card}>
          <div className={style.card__content}>

              <header className={style["card__content-header"]}>
                <img src={image} alt="" className={style.icon}/>
                <div className={style.titlebar}>
                    <h2 className={style.titlebar__title}>{title}</h2>
                    <div className={style.titlebar__tags}>
                        {tags.map(t => <span key={t} className={style["titlebar__tags-chips"]}>{t}</span>)}
                    </div>
                </div>
              </header>
              
              <div className={style["card__content-text"]}>
                <p className={style.desc}>{desc}</p>
              </div>
          </div>
          <div className={style.card__button}>
              <Button>
                {buttonLabel}
              </Button>
          </div>
      </div>
  )
}

export default PluginCard