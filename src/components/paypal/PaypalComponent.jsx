import { Wrapper} from "./styles";
import React, {useState, useEffect} from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import alerts from "../../../utils/alerts";
import { useRouter } from 'next/router'
import { UsePatchData } from "../../hooks/UsePatchData";


const WraperButton = ({plan, disabled}) =>{
    const router = useRouter()

    const [{ options, isPending, isResolved, isRejected }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options
            },
        });
    }, [plan]);

    if(isRejected){
        return(
            <div>erro</div>
        )
    }

    if(isPending){
        return(
            <PayPalButtons disabled style={{ layout: "vertical", color: "white" }} />
        )
    }
    if(isResolved){
        return(
            <PayPalButtons 
                style={{ layout: "vertical", color: "white" }}
                disabled={disabled}
                createSubscription = { async (data, actions) => {
                    return actions.subscription.create({
                        'plan_id': plan
                    });
                }}
                onApprove={ async (data, actions) => {
                    return actions.subscription.get().then(async (details)=>{
                        //console.log("Details: ", details);
                        //console.log("Data: ", data)
                        const patch = {
                            orderId: data.orderID,
                            subscriptionId: data.subscriptionID,
                            planId: details.plan_id
                        }
                        const dataPatched =  await UsePatchData(patch)
                        //console.log("Patched", dataPatched);
                        //alerts.success("Success!")
                        router.push("/success")
                    });                
                }}
                onCancel={ async (data, actions) => {
                    //console.log("Log cancel: ", data, actions)
                    alerts.warning("Canceled")
                }} 
                onError={ async (data, actions) => {
                    console.log(data)
                    router.push("/failed")
                }}               
            />
        )
    }
}

export const PaypalComponent = ({disabled, plan}) => {

    const initialOptions = {
        //sandobx"client-id": "AUTvrP9lwGpVkbRcqLXOkyFjrmYE__0dl15nncMeyELndDvXCYnE1DElLJETUsoplegGy0WNR30TyIwT",
        "client-id": "AWlXI0P_nEhVbB0mZK3e6RL7KTc7mD0xsCGKc6byAvoM6kgZLERKm_xfXnoy6QQrVh-DPqv7yAcXwo97",
        //currency: "USD",
        intent: "subscription",
        components: "buttons",
        vault: true
    };

/*SANDOBOX
P-62H3948438124174PMMSIT4Y
Standard Yearly

P-4GC62224405371731MMSIPRQ
Standard Monthly

P-83415534J8087031TMMSIOZQ
Premium Yearly

P-6BT27473RX516543MMMSINJA
Premium Monthly
    */
   //const standardYearly = "P-62H3948438124174PMMSIT4Y";
   //const stadardMonthly = "P-4GC62224405371731MMSIPRQ";
   //const premiumYearly = "P-83415534J8087031TMMSIOZQ";
   //const premiumMonthly = "P-6BT27473RX516543MMMSINJA";

    //const supportValue = plan.plan == "premium" ? plan.billing ? premiumYearly : premiumMonthly : plan.billing ? standardYearly : stadardMonthly
    const supportValue = "P-83400514756756319MMSLI7Q"
    return(
        <Wrapper>          
            <PayPalScriptProvider options={initialOptions}>
               <WraperButton plan={supportValue} disabled={disabled} /> 
            </PayPalScriptProvider>
        </Wrapper>
    )
}

