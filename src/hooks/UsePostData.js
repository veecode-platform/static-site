import api from "../../services/api"
import storage from "../../utils/storage"
import { setCookie } from 'nookies'


export const UsePostData = async (values) => {

  try{

    const model = {
      "full-name": values.name,
      "organization": values.company,
      "e-mail": values.email,
      "job-title": values.title,
      "phone": values.cel
    }

    //const { data } = await api.post("/purchases", JSON.stringify(model))

    storage.setData("user", values)
    setCookie(null, 'USER', values, {
      maxAge: 86400,
      path: '/checkout',
    })

    return true
  }

  catch(error){
    return error;
  }
}
