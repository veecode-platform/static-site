export interface IPlan {
  id: string;
  value: string;
  name: string;
}

export const gtagPurchase = (id: string, plan: IPlan) => {
  const params = {
    transaction_id: id,
    value: plan.value,
    currency: 'USD',
    items: [
      {
        item_id: plan.id,
        item_name: plan.name,
      },
    ],
  };
  window.gtag('event', 'purchase', params);
};

export const gtagEvents = (tag: string) => {
  window.gtag('event', tag);
};
