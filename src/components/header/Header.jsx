/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import style from '../../../styles/Header.module.scss';
import Button from '../button/Button';
import { useTranslation } from 'react-i18next';


const Logo = '/assets/logo/logo.png';

const Header = ({fixedHeader, showButton}) => {
  const { t } = useTranslation();
  
  return (  
    <header
      className={
      classNames({
                  [style.wrapper] : true ,
                  [style.wrapper__fixedHeader] : fixedHeader
                })}
       >
      <section className={style.content}>
        <Link href="/">
          <a>
            <img
              src={Logo}
              alt="VeeCode Plataform Logo"
              className={style.content__logo}
            />
          </a>
        </Link>
        {showButton && <div className={style.content__buyButton} >
          <Link href="/compare-plans" passHref>            
            <a>
              <Button headerButton>{t('Buy Now')}</Button>
            </a>         
          </Link>
        </div>}
      </section>
    </header>
  );
}

export default Header