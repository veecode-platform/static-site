import { Breadcrumb, DefaultPage, Header } from "../../components";
import style from "../../../styles/_Checkout.module.scss";
import { PaypalComponent } from "../../components/paypal";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const CheckoutPage = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <DefaultPage title="Check Out">
      <section className={style.wrapper}>
        <article className={style.content}>
          <Breadcrumb active={2} />
          <div className={style.content__options}>
            <div className={style.content__options_formWraper}>
              <input placeholder="Name"></input>
              <input placeholder="Email"></input>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Agree with terms of use"
                />
              </FormGroup>
            </div>
            <PaypalComponent {...label} />
          </div>
        </article>
      </section>
    </DefaultPage>
  );
};

export default CheckoutPage;
