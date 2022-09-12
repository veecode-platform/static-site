import style from './_CardSupport.module.scss';

const CardSupport = ({
    title,
    subtitle,
    desc,
    children,
    price
}) => {
  return (
    <div className={style.content}>
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
            { children !== ""  ?  children :  "" }
        </div>
    </div>
  )
}

export default CardSupport