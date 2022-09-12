import { DefaultPage } from "../../components";
import style from "../../../styles/_PrivacyPolicy.module.scss";

const PrivaciPolicy = () => {
  return (
    <DefaultPage 
      title="Privacy Policy"
      titleBar="enable">
      <article className={style.content}>
        <span>
          <p>Date: August 24th, 2022</p>
        </span>
        <p>
          <strong>VEE CODE PLATFORM</strong> is responsible for always seeking to protect your
          privacy, based on the respect it has with its customers and suppliers,
          and as part of this responsibility, any information received or
          collected is always treated as confidential and will not be disclosed
          or used without your consent. Thus, when accessed and registered on
          our site, you will be expressing your agreement with the terms
          stipulated herein.
        </p>
        <p>
          We are committed to making Users of our websites aware of their
          information collected, processed, stored and used, in order to provide
          them with a better browsing experience. For this purpose, we present
          our Privacy Policy, which aims to clarify the use of this information.
          By visiting our websites and registering to receive commercial
          contact, contract some of our services or to access and receive our
          technical content, you (User) formally accept and agree to the
          practices described in this Privacy Policy. Our Privacy Policy covers
          all ICTS websites and complies with the provisions of Law No. 12,965
          of April 23, 2014, referred to as &quot;Marco Civil da Internet&quot; or &quot;MCI&quot;,
          with Law No. of 2018, referred to as the &quot;General Law for the
          Protection of Personal Data&quot; or &quot;LGPD&quot;, all of which are committed to
          protecting the privacy and confidentiality of their Users&apos; data and
          information.
        </p>
        <p>
          For the purposes of this Privacy Policy, &quot;personal data&quot; means
          information about an identified or identifiable individual, such as
          their name or email address and includes &quot;personal data&quot; as defined by
          the European Union&quot;s General Data Protection Regulation (&quot;GDPR&quot;) and
          &quot;personal information&quot; as defined by the California Consumer Privacy
          Act (&quot;CCPA&quot;). Some information that is automatically disclosed to us
          or collected by us through your use of our Services meets this
          definition.
        </p>
        {/* DATA STORAGE */}
        <h2> 1- DATA STORAGE </h2>
        <p>
          In order to improve the quality of navigation and functionality of the
          website, VEE CODE PLATFORM collects statistical and analytical
          information, generally linked to technical aspects or related to
          navigation on the website. Data can be collected and stored through
          cookies – text files containing identifying information that are
          stored on your computer – server scripts (PHP, ASP, etc.) and client
          (javascript) scripts or third-party tools. Although cookies are not
          harmful to your equipment, the user is free to refuse their use,
          simply by accessing the settings of their browser (browser), as well
          as preventing the execution of javascript.
        </p>
        <p>
          1.1- Cookies and Web Beacons are also used to store various
          information such as your personal preferences. You can disable your
          cookies in your browser options or in your antivirus, however this
          setting may change the way you access and interact with our sites and
          systems.
        </p>
        <p>
          1.2- All personal information provided is transmitted using SSL
          encryption, thus avoiding any risk of data interception, the storage
          is carried out on a server specially developed to guarantee the
          necessary security for your data.
        </p>
        <p>
          1.3- Cookies for remarketing: This website uses cookies, which, based
          on the pages you visit, keep a record of the products or services you
          may be interested in. Through these cookies and with the tools of the
          Google advertising network (Google Analytics), we can show you ads on
          other websites that are part of the Google advertising network with
          products and services that you may be interested in. This technique is
          called &quot;remarketing&quot;. These cookies do not contain any personal data.
        </p>
        {/* Use of Data */}
        <h2>2- USE OF DATA</h2>
        <p>
          The data collected can be used to complete the purchase process,
          fulfill the obligations arising from the use of our services and
          products, respond to your requests and questions, keep the
          registration updated for the purpose of contacting you by phone and
          among other means, promoting our services and products, inform about
          news, content, purpose and other events relevant to maintenance.
        </p>
        {/* General Provisions */}
        <p>
          We may change the content of this Privacy Policy at any time,
          according to the purpose or need, such as for legal adequacy and
          compliance with a provision of law or rule that has equivalent legal
          force, and it is up to our USER to verify it whenever accessing the
          Our site.
        </p>
      </article>
    </DefaultPage>
  );
};

export default PrivaciPolicy;
