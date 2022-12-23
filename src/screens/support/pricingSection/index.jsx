import Link from 'next/link'
import style from './PricingSection.module.scss'

const PricingSection = () => {
  return (
    <article className={style.wrapper}>
        <div className={style.content}>
            <h2 className={style.content__title}>Pricing</h2>
            <p className={style.content__desc}>
                To get access to Support, you must be a Platform subscriber. Check out the 
                <Link href="/compare-plans" prefetch={false}>
                    <a> pricing page </a>
                </Link>
                for details.
            </p>
        </div>
    </article>
  )
}

export default PricingSection