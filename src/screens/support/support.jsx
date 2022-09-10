import { ContactBar, DefaultPage } from "../../components";
import PricingSection from "./pricingSection";
import SupportBenefits from "./SupportBenefits";
import SupportCategories from "./supportCategories";

const Support = () => {
  return (
        <DefaultPage
          title="Support Options"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing."
          header="enable"
          >
          {/* Comunity Support */}
          <SupportCategories
            title="Comunity Support"
            subtitle="free mode support"
            desc="With DevOps, it seems like there are a thousand little details you have
             to get just right—DNS, TLS, VPCs, secrets management, monitoring, alerting, CI, 
             CD—and never enough time to learn them all. With Gruntwork Professional Support,
              you get to work with a team of DevOps experts who can help you set up your 
              infrastructure, design highly available and scalable systems, automate 
            builds and deployments, troubleshoot issues, and avoid gotchas and pitfalls."/>
          {/* Standard Support */}
          <SupportCategories
            title="Standard Support"
            subtitle="free mode support"
            desc="With DevOps, it seems like there are a thousand little details you have
             to get just right—DNS, TLS, VPCs, secrets management, monitoring, alerting, CI, 
             CD—and never enough time to learn them all. With Gruntwork Professional Support,
              you get to work with a team of DevOps experts who can help you set up your 
              infrastructure, design highly available and scalable systems, automate 
            builds and deployments, troubleshoot issues, and avoid gotchas and pitfalls."/>
            {/* Premium Support */}
          <SupportCategories
            title="Premium Support"
            subtitle="free mode support"
            desc="With DevOps, it seems like there are a thousand little details you have
             to get just right—DNS, TLS, VPCs, secrets management, monitoring, alerting, CI, 
             CD—and never enough time to learn them all. With Gruntwork Professional Support,
              you get to work with a team of DevOps experts who can help you set up your 
              infrastructure, design highly available and scalable systems, automate 
            builds and deployments, troubleshoot issues, and avoid gotchas and pitfalls."/>
            {/* Benefits */}
            <SupportBenefits/>
            {/* Pricing Section */}
            <PricingSection/>
            {/* Contact Bar */}
            <ContactBar/>
        </DefaultPage>
  );
};

export default Support;
