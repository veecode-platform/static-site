import { FaCheck } from 'react-icons/fa';
import style from './_ListDetails.module.scss';

const ListDetails = () => {
  return (
    <article className={style.wrapper} >
        <h3 className={style.title}>Our experts are ready to help you with</h3>
        <div className={style.details}>
            <ul className={style.details__list}>
                <li className={style["details__list-item"]}> 
                  <span><FaCheck/></span> Kong API Gateway
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Kubernetes
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Aws eks
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Mockserver
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Okta
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Dev Portal
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Insomnia
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Okteto
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Git Providers
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> OpenAPI
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Code Generator Quarkus
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Code Generator Spring Boot
                </li>
            </ul>
        </div>
    </article>
  )
}

export default ListDetails