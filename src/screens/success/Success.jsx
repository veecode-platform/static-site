import Image from 'next/image';
import { DefaultPage } from '../../components';
import style from '../../../styles/_Success.module.scss';

const SuccessImage = '/assets/icons/success.png'

const Success = () => {
  return (
    <DefaultPage titleBar="disable">
        <article className={style.content}>
              <div className={style.content__image}>
                  <img
                      src={SuccessImage} 
                      alt="Success Animation"
                    />
              </div>
              <div className={style.content__details}>
                  <p>Confirmação de pagamento em andamento.</p>
                  <p> Enviaremos um email quando estiver tudo ok ...</p>
              </div>
        </article>
    </DefaultPage>
  )
}

export default Success