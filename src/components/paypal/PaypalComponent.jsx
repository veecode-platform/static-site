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
        "client-id": "AYeZ7RE7NgdD8GC5FvOxmJcJRE69s3_4BbFXzl2824907mW_4JPobDmkwfj42U7vp0UXouYZU3GNxSoN",
        currency: "USD",
        intent: "subscription",
        components: "buttons",
        vault: true
    };

    /*
    support premium anual - P-89U45817275828443MMPY56A
    support premium - P-68Y40169MN964201DMMPY3SY
    support standard anual - P-67C50367DL8388341MMPY67Q
    support standard - P-9G9684018V798073BMMPY6MY
    */

    const supportValue = plan.plan == "premium" ? plan.billing ? "P-89U45817275828443MMPY56A" : "P-68Y40169MN964201DMMPY3SY" : plan.billing ? "P-67C50367DL8388341MMPY67Q" : "P-9G9684018V798073BMMPY6MY"
    return(
        <Wrapper>          
            <PayPalScriptProvider options={initialOptions}>
               <WraperButton plan={supportValue} disabled={disabled} /> 
            </PayPalScriptProvider>
        </Wrapper>
    )
}

