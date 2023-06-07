import Link from "next/link";
import React from "react";
import style from "../../../styles/Guarantees.module.scss";
import Cards from "./cards";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';

const Details = {
    "pt": [
        {
            id: "0",
            title: "Garantia de 15 dias (sem risco)",
            desc: "Não cobramos nada até aos 15 dias de utilização e pode cancelar sem qualquer encargo.",
            image: "/assets/pricing/icon3.png"
        },
        {
            id: "1",
            title: "Profissionais especializados",
            desc: "Obtenha acesso direto a profissionais especializados nas stacks com que a sua empresa se confronta.",
            image: "/assets/pricing/icon1.png"
        },
        {
            id: "2",
            title: "Sem bloqueio",
            desc: "Todo o suporte e disposição de código transmitidos pela nossa equipe permanecem sob seu controle mesmo com o cancelamento dos planos.",
            image: "/assets/pricing/icon2.png"
        }
    ],
    "en": [
        {
            id: "0",
            title: "15 Days Guarantee (No Risk)",
            desc: "We do not charge you until your 15 days of use, you can cancel without any fee.",
            image: "/assets/pricing/icon3.png"
        },
        {
            id: "1",
            title: "Expert Professionals",
            desc: "Get direct access to professionals specialized in the stacks your company is struggling with.",
            image: "/assets/pricing/icon1.png"
        },
        {
            id: "2",
            title: "No lock-in",
            desc: "All support and code disposition passed on by our team remains under your control even with the cancellation of the plans.",
            image: "/assets/pricing/icon2.png"
        }
    ]
}


function Guarantees() {

    let items = [];

    i18n.language == 'pt' ? items = Details.pt : items = Details.en;

    const { t } = useTranslation();
    
    return (
        <div className={style.container}>
            <div className={style.guaranteesWrapper}>
                <div className={style.guaranteesWrapper__text}>
                    <p className={style["guaranteesWrapper__text-info"]}>
                        {t("pricing-guaranteed1")} <Link href="/contact-us"><a target="_blank">{t("contact-us")} </a></Link> 
                        {t("pricing-guaranteed2")}
                    </p>
                </div>
                <div className={style.guaranteesWrapper__cards}>
                    {
                        items.map(
                            item =>
                            (
                                <Cards
                                    key={item.id}
                                    {...item}
                                />
                            )
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default Guarantees;
