import React from "react";
import { Breadcrumb, ContactBar, DefaultPage, Guarantees } from "../../components";
import style from "../../../styles/ComparePlans.module.scss";
import PlansDetails from "./plansDetails";
import { FaCheck, FaCheckCircle, FaMinus } from "react-icons/fa";
import Link from "next/link";

const ComparePlans = () => {
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
          subtitle={<>Get access to our ticket platform and clear all your doubts about <Link href='/how-it-works' passHref><a style={{ cursor: "pointer", color: "#33FFCE" }}>our solutions</a></Link>. Our trial does not require you to register your credit card.</>}
          link="/validate?plan=standard"
          label="Start at"
          emphasis="$ 1990"
          text="per Month"
          buttonLabel="Free Trial"
        >
          <li><span><FaCheck /></span>8x5 <Link href="/support" passHref><a><span>Support</span></a></Link></li>
          <li><span><FaCheck /></span>One business day SLA</li>
          {/* <li><span><FaCheck /></span>10 tickets per month</li> */}
          <li><span><FaCheck /></span>2 simultaneous tickets</li>
          <li><span><FaCheck /></span>Direct access to technical professionals</li>
        </PlansDetails>
        {/* ENTERPRISE */}
        <PlansDetails
          title="Enterprise"
          subtitle="Get personalized service according to your company's specific needs"
          link="/contact-enterprise"
          headline="Personalize your experience"
          buttonLabel="Contact Us"
        >
          <li><span><FaCheck /></span>24x7 <Link href="/support" passHref><a><span>Support</span></a></Link></li>
          <li><span><FaCheck /></span>SLA on the same business day</li>
          <li><span><FaCheck /></span>Prioritized bug fixes</li>
          <li><span><FaCheck /></span> Direct access to technical professionals</li>
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
