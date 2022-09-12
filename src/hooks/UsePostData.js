import api from "../../services/api"
import storage from "../../utils/storage"
import alerts from "../../utils/alerts"


export const UsePostData = async (values) => {

  try{
    const { data } = await api.post("/post", values)
    storage.setData("user", values)
    return data
  }

  catch(error){
    return error;
  }
}
