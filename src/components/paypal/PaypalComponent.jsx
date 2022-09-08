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
            createSubscription = { async (data, actions) => {
                return actions.subscription.create({
                    'plan_id': plan
                });
            }}
            onApprove={ async (data, actions) => {
                await actions.subscription.get().then(()=>{
                    //console.log("Log: ", data);
                    alerts.success("Compra realizada com sucesso!")
                });                       
            }}
            onCancel={ async (data, actions) => {
                //console.log("Log cancel: ", data, actions)
                alerts.warning("Compra cancelada!")
            }} 
            onError={ async (data, actions) => {
                alerts.error("Erro ao completar a transacao")
            }}               
        />
    )    
}

export const PaypalComponent = ({disabled, plan}) => {

    const initialOptions = {
        "client-id": "AYeZ7RE7NgdD8GC5FvOxmJcJRE69s3_4BbFXzl2824907mW_4JPobDmkwfj42U7vp0UXouYZU3GNxSoN",
        currency: "BRL",
        intent: "subscription",
        locale: "pt_BR",
        components: "buttons",
        vault: true
    };

    const [supportValue, setSupportValue] = useState("P-9PV56232W1892461NMMH3YXY");

    return(
        <Wrapper>          
            <PayPalScriptProvider options={initialOptions}>
               <WraperButton plan={supportValue} disabled={disabled} /> 
            </PayPalScriptProvider>
        </Wrapper>
    )
}

