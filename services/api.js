import axios from "axios";

//export const URL_API = process.env.REACT_APP_API_URL;
export const URL_API = "https://ptsv2.com/t/lkulu-1662929269"

const api = axios.create({
    baseURL: URL_API/*,
    headers: { 
        'content-type': 'application/json',
    },*/
});

export default api;