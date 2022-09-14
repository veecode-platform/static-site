import { Button, DefaultPage } from '../../components';
import style from '../../../styles/_Failed.module.scss';
import Link from 'next/link';

const SuccessImage = '/assets/icons/failed.gif'

const Failed = () => {
  return (
    <DefaultPage
       titleBar="disable"
       noBack
       >
        <article className={style.content}>
              <div className={style.content__image}>
                  <img
                      src={SuccessImage} 
                      alt="Success Animation"
                    />
              </div>
              <div className={style.content__details}>
                  <p>Failed Operation</p>
                  <p>There was an error in the transaction, please check your details and try again ...</p>
              </div>
              <div className={style.content__buttonWrapper}>
              <Link
                href="/checkout"
                passHref
              >
                <a>
                <Button
                    color="#FFFFFF"
                    background="#20a082"
                  >
                    Try Again
                  </Button>
                </a>
              </Link>
            </div>
        </article>
    </DefaultPage>
  )
}

export default Failed