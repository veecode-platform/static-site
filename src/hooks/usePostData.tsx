/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '@/services/api';
import storage from '@/utils/helpers/storage';

export const UsePostData = async (values: any) => {
  try {
    const model = {
      'full-name': values.name,
      organization: values.company,
      'e-mail': values.email,
      'job-title': values.title,
      'contact-type': values.type,
      plan: values.plan,
    };

    const { data } = await api.post('/purchases', model);

    storage.setData('user', JSON.stringify({ ...values, id: data.id }));

    return data;
  } catch (error: any) {
    throw new Error(`[Error in Validate Form]: ${error}`);
  }
};
