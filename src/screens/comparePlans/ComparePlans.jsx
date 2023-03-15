import React from "react";
import { Breadcrumb, ContactBar, DefaultPage, Guarantees } from "../../components";
import style from "../../../styles/ComparePlans.module.scss";
import PlansDetails from "./plansDetails";
import { FaCheck, FaCheckCircle, FaMinus } from "react-icons/fa";
// import { useTranslation } from 'react-i18next';
import Link from "next/link";

const ComparePlans = () => {
  // const { t } = useTranslation();

  return (
    <DefaultPage
      showButton
      titleBar="enable"
      title="Chose our support for you"
      subtitle="No more stress with the digital transition, choose the support that most fits your need:"
    >
      <Breadcrumb active={1} />

      <article className={style.content}>

        {/* STANDARD */}
        <PlansDetails
          title="Standard"
          subtitle={<>Get all your questions answered about our solutions. No more problems with DevOps, API Development, Kubernetes, AWS and <Link href='/how-it-works' passHref><a style={{ cursor: "pointer", color: "#1C8068", fontWeight: "bold" }}>more</a></Link>.</>}
          link="/validate?plan=standard"
          label="Start at"
          emphasis="$ 1990"
          text="per Month"
          buttonLabel="Free Trial"
        >
          <li><span><FaCheck /></span>8x5 <Link href="/support" passHref><a><span>Support</span></a></Link></li>
          <li><span><FaCheck /></span>One business day SLA</li>
          <li><span><FaCheck /></span>Support to all plugins</li>
          <li><span><FaCheck /></span>Support to all templates</li>
          <li><span><FaCheck /></span>Direct access to our experts</li>
        </PlansDetails>



        {/* ENTERPRISE */}
        <PlansDetails
          title="Enterprise"
          subtitle="Bring us your problem, and we will bring you the solution. This plan includes all our solutions in a customized way to your demand!"
          link="/contact-enterprise"
          headline='Personalize your experience'
          buttonLabel='Contact Us'
        >
          <li><span><FaCheck /></span>24x7 <Link href="/support" passHref><a><span>Support</span></a></Link></li>
          <li><span><FaCheck /></span>SLA on the same business day</li>
          <li><span><FaCheck /></span>Support to all plugins</li>
          <li><span><FaCheck /></span> Support to all templates</li>
          <li><span><FaCheck /></span> Direct access to our experts</li>
          <li><span><FaCheck /></span> DevOps training and documentation</li>
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
