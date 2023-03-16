import { Wrapper} from "./styles";
import React, {useEffect} from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import alerts from "../../../utils/alerts";
import { useRouter } from 'next/router'
import { UsePatchData } from "../../hooks/UsePatchData";
import { gtagPurchase } from "../../../utils/gtag";


const WraperButton = ({plan, disabled, planName, price}) =>{
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
                        const patch = {
                            orderId: data.orderID,
                            subscriptionId: data.subscriptionID,
                            planId: details.plan_id
                        }
                        const dataPatched =  await UsePatchData(patch)
                        gtagPurchase(data.orderID, { value:price, id:details.plan_id, name:planName });
                        router.push("/success")
                    });                
                }}
                onCancel={ async (data, actions) => {
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
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        intent: "subscription",
        components: "buttons",
        vault: true
    };

    const standardYearly = process.env.NEXT_PUBLIC_PAYPAL_STANDARD_ANUAL;
    const stadardMonthly = process.env.NEXT_PUBLIC_PAYPAL_STANDARD_MONTHLY;
    const basicYearly = process.env.NEXT_PUBLIC_PAYPAL_BASIC_ANUAL;
    const basicMonthly = process.env.NEXT_PUBLIC_PAYPAL_BASIC_MONTHLY;

    const supportValue = plan.plan == "basic" ? plan.billing ? basicYearly : basicMonthly : plan.billing ? standardYearly : stadardMonthly
    
    return(
        <Wrapper>          
            <PayPalScriptProvider options={initialOptions}>
               <WraperButton plan={supportValue} disabled={disabled} planName={plan.plan} price={plan.price} /> 
            </PayPalScriptProvider>
        </Wrapper>
    )
}

