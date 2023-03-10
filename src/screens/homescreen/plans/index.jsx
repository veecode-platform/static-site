/* eslint-disable @next/next/no-img-element */
import style from "./Plans.module.scss";
import PlansDetails from "./plansDetails";
import { FaCheck } from "react-icons/fa";
const veeCodeLogo = 'assets/home/black_logo.png';
import Link from "next/link";

const Plans = () => {
  return (
    <section className={style.content} id="plans">
      <div className={style.header}>
        <div>
          <img
            className={style.header__logo}
            src={veeCodeLogo}
            alt="Vee Code Logo - Desktop Version"
          />
        </div>
        <div className={style.header__title}>
          <h2>
            <span>Plans</span>
          </h2>
        </div>
      </div>
      <div className={style.subtitle}>
        <p>
          <strong>Lower the barriers</strong> for your development team through our specialized support in the stacks you work in.
        </p>
      </div>

      <article className={style.plans}>
        {/* STANDARD */}
        <PlansDetails
          title="Standard"
          subtitle="Solve your company's technological barriers in a practical and objective way."
          link="/validate?plan=standard"
          label="Start at"
          emphasis="$ 1990"
          text="per Month"
          buttonLabel="Sign Plan"
        >
          <li><span><FaCheck /></span>8x5 <Link href="/support" passHref><a><span>Support</span></a></Link></li>
          <li><span><FaCheck /></span>One business day SLA</li>
          <li><span><FaCheck /></span>10 tickets per month</li>
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
    </section>
  );
};

export default Plans;
