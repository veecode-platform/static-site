import React from "react";
import style from "../../../styles/WhatsApp.module.scss";

const wppLogo = "/assets/logo/logo-whatsapp-512.png";

const WhatsApp = () => {

    return (
        <div className={style.wrapper}>
            <img src={wppLogo} alt="ContactUs WhatsApp Logo" className={style.image}/>
        </div>
    )
}

export default WhatsApp