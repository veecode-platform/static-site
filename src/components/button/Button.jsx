import style from '../../../styles/Button.module.scss';

const Button = ({children, loading, type, alt, headerButton}) => {
  return(
    <button
      type={type || "button"}
      disabled={loading}
      className={style.button} 
      style={alt ? {color: "#FFFFFF", backgroundColor: "#20a082"} : headerButton ? {minWidth: "6vw", height: "4vh", padding:"1em 1.2em"} : {}}
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