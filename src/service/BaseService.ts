import axios from 'axios';

const REST_API_URL="https://restcountries.com/v3.1";
const apiClient = axios.create({
    baseURL: REST_API_URL,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export {apiClient}
