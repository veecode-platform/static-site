import axios from "axios";

const URL_API = process.env.NEXT_PUBLIC_LAMBDA_BASE_URL

const api = axios.create({
    baseURL: URL_API,
    headers: { 
        'x-api-key': 'UZEarLQM8DaIUtmLZETKh6kVcMPHZZKF7xzrS7cP',
        'content-type': 'application/json',
    },
});

export default api;