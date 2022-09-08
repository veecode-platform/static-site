import Link from 'next/link';
import style from '../../../styles/_Payment.module.scss';
import { Breadcrumb, Header, Paypal } from '../../components';

const PaymentPage = () =>{
    /*const [disablePaypal, setDisabledPaypal] = useState(true)
    const handleDisabled = (e) => {setDisabledPaypal(!e.target.checked)}*/

    return(
        <main>
            <Link href="/">
                <a>
                    <Header/>
                </a>
            </Link>

            <section className={style.wrapper}>
            <article className={style.content}>
              <Breadcrumb
               active={3}
               />
              <div className={style.content__options}>
                <div className={style.content__options_infoBoxWrapper}>
                    <div className={style.content__options_infoBoxWrapper_box}>
                        <h1>Premium support plan</h1>
                        <p>$100,00</p>
                        <p>description</p>                       
                    </div>
                    <div className={style.content__options_infoBoxWrapper_boxUser}>
                        <p>Your name</p>
                        <p>email@email.com</p>                       
                    </div>
                    <div className={style.content__options_infoBoxWrapper_box}>
                        <p>Buy now</p>                      
                    </div>
                    <Paypal/>
                </div>                 
              </div>
          </article>
      </section>
            
        </main>
    )
}

export default PaymentPage

