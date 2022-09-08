import style from './_SupportCategories.module.scss'

const SupportCategories = ({title, subtitle, desc}) => {
  return (
    <div className={style.card}>
        <h2 className={style.card__title}>{title}</h2>
        <h4 className={style.card__subtitle}><em>{subtitle}</em></h4>
        <p className={style.card__desc}>{desc}</p>
    </div>
  )
}

export default SupportCategories