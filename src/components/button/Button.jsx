import style from '../../../styles/_Button.module.scss';

const Button = ({children}) => {
  return (
    <button className={style.button}>
        {children}
    </button>
  )
}

export default Button