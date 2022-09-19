import style from '../../../styles/Button.module.scss';

const Button = ({children, loading, type, alt}) => {
  return(
    <button
      type={type || "button"}
      disabled={loading}
      className={style.button} 
      style={alt ? {color: "#FFFFFF", backgroundColor: "#20a082"} : {} }
      >
      {
        loading ?
           <>
            <span className={style.loader}></span>
            loading
          </> : children
        }
    </button>
  )
}

export default Button