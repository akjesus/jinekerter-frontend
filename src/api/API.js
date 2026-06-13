import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});


export const flightApi = axios.create({
  baseURL: import.meta.env.VITE_AVIATION_API_URL,
});