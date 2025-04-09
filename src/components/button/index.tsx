import classNames from 'classnames';
import style from './ButtonStyles.module.scss';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  children,
  modal,
  loading,
  type,
  alt,
  headerButton,
  handleClick,
  size = 'md',
}) => {
  return (
    <button
      type={type || 'button'}
      disabled={loading}
      className={classNames({
        [style.button]: !modal,
        [style.buttonModal]: modal,
        [style.buttonMd]: size === 'md',
        [style.buttonSm]: size === 'sm',
        [style.buttonLg]: size === 'lg',
      })}
      style={
        alt
          ? { color: '#FFFFFF', backgroundColor: '#20a082' }
          : headerButton
            ? { minWidth: '6vw', height: '4vh', padding: '1em 1.2em' }
            : {}
      }
      onClick={handleClick}
    >
      {loading ? (
        <>
          <span className={style.loader}></span>
          loading
        </>
      ) : (
        children
      )}
    </button>
  );
};
