import React from 'react';
import { DefaultPage, ScrollTop } from '../../components';
import style from '../../../styles/HowItWork.module.scss';
import CardItem from './cardItem';
import Link from 'next/link';
import { gtagEvents } from '../../../utils/gtag';
import { Button } from '../../components';
import { useTranslation } from 'react-i18next';

const Icon1 = "/assets/howitworks/icon1.png";
const Icon2 = "/assets/howitworks/icon2.png";
const Icon3 = "/assets/howitworks/icon3.png";
const Icon4 = "/assets/howitworks/icon4.png";
const Icon5 = "/assets/howitworks/icon5.png";
const Icon6 = "/assets/howitworks/icon6.png";
const Icon7 = "/assets/howitworks/icon7.png";
const Icon8 = "/assets/howitworks/icon8.png";
const Icon9 = "/assets/howitworks/icon9.png";

const HowItWorks = () => {

    const { t } = useTranslation();

    return (
        <DefaultPage
            titleBar="enable"
            title={t("how-works-title")}
            subtitle={t("how-works-subtitle")}
            showButton
            showOptions
        >
            <article className={style.content}>
                <CardItem
                    image={Icon1}
                    title={t("how-works-topic1-title")}
                >
                    <p>{t("how-works-topic1-desc1")}</p>
                    <p>{t("how-works-topic1-desc2")}</p>
                </CardItem>
                <CardItem
                    image={Icon2}
                    title={t("how-works-topic2-title")}
                >
                    <p>{t("how-works-topic2-desc1")}</p>
                    <p>{t("how-works-topic2-desc2")}</p>
                </CardItem>
                <CardItem
                    image={Icon3}
                    title={t("how-works-topic3-title")}
                >
                    <p>{t("how-works-topic3-desc1")}</p>
                    <p>{t("how-works-topic3-desc2")}</p>
                </CardItem>
                <CardItem
                    image={Icon4}
                    title={t("how-works-topic4-title")}
                >
                    <p>{t("how-works-topic4-desc1")}</p>
                    <p>{t("how-works-topic4-desc2")}</p>
                </CardItem>
                <CardItem
                    image={Icon5}
                    title={t("how-works-topic5-title")}
                >
                    <p>{t("how-works-topic5-desc1")}</p>
                    <p>{t("how-works-topic5-desc2")}</p>
                </CardItem>
                <CardItem
                    image={Icon6}
                    title={t("how-works-topic6-title")}
                >
                    <p>{t("how-works-topic6-desc1")} <Link href="https://docs.vkpr.net/docs/intro/" passHref onClick={() => gtagEvents('vkprDocs')}><a target="_blank" >VKPR</a></Link>{" "}
                    {t("how-works-topic6-desc2")}</p>
                </CardItem>
                <CardItem
                    image={Icon7}
                    title={t("how-works-topic7-title")}
                >
                    <p>{t("how-works-topic7-desc1")} <Link href="https://docs.platform.vee.codes/docs/intro" onClick={() => gtagEvents('safiraDocs')} passHref><a target="_blank">Safira-Cli</a></Link>.
                    {t("how-works-topic7-desc2")}</p>
                </CardItem>
                <CardItem
                    image={Icon8}
                    title={t("how-works-topic8-title")}
                >
                    <p>{t("how-works-topic8-desc")}</p>
                </CardItem>
                <CardItem
                    image={Icon9}
                    title={t("how-works-topic9-title")}
                >
                    <p>{t("how-works-topic9-desc1")}</p>
                </CardItem>
            </article>
            <Link href='/compare-plans' passHref>
                <a>
                    <Button>{t("how-works-label")}</Button>
                </a>
            </Link>
            <ScrollTop />
        </DefaultPage>
    )
}

export default HowItWorks