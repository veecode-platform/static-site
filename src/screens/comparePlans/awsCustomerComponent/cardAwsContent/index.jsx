import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../../components";
import style from './cardAwsContent.module.scss';
import { useTranslation } from "react-i18next";

const CardAwsContent = ({title,image,bodyText, trial,link,noTargetBlank}) => {

    const { t } = useTranslation();
  
    return (
      <div className={style.card}>
        <div className={style.card__image}>
          <Image
            src={image}
            layout="responsive"
            alt=""
            width="100%"
            height="100%"
            unoptimized
            priority={true}
          />
        </div>
        <div className={style.card__body}>
        <h6 className={style.title}>{title}</h6>
          <div className={style.bodyText}>
            <p>{bodyText}</p>
          </div>
          <footer className={style.footer}>
            <p>{t("aws-customer-footer")}</p>
            <Link
              href={link}
              passHref
            >
              <a target={noTargetBlank ? null : "_blank"}>
                <Button alt>{trial ? t("aws-customer-start-now") : t("aws-customer-buy-btn")}</Button>
              </a>
            </Link>
            {" "}
            {t("aws-customer-alternative-btn")}
            {" "}
            <Link
              href="/contact-us"
              passHref
            >
              <a target="_blank">
                <Button alt>{t("aws-customer-contact-btn")}</Button>
              </a>
            </Link>
          </footer>
        </div>
      </div>
    );
  }

export default CardAwsContent