import axios from "axios";

//const URL_API = process.env.NEXT_PUBLIC_LAMBDA_BASE_URL
const URL_API = "http://localhost:5000/v1"

const api = axios.create({
    baseURL: URL_API,
    headers: { 
        'x-api-key': process.env.NEXT_PUBLIC_LAMBDA_API_KEY,
        'content-type': 'application/json',
    },
});

export default api;