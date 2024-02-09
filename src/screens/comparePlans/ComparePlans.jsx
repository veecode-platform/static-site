import React from "react";
import { Breadcrumb, Button, ContactBar, DefaultPage, Guarantees } from "../../components";
import style from "../../../styles/ComparePlans.module.scss";
import PlansDetails from "./plansDetails";
import { FaCheck, FaCheckCircle, FaMinus } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import AwsCustomerComponent from "./awsCustomerComponent";

const ComparePlans = () => {
  const { t } = useTranslation();

  return (
    <DefaultPage
      showButton
      titleBar="disabled"
      title={t("pricing-title")}
      subtitle={t("pricing-subtitle")}
    >

      <AwsCustomerComponent/>

      <div className={style.supportTitle}>
        <h2>{t("pricing-title")}</h2>
        <h4>{t("pricing-subtitle")}</h4>
      </div>

      <Breadcrumb active={1} />

      <article className={style.content} id="plans">
        {/* FREE */}
        <PlansDetails
          title={t("pricing-plan1-title")}
          subtitle={<>{t("pricing-plan1-subtitle")}</>}
          label={t("pricing-plan1-desc1")}
          emphasis={t("pricing-plan1-desc2")}
          text={t("pricing-plan1-desc3")}
          link="/free-plan?plan=free"
          buttonLabel={t("pricing-plan1-label")}
        >
          <li>
            <span>
              <FaCheck />
            </span>
            <Link href="https://docs.platform.vee.codes/" passHref>
              <a target={"_blank"}>
                <span>{t("pricing-plan1-topic1")}</span>
              </a>
            </Link>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan1-topic2")}
          </li>
        </PlansDetails>

        {/* BASIC */}
        {/* <PlansDetails
          title={t("pricing-plan2-title")}
          subtitle={<>{t("pricing-plan2-subtitle1")} <Link href='/how-it-works' passHref><a style={{ cursor: "pointer", color: "#1C8068", fontWeight: "bold" }}>{t("pricing-plan2-subtitle2")}</a></Link>.</>}
          link="/validate?plan=basic"
          label={t("pricing-plan2-desc1")}
          emphasis="$ 690"
          text={t("pricing-plan2-desc3")}
          buttonLabel={t("pricing-plan2-label")}
        >
          <li><span><FaCheck /></span>{t("pricing-plan2-topic1")} <Link href="/support" passHref><a><span>{t("pricing-plan2-topic1.1")}</span></a></Link></li>
          <li><span><FaCheck /></span>{t("pricing-plan2-topic2")}</li>
          <li><span><FaCheck /></span>{t("pricing-plan2-topic3")}</li>
          <li><span><FaCheck /></span>{t("pricing-plan2-topic4")}</li>
          <li><span><FaCheck /></span>{t("pricing-plan2-topic5")}</li>
        </PlansDetails> */}

        {/* STANDARD */}
        <PlansDetails
          title={t("pricing-plan3-title")}
          subtitle={
            <>
              {t("pricing-plan3-subtitle1")}{" "}
              <Link href="/how-it-works" passHref>
                <a
                  style={{
                    cursor: "pointer",
                    color: "#1C8068",
                    fontWeight: "bold",
                  }}
                >
                  {t("pricing-plan3-subtitle2")}
                </a>
              </Link>
              .
            </>
          }
          link="/validate?plan=standard"
          label={t("pricing-plan3-desc1")}
          emphasis="$ 1990"
          text={t("pricing-plan3-desc3")}
          buttonLabel={t("pricing-plan3-label")}
        >
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan3-topic1")}{" "}
            <Link href="/support" passHref>
              <a>
                <span>{t("pricing-plan3-topic1.1")}</span>
              </a>
            </Link>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan3-topic2")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan3-topic3")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan3-topic4")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan3-topic5")}
          </li>
        </PlansDetails>

        {/* ENTERPRISE */}
        <PlansDetails
          title={t("pricing-plan4-title")}
          subtitle={t("pricing-plan4-subtitle")}
          link="/contact-enterprise"
          headline={t("pricing-plan4-desc")}
          buttonLabel={t("contact-us")}
        >
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan4-topic1")}{" "}
            <Link href="/support" passHref>
              <a>
                <span>{t("pricing-plan4-topic1.1")}</span>
              </a>
            </Link>
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan4-topic2")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan4-topic3")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan4-topic4")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan4-topic5")}
          </li>
          <li>
            <span>
              <FaCheck />
            </span>
            {t("pricing-plan4-topic6")}
          </li>
        </PlansDetails>
      </article>
      <article className={style.sectionBar}>
        <ContactBar />
        <Guarantees />
      </article>
    </DefaultPage>
  );
};

export default ComparePlans;
