import style from '../../../styles/_Button.module.scss';

const Button = ({children, type, loading}) => {
  return (
    <button className={style.button} type={type || "button"} disabled={loading}>
      {loading ? "loading..." : children}
    </button>
  )
}

export default Button