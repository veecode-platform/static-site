import { Wrapper } from "./styles";
import React, {useState, useEffect} from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import alerts from "../../../utils/alerts";


const WraperButton = ({plan, disabled}) =>{

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
    return(
        <PayPalButtons 
            style={{ layout: "vertical", color: "white" }}
            disabled={disabled}
            /*createOrder= { async (data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: '8988'
                    }
                  }]
                })
            }}*/
            createSubscription = { async (data, actions) => {
                return actions.subscription.create({
                    'plan_id': plan
                });
            }}
            onApprove={ async (data, actions) => {
                //console.log(data)
                //alerts.success("Compra realizada com sucesso!")
                await actions.subscription.get().then(()=>{
                    //console.log("Log: ", data);
                    //console.log(data);
                    alerts.success("Success!")
                });                
            }}
            onCancel={ async (data, actions) => {
                //console.log("Log cancel: ", data, actions)
                alerts.warning("Canceled")
            }} 
            onError={ async (data, actions) => {
                console.log(data)
                alerts.error("Error")
            }}               
        />
    )    
}

export const PaypalComponent = ({disabled, plan}) => {

    const initialOptions = {
        "client-id": "AYeZ7RE7NgdD8GC5FvOxmJcJRE69s3_4BbFXzl2824907mW_4JPobDmkwfj42U7vp0UXouYZU3GNxSoN",
        currency: "USD",
        //intent: "capture",
        intent: "subscription",
        //locale: "pt_BR",
        components: "buttons",
        vault: true
    };

    const [supportValue, setSupportValue] = useState("P-9MG22131P3311111XMMNY2MY");

    return(
        <Wrapper>          
            <PayPalScriptProvider options={initialOptions}>
               <WraperButton plan={supportValue} disabled={disabled} /> 
            </PayPalScriptProvider>
        </Wrapper>
    )
}

