import Link from "next/link";
import { useEffect } from "react";
import style from "../../../styles/_Pricing.module.scss";
import { Breadcrumb, Button, ContactBar, DefaultPage } from "../../components";
import CardSupport from "./cardSupport";

const Pricing = () => {

  useEffect(()=>{
    if (typeof window !== "undefined"){
      if ( window.innerWidth > 1300){
          setTimeout(() => {
            window.scrollTo({
              top: 350,
              left: 350,
              behavior: 'smooth'
            });
          }, 1000);
      }
    }
  },[])

  return (
    <DefaultPage
      title="Select the Plan"
      subtitle="Choose the plan just right for your team."
      titleBar="enable"
    >
      <section className={style.wrapper}>
        <article className={style.content}>
          <Breadcrumb active={1}/>
          <div className={style.content__options}>
            <CardSupport 
              title="Standard Support"
              subtitle="10 Users"
              desc="Includes 5 business days of SLA"
              price="$899/mo*"
              sub={["*over annual subscription", "$809/mo"]}
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
              subtitle="10 Users"
              desc="Includes 3 business days of SLA"
              price="$1049/mo*"
              sub={["*over annual subscription", "$944/mo" ]}
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
          <article className={style.contactBar}>
          <ContactBar/>
        </article>
        </article>
      </section>
    </DefaultPage>
  );
};

export default Pricing;
