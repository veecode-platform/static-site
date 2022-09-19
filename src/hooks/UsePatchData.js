import api from "../../services/api"
import storage from "../../utils/storage"

export const UsePatchData = async (values) => {

  try{

    const id = JSON.parse(storage.getData("user")).id

    const model = {
        "order-id": values.orderId,
        "subscription-id": values.subscriptionId,
        "plan-id" : values.planId
    }

    const { data } = await api.patch(`/purchases/${id}`, model)

    storage.updateData("user", model)

    return data
  }

  catch(error){
    return error;
  }
}
