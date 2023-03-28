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
        {/* FREE */}
        <PlansDetails
          title="FREE"
          subtitle={<>Accelerate your business with our Developer Portal solution. Streamline your API automation, Pipelines, and more to solve your business problems.</>}
          label="Start your free plan"
          emphasis="NOW"
          text="and take your business to the next level!"
          link="/validate?plan=free"
          buttonLabel="Start Now"
        >
          <li><span><FaCheck /></span><Link href="https://docs.platform.vee.codes/" passHref><a target={"_blank"}><span>Community Support</span></a></Link></li>
          <li><span><FaCheck /></span>Access to documentation</li>
        </PlansDetails>

        {/* BASIC */}
        <PlansDetails
          title="Basic"
          subtitle={<>Acelerate your business, secure support for our Developer Portal solution. Solve your problems with API automation, Pipelines, and <Link href='/how-it-works' passHref><a style={{ cursor: "pointer", color: "#1C8068", fontWeight: "bold" }}>more</a></Link>.</>}
          link="/validate?plan=basic"
          label="Start at"
          emphasis="$ 690"
          text="per Month"
          buttonLabel="Checkout"
        >
          <li><span><FaCheck /></span>8x5 <Link href="/support" passHref><a><span>Support</span></a></Link></li>
          <li><span><FaCheck /></span>One business day SLA</li>
          <li><span><FaCheck /></span>Support to TechDocs, CI/CD and Pull Request plugins</li>
          <li><span><FaCheck /></span>Support to 2 project templates</li>
          <li><span><FaCheck /></span>Direct access to our experts</li>
        </PlansDetails>

        {/* STANDARD */}
        <PlansDetails
          title="Standard"
          subtitle={<>Get all your questions answered about our solutions. No more problems with DevOps, API Development, Kubernetes, AWS and <Link href='/how-it-works' passHref><a style={{ cursor: "pointer", color: "#1C8068", fontWeight: "bold" }}>more</a></Link>.</>}
          link="/validate?plan=standard"
          label="Start at"
          emphasis="$ 1990"
          text="per Month"
          buttonLabel="Checkout"
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
