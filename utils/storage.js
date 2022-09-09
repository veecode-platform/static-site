export default {

    setData: (obj) => localStorage.setItem("user", JSON.stringify(obj)),
    getData: () => localStorage.getItem("user"),
    removeData: () => localStorage.removeItem("user"),
   
  };