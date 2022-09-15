export default {

    setData: (name, obj) => localStorage.setItem(name, obj),
    getData: (name) => localStorage?.getItem(name),
    removeData: (name) => localStorage.removeItem(name),
    updateData:(name, obj) => {
      const user = JSON.parse(localStorage.getItem(name))
      const update = JSON.stringify({ ...user, ...obj })
      localStorage.setItem(name, update)
    } 
  };