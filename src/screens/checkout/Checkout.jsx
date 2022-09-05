import Link from 'next/link';
import { Breadcrumb, Button, Header } from '../../components';
import style from '../../../styles/_Checkout.module.scss';
import { PaypalComponent } from '../../components/paypal';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const CheckoutPage = () =>{
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return(
        <main>
            <Link href="/">
                <a>
                    <Header/>
                </a>
            </Link>

            <section className={style.wrapper}>
            <article className={style.content}>
              <div className={style.content__title}>
                  <h2>A Team Of Experts You Can Count On</h2>
              </div>
              <div className={style.content__desc}>
                  <p>Count on our team to help you get the most out of our platform</p>
              </div>
              {/* Breadcrumb */}
              <Breadcrumb
               active={2}
               />
              <div className={style.content__options}>
                <div className={style.content__options_formWraper}>
                    <input placeholder='Name'></input>
                    <input placeholder='Email'></input>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Agree with terms of use" />
                    </FormGroup>
                </div>
                <PaypalComponent {...label}/>
                  
              </div>
          </article>
      </section>
            
        </main>
    )
}

export default CheckoutPage