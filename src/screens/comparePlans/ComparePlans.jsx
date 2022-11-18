import React from "react";
import { Breadcrumb, DefaultPage, Guarantees } from "../../components";
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
          title="STANDARD"
          subtitle="Rely on our standard support to solve your digital transition
          problems."
          link="/pricing"
          label="Know Our Plans"
          >
          <li><span><FaCheck/></span>Professional Support.</li>
          <li><span><FaCheck/></span>Access to professional specialists</li>
          <li><span><FaCheck/></span>Up to 10 Users</li>
          <li><span><FaCheck/></span>3-5 days SLA</li>
          <li><span><FaCheck/></span>Community Support</li>
        </PlansDetails>
        {/* ENTERPRISE */}
        <PlansDetails 
         title="ENTERPRISE"
         subtitle="We solve it for you and by you. Our enterprise plan covers all your needs with the digital transition with same-day SLA. Ideal for your company."
         link="/form-enterprise"
         label="Contact Us"
         >
          <li><span><FaCheck/></span>
           Support for you company needs as:
           <ul className={style.sublist}>
              <li><span><FaCheckCircle/></span>Kong</li>
              <li><span><FaCheckCircle/></span>Kubernetes</li>
              <li><span><FaCheckCircle/></span>AWS</li>
              <li><span><FaCheckCircle/></span>Terraform</li>
              <li><span><FaCheckCircle/></span>And everything on Devops, IaC and Microservices </li>
           </ul>
          </li>
          <li><span><FaCheck/></span>Unlimited Users</li>
          <li><span><FaCheck/></span>Direct access to professional specialists</li>
          <li><span><FaCheck/></span>DevOps Training & Docs</li>
          <li><span><FaCheck/></span>Enterprise Support</li>
          <li><span><FaCheck/></span>Prioritized Bug Fixes</li>
          <li><span><FaCheck/></span>Same business day SLA</li>
        </PlansDetails>
      </article>
      <article className={style.guaranteesBar}>
        <Guarantees/>
      </article>
    </DefaultPage>
  );
};

export default ComparePlans;
