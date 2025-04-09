const storage = {
  setData: (name: string, obj: string) => localStorage.setItem(name, obj),
  getData: (name: string) => localStorage?.getItem(name),
  removeData: (name: string) => localStorage.removeItem(name),
  updateData: (name: string, obj: object) => {
    const user = JSON.parse(localStorage.getItem(name) || '{}');
    if (typeof user === 'object' && user !== null) {
      const update = JSON.stringify({ ...user, ...obj });
      localStorage.setItem(name, update);
    }
  },
};

export default storage;
