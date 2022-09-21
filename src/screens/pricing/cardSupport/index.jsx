import style from './CardSupport.module.scss';

const IconOffer = '/assets/icons/special-offer.png';

const CardSupport = ({
    title,
    subtitle,
    desc,
    children,
    price, 
    sub
}) => {
  return (
    <div className={style.content}>
        <img src={IconOffer} alt='special offer' className={style.iconOffer}/>
        <div className={style.content__text}>
            <div className={style["content__text-title"]}>
                <h3>{title}</h3>
            </div>
            <div className={style["content__text-subtitle"]}>
                <h4>{subtitle}</h4>
            </div>
            <span/>
            <div className={style["content__text-desc"]}>
                <p>
                    {desc}
                </p>
            </div>
            <span/>
            <div className={style["content__text-price"]}>
                <p>
                    {price}
                </p>
            </div>
            <span/>
            <div className={style["content__text-sub"]}>
                <p>
                    {sub[0]}
                    <br/>
                    {sub[1]}
                </p>
            </div>
            { children !== ""  ?  children :  "" }
        </div>
    </div>
  )
}

export default CardSupport