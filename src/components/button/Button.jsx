import style from '../../../styles/_Button.module.scss';

const Button = ({color,background,children}) => {
  return (
    <button 
       style={{color:color,background:background}}
       className={style.button}>
        {children}
    </button>
  )
}

export default Button