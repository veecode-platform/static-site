import { toast } from 'react-toastify';

const Toast = {
  info: (message: string) => {
    toast.info(message);
  },

  success: (message: string) => {
    toast.success(message, {
      theme: 'colored',
      position: 'top-center',
    });
  },

  error: (message: string) => {
    toast.error(message, {
      theme: 'colored',
      position: 'bottom-left',
    });
  },

  warning: (message: string) => {
    toast.warn(message, {
      theme: 'colored',
      position: 'bottom-center',
    });
  },
};

export default Toast;
