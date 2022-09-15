import axios from "axios";

//export const URL_API = process.env.REACT_APP_API_URL;
export const URL_API = "https://48wwt2cy21.execute-api.us-east-1.amazonaws.com/dev/v1/purchases"

const api = axios.create({
    baseURL: URL_API,
    headers: { 
        'x-api-key': 'UZEarLQM8DaIUtmLZETKh6kVcMPHZZKF7xzrS7cP',
        'content-type': 'application/json',
    },
});

export default api;