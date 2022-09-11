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
              price="$ 0"
            >
              <Link href="/checkout">
                <a>
                <Button
                    color="#FFFFFF"
                    background="#20a082">
                    START NOW
                  </Button>
                </a>
              </Link>
            </CardSupport>
            <CardSupport
              title="Premium Support"
              subtitle="20 Users"
              desc="Support within 3 business days"
              price="$ 100"
            >
              <Link href="/checkout">
                <a>
                 <Button
                    color="#FFFFFF"
                    background="#20a082">
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
