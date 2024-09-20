import Link from "next/link";
import style from "../../../styles/DocsBar.module.scss";
import Button from "../button/Button";
import { useTranslation } from 'react-i18next';

const DocsBar = () => {

  const { t } = useTranslation();

  return (
    <div className={style.content}>
      <div className={style.content__title}>
        <h4>{t("docs-bar-title")}</h4>
      </div>
      <div className={style.content__button}>
      <Link
        href="https://docs.platform.vee.codes/"
        passHref
        >
        <a target="_blank">
          <Button>
            {t("docs-bar-label")}
          </Button>
        </a>
      </Link>
      </div>
    </div>
  );
};

export default DocsBar;
