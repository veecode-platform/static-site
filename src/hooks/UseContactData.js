import api from "../../services/api"

export const UseContactData = async (values) => {

  try{

    const model = {
      "full-name": values.name,
      "organization": values.company,
      "e-mail": values.email,
      "job-title": values.title,
      "phone": values.cel
    }

    const { data } = await api.post("/contact", model)

    return data
  }

  catch(error){
    return error;
  }
}
