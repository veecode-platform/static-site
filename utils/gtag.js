export const gtagPurchase = (id, plan) => {
  const params = {
    transaction_id: id,
    value: plan.value,
    currency: "USD",
    items: [
      {
        item_id: plan.id,
        item_name: plan.name,
      },
    ],
  };
  window.gtag("event", "purchase", params);
};

/**
 * Tags:
 * devportal
 * safiraDocs
 * vkprDocs
 * joinUs 
 */

export const gtagEvents = (tag) => {
  if (typeof window !== "undefined")
  window.gtag("event", `${tag}`);
};
