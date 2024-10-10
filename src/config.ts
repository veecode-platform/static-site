export const port = process.env.PORT || 3000;
export const host = process.env.HOST_URL
  ? `https://${process.env.HOST_URL}`
  : `http://localhost:${port}`;
