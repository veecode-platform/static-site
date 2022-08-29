import style from '../../../styles/_Header.module.scss';

const Logo = 'assets/home/logo.png';

const Header = () => {
  return (
    <header className={style.wrapper}>
        <section className={style.content}>
            <img 
                src={Logo}
                alt="VeeCode Plataform Logo"
                className={style.content__logo}
              />
        </section>
    </header>
  )
}

export default Header