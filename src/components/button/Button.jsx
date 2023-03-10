import style from '../../../styles/Button.module.scss';
import classNames from 'classnames';

const Button = ({children, modal, loading, type, alt, headerButton, handleClick}) => {
  return(
    <button
      type={type || "button"}
      disabled={loading}
      className={
        classNames({
          [style.button]:!modal, 
          [style.buttonModal]:modal
        })
      } 
      style={alt ? {color: "#FFFFFF", backgroundColor: "#20a082"} : headerButton ? {minWidth: "6vw", height: "4vh", padding:"1em 1.2em"} : {}}
      onClick={handleClick}
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