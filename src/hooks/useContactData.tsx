/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '@/services/api';

export const UseContactData = async (values: any) => {
  try {
    const interests = [''];
    if (values.vkpr) interests.push('vkpr');
    if (values.safiracli) interests.push('safira-cli');
    if (values.support) interests.push('support');
    if (values.devportal) interests.push('devportal');

    const model = {
      'full-name': values.name,
      organization: values.company ?? '',
      'e-mail': values.email,
      interests: interests,
      question: values.question,
      'job-title': values.title,
      'contact-type': values.type ?? 'TRIAL',
    };

    const { data } = await api.post('/contacts', model);

    return data;
  } catch (error: unknown) {
    throw new Error(`[Error in Contact Us]: ${error}`);
  }
};
