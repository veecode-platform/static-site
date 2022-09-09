import { FaCloud, FaHammer, FaLink,  } from 'react-icons/fa';
import style from './_TextSlide.module.scss';

const TextSlide = () => {
  return (
    <div className={style.textSlide}>
    <div className={style.textSlideWrapper}>
        <div className={style.textSlideWrapper__item}><p><FaCloud/> Cloud</p></div>
        <div className={style.textSlideWrapper__item}><p><FaLink/> On-premises</p></div>
        <div className={style.textSlideWrapper__item}><p><FaHammer/> With Support</p></div>
      </div>
  </div>
  )
}

export default TextSlide