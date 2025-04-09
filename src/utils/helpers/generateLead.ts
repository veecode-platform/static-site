export const generate_lead = () => {
  const params = {
    currency: 'USD',
    value: 1,
  };
  window.gtag('event', 'generate_lead', params, { debug_mode: true });
};
