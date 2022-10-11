import { DefaultPage, ScrollTop } from "../../components";
import style from '../../../styles/TermsOfService.module.scss';

const TermsOfService = () => {
  return (
    <DefaultPage 
      title="Terms Of Service" 
      titleBar="enable"
      noPrevious
      showButton
      >
      <article className={style.content}>
        {/* Definitions */}
        <h2>DEFINITIONS</h2>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) define &quot;VeeCode Platform&quot; (or
          &quot;Platform&quot;) as the collection of tools, including (and not limited to)
          source code, code generators, accelerators, developer portals,
          pipeline definitions, command line interfaces, documentation,
          practices, reference architectures and other artifacts, open-sourced
          or not, that compose our products, governing their access and use.
        </p>

        <p>
          The &quot;Terms&quot; also collectively defines (governing access to and use)
          our services (&quot;Services&quot;), including (and not limited to) &quot;Platform&quot;
          support, generic technical support, our websites (and all support
          channels), support levels, support content and knowledge base,
          community channels, community content and events.
        </p>

        <p>
          Individuals or entities that use our &quot;Platform&quot; and/or our &quot;Services&quot;
          will be collectively referred as &quot;Customers&quot; or &quot;Users&quot; (sometimes
          &quot;you&quot; or &quot;your&quot;). In specific situations (as defined below) they may
          be referred to as &quot;Subscribers&quot; or &quot;Members&quot;.
        </p>

        <p>
          By using our &quot;Platform&quot; and/or our &quot;Services&quot; you are accepting these
          &quot;Terms&quot; as a binding contract, whether or not being a paying customer
          or member, whether as an individual or an entity you represent.
        </p>
        <p>
          <strong>
            If you do not agree to these &quot;Terms&quot; or any other rules and
            conditions here described then you may not use, access or copy any
            of the &quot;Services&quot; or &quot;Platform&quot;.
          </strong>
        </p>
        {/* General Terms And Conditions */}
        {/* Updates to terms */}
        <h2>GENERAL TERMS & CONDITIONS </h2>
        <h3> 1 - UPDATES TO TERMS</h3>
        <p>
          1.1 - These Terms are expected to be revised and changed with time and
          without notice. The current Terms will be always available online
          (URL).
        </p>
        <p>
          1.2 - We will do our best to notify you in advance of meaningful
          changes, especially when affecting price and scope, but you are
          expected to check them regularly by yourself.
        </p>
        <p>
          1.3 - If you do not agree to these Terms at any time, you can
          terminate them and cease to use both &quot;Platform&quot; and &quot;Services&quot;.
        </p>
        <p>
          1.4 - 
          <strong>
             If you continue to use &quot;Platform&quot; or &quot;Services&quot; after a revision you
            are bound to the new Terms.
          </strong>
        </p>
        {/* Services offered and Terms */}
        <h3>2. SERVICES OFFERED AND TERMS</h3>
        <p>
          2.1 - <strong>VeeCode Platform Subscription:</strong> access to our
          community and support channels, asset library (under construction) and
          includes your choice for Standard Support (no extra charge) or{" "}
          <strong>Premium Support </strong> (for an extra cost).
        </p>
        <p>
          2.2 - <strong>Standard Support:</strong> best-effort support with
          5-day SLA.
        </p>
        <p>
          2.3 - <strong>Premium Support:</strong> best-effort support with 3-day
          SLA.
        </p>
        <p>
          2.4 - This document also includes specific Service Terms that
          provide more detail for such services.
        </p>
        {/* Customers and Users */}
        <h3>3.CUSTOMERS AND USERS</h3>
        <p>
          3.1 - A &quot;Customer&quot; means an entity (and its representatives) acquiring
          a VeeCode Platform Subscription, bound to the Terms here documented
          and responsible for naming the active &quot;Users&quot; under this subscription
          (and also the &quot;Administrative Users&quot;).
        </p>
        <p>
          3.2 - An &quot;User&quot; (or &quot;member&quot;) is an authorized user under an active
          &quot;Subscription&quot;, with access to the &quot;Platform&quot; (in the form of - and
          not restricted to - assets, code, documents, portals and tools) and
          &quot;Services&quot; (in the form of - and not restricted to - support portals,
          community forums and knowledge base).
        </p>
        <p>
          3.3 - An &quot;Administrative Users&quot; is an &quot;User&quot; allowed to add or remove
          &quot;Users&quot; covered by a valid &quot;Subscription&quot;, restricted to the limited
          number of users specified by the subscription.
        </p>
        <p>
          3.4 - Users that exceed the subscription amount can be purchased
          through the platform itself.{" "}
        </p>
        {/* Pricing And Biling */}
        <h3>4. PRICING & BILLING</h3>
        <p>
          4.1 - When signing up for the Services on the website the customer
          will opt for a support plan and fees, choosing monthly or annual
          payment.
        </p>
        <p>
          4.2 - An approved order for a subscription will charge your credit
          card and begin a &quot;Service Year&quot; (or just &quot;year&quot;).
        </p>
        <p>
          4.3 - The minimal duration for a subscription (and support plan) is 12
          months (an entire service year). As an exception to this rule, a new
          customer has the option to cancel the subscription (and to be
          refunded) until 15 days after starting the first service year.
        </p>
        <p>
          4.4 - All orders are subject to approval from VeeCode. In the event of
          a rejection, charges received will be refunded within 15 days.
        </p>
        <p>
          4.5 - An alternative payment method can be used, if both parties agree
          on written terms: VeeCode can invoice the customer for 1 (one) service
          year upfront, and payment can be done by wire transfer (up to 15
          days).
        </p>
        <p>
          4.6 - Failure to charge credit cards (and to pay invoices) will result
          in blocked access to services. This will not affect open-sourced
          components nor any asset created or generated with the platform tools.
        </p>
        {/* Renewal, Upgrade And Termination */}
        <h3>5. RENEWAL, UPGRADE & TERMINATION</h3>
        <p>
          5.1 - At the end of the service year renewal is automatic unless the
          subscription has been canceled. Price changes will take effect on
          renewal.
        </p>
        <p>
          5.2 - Automatic renewal can be avoided by canceling the subscription
          at least 30 days prior to the end of service year.
        </p>
        <p>
          5.3 - Renewal starts a new service year under the current
          subscription.
        </p>
        <p>
          5.4 - Support level can be <strong>upgraded</strong> at any time
          during a service year. In this case a pro-rata (proportional) value
          will be charged upfront.
        </p>
        <p>
          5.5 - Support level can be <strong>downgraded</strong> at any time
          during a service year, but this will only take effect on the next
          service year. Current support level will remain active until the end
          of the service year, but on renewal the new support level will become
          active (and charged accordingly).
        </p>
        <p>
          5.6 - A subscription (and its associated services) can be terminated
          at any time by both parties without previous notice or motive.
          Services and subscription will remain active (and charged) until the
          end of the current service year and will not be renewed.
        </p>
        <p>
          5.7 - A subscription can be terminated at any time (and services
          interrupted) on failure to pay the amount owed according to the active
          subscription. You will still owe the remaining service year, and
          services will be continued once payment is received.
        </p>
        <p>
          5.8 - A terminated subscription does not affect the right to use the
          open-sourced components of the &quot;Platform&quot; or any other component
          freely available for non-subscribers. It also does not affect the
          rights of any artifacts generated by the platform and its tools.
        </p>
        {/* Liability Limitations */}
        <h3>6. LIABILITY LIMITATIONS</h3>
        <p>
          6.1 - The &quot;Platform&quot; is composed of many third-party products in
          addition to products developed by us.
        </p>
        <p>
          6.2 - The &quot;Platform&quot; contains tools that aid deployment automation of
          these products with pre-configured and opinionated setups. Such
          configurations are expected to be verified and tested by customers
          according to their needs.
        </p>
        <p>
          6.3 - The &quot;Platform&quot; also delivers tools for code generation and such
          code is expected to be manipulated and tested by the customer.
        </p>
        <p>
          6.4 - Our &quot;Services&quot; include &quot;best effort&quot; support, as defined in  Service Terms.
        </p>
        <p>
          6.5 - Therefore under no circumstances and in no event &quot;we&quot; (our
          company or its affiliates, employees, directors, agents, successors)
          will be liable for any damages (of any kind) or lost profits. By using
          our platform or services in any way, whether being an active
          subscriber or not, you agree to this limitation and to all &quot;Terms&quot;.
        </p>
        {/* INTELLECTUAL PROPERTY */}
        <h3>7. INTELLECTUAL PROPERTY</h3>
        <p>
          7.1 - The &quot;Platform&quot; is composed of many third-party products in
          addition to products developed by us. All the third party products are
          used, downloaded and configured as permitted by their creators.
        </p>
        <p>
          7.2 - Some of our products are explicitly open-sourced, and governed
          by a specific license (you should refer to a LICENSE file versioned
          with the source code). Unless otherwise mentioned, you are free to
          use, redistribute and modify them in the ways allowed by the LICENSE.
        </p>
        <p>
          7.3 - The platform can be used to generate source code in a number of
          ways. You are the owner of all code you generate, as well of any code
          you write along with the generated code. You are free to use, reuse
          and distribute these source files as you please.
        </p>
        <p>
          7.4 - We remain the owners of our source code (such as our templates
          used in code generation). You cannot claim ownership of them, but this
          does not affect the files generated by you when using the platform -
          those are yours, whether you are a subscriber or not.
        </p>
        <p>
          7.5 - An active subscription to the platform and services will provide
          access to restricted documents, code examples, support systems and
          other assets. The authorized users from a customer are allowed to make
          copies of these assets for personal and work use, but are not allowed
          to redistribute, sell or publish them. This is strictly under fair use
          - copies made by crawlers and bots are considered an abuse of this
          right and a violation of these terms.
        </p>
        <p>
          7.6 - If you voluntarily contribute to our platform source code by
          doing pull requests (or other forms of code submission) we will own
          this submission.
        </p>
        {/* Service Terms */}
        {/* RENEWAL & TERMINATION */}
        <h2>1. RENEWAL & TERMINATION</h2>
        <p>
          1.1 - An active subscription provides access to restricted assets and
          to services, including support services. These are always subject to
          the General Terms in addition to the terms in this section.
        </p>
        <p>
          1.2 - Service renewal or termination is governed by the terms in Renewal,
             Upgrade & Termination.
        </p>
        {/* SERVICES DEFINITION */}
        <h2>2. SERVICES DEFINITION</h2>
        <p>
          2.1 - <strong>Content access:</strong> documents, videos, code
          examples, comde templates, knowledge base and other assets will be
          available to users under an active subscription.
        </p>
        <p>
          2.2 - <strong>Community channels:</strong> users will have access to
          closed communities and forums restricted to active subscribers. In
          these channels users are free to ask for guidance, help each other and
          build a community. We will regularly have staff on these channels as
          well, both to contribute and to moderate discussions.
        </p>
        <p>
          2.3 - <strong>Support channels:</strong> users will be able to file
          support cases through specific channels available. Such channels will
          be explained and provisioned during customer onboarding.
        </p>
        <p>
          2.4 - <strong>Support channels:</strong> customers will choose support
          level when subscribing. Support can be upgraded or downgraded, as
          explained in Renewal, Upgrade & Termination. Current support
          levels are &quot;Basic&quot; (5 business days SLA) and &quot;Premium&quot; (2 business
          days SLA).
        </p>
        <p>
          2.5 - <strong>Best effort:</strong> support is provided in a
          &quot;best-effort&quot; way, where we will do our best to respond to cases
          within the SLA limits. This may be affected by a few factors, such as
          a large volume of support requests on the same day or national
          holidays.
        </p>
        <p>
          2.6 - <strong>Support tooling:</strong> support will be greatly
          enhanced if our tools, assets and automations were used when
          provisioning infrastructure, when generating source code and when
          configuring cloud environments. We will also provide tools to
          facilitate diagnostics, monitoring and troubleshooting. You are
          expected (but not obliged) to deploy, configure and use such tools,
          for they were designed to reduce both support friction and time to
          resolve issues.
        </p>
        <p>
          2.7 - <strong>Support vs Consulting:</strong> support is about
          pointing out misconfiguration issues, identifying or fixing bugs,
          troubleshooting, reviewing code and answering general questions.
          Support, on the other hand, isn&apos;t consulting: we are not a team to be
          allocated to do your job (although we do plan to offer professional
          services in the future as a subscription add-on). Questions like &quot;what
          is the best way to do &apos;x&apos;&quot; or &quot;what is the best architecture for
          mission &apos;y&apos;&quot; may (and probably will) get an answer in community
          channels (we will gladly help you if we can), but they are not under
          support service scope.
        </p>
        <p>
          2.8 - <strong>Same day or Emergency support:</strong> we do not offer
          same-day support nor will we be available for an emergency call (well,
          not yet).
        </p>
      </article>
      <ScrollTop/>
    </DefaultPage>
  );
};

export default TermsOfService;
