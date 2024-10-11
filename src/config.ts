export const port = process.env.PORT || 3000;
export const host = process.env.NEXT_PUBLIC_HOST_URL
  ? process.env.NEXT_PUBLIC_HOST_URL
  : `http://localhost:${port}`;
