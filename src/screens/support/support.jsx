import { ContactBar, DefaultPage } from "../../components";
import ListDetails from "./listDetails";
import PricingSection from "./pricingSection";
import SupportBenefits from "./SupportBenefits";
import SupportCategories from "./supportCategories";

const Support = () => {
  return (
    <DefaultPage
      title="Support Options"
      subtitle="Count on our team to help you get the most out of our platform"
      titleBar="enable"
    >
      {/* Platform Support */}
      <SupportCategories
        title="Platform Support"
        desc="Count on our team of qualified and experienced
         professionals who will help you to get the most out of our products and tools.
          Considering the details of your IT deparment. 
          In addition, we can help with doubts that come up while using our
          products and components that are embedded in our solution. Our plan is to support at
           a much lower cost than having a full-time specialist professional on your team."
      />
      {/* List Details */}
      <ListDetails/>
      {/* Benefits */}
      <SupportBenefits />
      {/* Pricing Section */}
      <PricingSection />
      {/* Contact Bar */}
      <ContactBar />
    </DefaultPage>
  );
};

export default Support;
