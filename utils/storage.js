export default {

    setData: (name, obj) => localStorage.setItem(name, obj),
    getData: (name) => localStorage.getItem(name),
    removeData: (name) => localStorage.removeItem(name),
   
  };