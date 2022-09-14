import axios from "axios";

//export const URL_API = process.env.REACT_APP_API_URL;
export const URL_API = "https://fdsw8wt1rl.execute-api.us-east-1.amazonaws.com/dev/v1"

const api = axios.create({
    baseURL: URL_API,
    headers: { 
        'x-api-key': 'GCw5XTMEaR6iiVD8hHE5m5794Iw9Yy8F64yrh10n',
        'content-type': 'application/json',
        //'access-control-allow-origin': "*"
    },
    //withCredentials: true
});

export default api;