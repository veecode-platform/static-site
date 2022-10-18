
export const gtagPurchase = (id, plan) => {
    const params = {
        transaction_id: id,
        value: plan.value,
        currency: "USD",
        items:[{
          item_id: plan.id,
          item_name: plan.name
        }]
    }
    window.gtag("event", "purchase", params)
  }

  export const gtagSafiraDocs = () => {//create unique event(safira docs redirect)
    window.gtag("event", "safiraDocs");
  }
  export const gtagVkprDocs = () => {//create unique event(vkpr docs redirect)
    window.gtag("event", "vkprDocs");
  }
