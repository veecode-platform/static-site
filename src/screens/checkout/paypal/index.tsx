"use client";

import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
  DISPATCH_ACTION,
} from "@paypal/react-paypal-js";
import { Wrapper } from "./styles";
import { gtagPurchase } from "@/utils/helpers/gtag";
import { UsePatchData } from "@/hooks/usePatchData";
import alerts from "../../../utils/helpers/alerts";
import { useRouter } from "@/i18n/routing";
import { PaypalComponentProps, WrapperButtonProps } from "./types";

const WraperButton: React.FC<WrapperButtonProps> = ({
  plan,
  disabled,
  planName,
  price,
}) => {
  const router = useRouter();

  const [{ options, isPending, isResolved, isRejected }, dispatch] =
    usePayPalScriptReducer();

  React.useEffect(() => {
    dispatch({
      type: DISPATCH_ACTION.RESET_OPTIONS,
      value: {
        ...options,
      },
    });
  }, [plan]);

  if (isRejected) {
    return <div style={{ color: "white" }}>erro</div>;
  }

  if (isPending) {
    return (
      <PayPalButtons disabled style={{ layout: "vertical", color: "white" }} />
    );
  }
  if (isResolved) {
    return (
      <PayPalButtons
        style={{ layout: "vertical", color: "white" }}
        disabled={disabled}
        createSubscription={async (data, actions) => {
          return actions.subscription.create({
            plan_id: plan,
          });
        }}
        onApprove={async (data, actions) => {
          return actions.subscription!.get().then(async (details) => {
            const patch = {
              orderId: data.orderID,
              subscriptionId: data.subscriptionID,
              planId: details.id, // or product.id ?
            };
            const dataPatched = await UsePatchData(patch);
            gtagPurchase(data.orderID, {
              value: price,
              id: details.id as string,
              name: planName,
            });
            router.push("/success");
          });
        }}
        onCancel={async (data, actions) => {
          alerts.warning("Canceled");
        }}
        onError={async (data) => {
          router.push("/failed");
        }}
      />
    );
  }
};

export const PaypalComponent: React.FC<PaypalComponentProps> = ({
  disabled,
  plan,
}) => {
  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!, // todo add zod to env secrets
    intent: "subscription",
    components: "buttons",
    vault: true,
  };

  const standardYearly = process.env.NEXT_PUBLIC_PAYPAL_STANDARD_ANUAL;
  const stadardMonthly = process.env.NEXT_PUBLIC_PAYPAL_STANDARD_MONTHLY;
  const basicYearly = process.env.NEXT_PUBLIC_PAYPAL_BASIC_ANUAL;
  const basicMonthly = process.env.NEXT_PUBLIC_PAYPAL_BASIC_MONTHLY;

  const supportValue =
    plan.plan == "basic"
      ? plan.billing
        ? basicYearly
        : basicMonthly
      : plan.billing
      ? standardYearly
      : stadardMonthly;

  return (
    <Wrapper>
      <PayPalScriptProvider options={initialOptions}>
        <WraperButton
          plan={supportValue}
          disabled={disabled}
          planName={plan.plan}
          price={plan.price}
        />
      </PayPalScriptProvider>
    </Wrapper>
  );
};
