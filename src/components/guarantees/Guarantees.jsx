import Link from "next/link";
import React from "react";
import style from "../../../styles/Guarantees.module.scss";
import Cards from "./cards";

const Details = [
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

function Guarantees() {
    return (
        <div className={style.container}>
            <div className={style.guaranteesWrapper}>
                <div className={style.guaranteesWrapper__text}>
                    <p className={style["guaranteesWrapper__text-info"]}>
                        Discounted pricing is available for non-profits, educational
                        institutions, and startups with fewer than 10 employees. <Link href="/contact-us"><a>Contact us</a></Link> to
                        get the discounted pricing.
                    </p>
                </div>
                <div className={style.guaranteesWrapper__cards}>
                    {
                        Details.map(
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
