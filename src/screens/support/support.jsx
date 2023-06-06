import { ContactBar, DefaultPage } from "../../components";
import ListDetails from "./listDetails";
import PricingSection from "./pricingSection";
import SupportBenefits from "./SupportBenefits";
import SupportCategories from "./supportCategories";
import { useTranslation } from 'react-i18next';
import '../../i18n';
 
const Support = () => {

  const { t } = useTranslation();

  return (
    <DefaultPage
      title={t("support-title")}
      subtitle={t("support-subtitle")}
      titleBar="enable"
      showButton
      showOptions
    >
      {/* Platform Support */}
      <SupportCategories
        title={t("support-categories-title")}
        desc={t("support-categories-desc")}
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
