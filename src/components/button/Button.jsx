import style from '../../../styles/_Button.module.scss';

const Button = ({color,background,children, loading, type}) => {
  return (
    <>
      {
        color !== "" && background !== "" ? (
          <button
            type={type || "button"}
            disabled={loading}
            style={{
              color: color,
              background: background,
            }}
            className={style.button}
          >
            {loading ? <><span className={style.loader}></span> loading</> : children}
          </button>
        ) : (
          <button type={type || "button"} disabled={loading}
            className={style.button}
            >
              {loading ? <><span className={style.loader}></span> loading</> : children}
          </button>
        )}
    </>
  );
}

export default Button