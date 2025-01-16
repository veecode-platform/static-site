import api from "@/services/api";

export const UseNewsletterData = async (email: string) => {
  try {

    const body = {
      email
    };

    const { data } = await api.post("/contacts", body);

    console.log("RESPOSTA DO USENEWSNETTER", data);

    return data;
  } catch (error: any) {
    throw new Error(`[Error in Newsletter]: ${error}`);
  }
};
