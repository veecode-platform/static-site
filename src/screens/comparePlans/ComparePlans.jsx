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
          link="/pricing"
          emphasis="$ 1990"
          text="per Month"
          buttonLabel="Sign the plan"
        >
          <li><span><FaCheck /></span>8x5 Support</li>
          <li><span><FaCheck /></span>Attendance from 9h to 18h</li>
          <li><span><FaCheck /></span>Ticketing tools for service</li>
          <li><span><FaCheck /></span>10 tickets per month</li>
          <li><span><FaCheck /></span>2 simultaneous tickets</li>
          <li><span><FaCheck /></span>One business day SLA</li>
          <li><span><FaCheck /></span>Direct access to technical professionals.</li>
        </PlansDetails>
        {/* ENTERPRISE */}
        <PlansDetails
          title="Enterprise"
          subtitle="We do it with you and for you. Our enterprise plan covers all your needs with the digital transition with same-day SLA. Ideal for your company."
          link="/contact-enterprise"
          emphasis="Contact Us"
          buttonLabel="Contact Us"
        >
          <li><span><FaCheck /></span>
            Support for you company needs as:
            <ul className={style.sublist}>
              <li><span><FaCheckCircle /></span>Kong</li>
              <li><span><FaCheckCircle /></span>Kubernetes</li>
              <li><span><FaCheckCircle /></span>AWS</li>
              <li><span><FaCheckCircle /></span>Terraform</li>
              <li><span><FaCheckCircle /></span>IaC and Microservices </li>
            </ul>
          </li>
          <li><span><FaCheck /></span>Unlimited Users</li>
          <li><span><FaCheck /></span>Direct access to professional specialists</li>
          <li><span><FaCheck /></span>DevOps Training & Docs</li>
          <li><span><FaCheck /></span>Enterprise Support</li>
          <li><span><FaCheck /></span>Prioritized Bug Fixes</li>
          <li><span><FaCheck /></span>Same business day SLA</li>
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
