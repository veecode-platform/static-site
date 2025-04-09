import api from '@/services/api';

export const UseNewsletterData = async (email: string) => {
  try {
    const body = {
      email,
    };

    const { data } = await api.post('/newsletter', body);

    return data;
  } catch (error: unknown) {
    throw new Error(`[Error in Newsletter]: ${error}`);
  }
};
