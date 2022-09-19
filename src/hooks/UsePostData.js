import api from "../../services/api"
import storage from "../../utils/storage"

export const UsePostData = async (values) => {

  try{

    const model = {
      "full-name": values.name,
      "organization": values.company,
      "e-mail": values.email,
      "job-title": values.title,
      "phone": values.cel
    }

    const { data } = await api.post("/purchases", model)

    storage.setData("user", JSON.stringify({...values, id: data.id}))

    return data
  }

  catch(error){
    return error;
  }
}
