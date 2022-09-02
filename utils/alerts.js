import { toast } from "react-toastify";

export default {
    info: (message) => {
      toast.info(message);
    },
  
    success: (message) => {
      toast.success(message, {
        theme: "colored",
        position: "top-center"       
      });
    },
  
    error: (message) => {
      toast.error(message, {
        theme: "colored",
        position: "bottom-left"
      });
    },
  
    warning: (message) => {
      toast.warn(message, {
        theme: "colored",
        position: "bottom-center"
      });
    },
  };