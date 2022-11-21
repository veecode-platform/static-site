import api from "../../services/api"

export const UseContactData = async (values) => {

  try{

    let interests = []
    if(values.vkpr) interests.push("vkpr");
    if(values.safiracli) interests.push("safira-cli");
    if(values.support) interests.push("support");
    if(values.devportal) interests.push("devportal");


    let model = {
      "full-name": values.name,
      "organization": values.company ? values.company : "contact-enterprise",
      "e-mail": values.email,
      "interests": interests ? interests : [""],
      "question": values.question,
    }

    const { data } = await api.post("/contact", model)

    return data
  }

  catch(error){
    return error;
  }
}
