import Link from "next/link";
import style from "../../../styles/_Pricing.module.scss";
import { Breadcrumb, Button, ContactBar, DefaultPage } from "../../components";
import CardSupport from "./cardSupport";

const Pricing = () => {
  return (
    <DefaultPage
      title="A Team Of Experts You Can Count On"
      subtitle="Count on our team to help you get the most out of our platform"
      titleBar="disable"
    >
      <section className={style.wrapper}>
        <article className={style.content}>
          <Breadcrumb active={1} />
          <div className={style.content__options}>
            <CardSupport
              title="Standard Support"
              subtitle="10 Users"
              desc="Support within 5 business days"
              price="$449/mo*"
              sub={["*over annual subscription", "$499/mo"]}
            >
              <Link href="/validate?plan=standard">
                <a>
                <Button
                    alt >
                    BUY NOW
                  </Button>
                </a>
              </Link>
            </CardSupport>
            <CardSupport
              title="Premium Support"
              subtitle="20 Users"
              desc="Support within 3 business days"
              price="$674/mo*"
              sub={["*over annual subscription", "$749/mo" ]}
            >
              <Link href="/validate?plan=premium">
                <a>
                 <Button
                    alt>
                    BUY NOW
                  </Button>
                </a>
              </Link>
            </CardSupport>
          </div>
        </article>
      </section>
      <ContactBar />
    </DefaultPage>
  );
};

export default Pricing;
