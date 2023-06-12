import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';
import style from './ListDetails.module.scss';

const ListDetails = () => {

  const { t } = useTranslation();

  return (
    <article className={style.wrapper} >
        <h3 className={style.title}>{t("support-list-details-title")}</h3>
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
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Keycloak
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Terraform
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Docker
                </li>
                <li className={style["details__list-item"]}>
                   <span><FaCheck/></span> Argo CD
                </li>
            </ul>
        </div>
    </article>
  )
}

export default ListDetails