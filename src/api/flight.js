import { flightApi } from "./API";
import axios from "axios";
const API_KEY = import.meta.env.VITE_AVIATION_API_KEY;
const URL = import.meta.env.VITE_AVIATION_API_URL;

export const fetchFlights = async (from, to, departureDate) => {
  return await axios.get(`${URL}/flights`, {
    params: {
      dep_iata: from,
      arr_iata: to,
      limit: 10,
      access_key: API_KEY,
    },
  });
};

export const fetchCities = async () => {
  return await axios.get(`${URL}/cities`, {
    params: {
      access_key: API_KEY,
    },
  });
};
