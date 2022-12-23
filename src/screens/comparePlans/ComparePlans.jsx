import React from "react";
import { Breadcrumb, ContactBar, DefaultPage, Guarantees } from "../../components";
import style from "../../../styles/ComparePlans.module.scss";
import PlansDetails from "./plansDetails";
import { FaCheck, FaCheckCircle, FaMinus } from "react-icons/fa";

const ComparePlans = () => {
  return (
    <DefaultPage
      titleBar="enable"
      title="Chose our support for you"
      subtitle="No more stress with the digital transition, choose the support that most fits your need:"
    >
      <Breadcrumb active={1} />
      <article className={style.content}>
        {/* STANDARD */}
        <PlansDetails
          title="Standard"
          subtitle="Solve your company's technological barriers in a practical and objective way."
          link="/validate?plan=standard"
          label="Start at"
          emphasis="$ 1990"
          text="per Month"
          buttonLabel="Sign the plan"
        >
          <li><span><FaCheck /></span>8x5 support</li>
          <li><span><FaCheck /></span>One business day SLA</li>
          <li><span><FaCheck /></span>10 tickets per month</li>
          <li><span><FaCheck /></span>2 simultaneous tickets</li>
          <li><span><FaCheck /></span>Direct access to technical professionals</li>
        </PlansDetails>
        {/* ENTERPRISE */}
        <PlansDetails
          title="Enterprise"
          subtitle="Get personalized service according to your company's specific needs."
          link="/contact-enterprise"
          headline="Personalize your experience"
          buttonLabel="Contact Us"
        >
          <li><span><FaCheck /></span>24x7 support</li>
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
