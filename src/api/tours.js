import { api } from "./API";

export const getFeatured = async () => {
  return await api.get(`/tours/getFeatured`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const searchTours = async (data) => {
  return await api.get(
    `/tours/search`,
    {
      params: {
        date: data.date,
        travellers: data.travellers,
        location: data.location,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};


export const getTours = async () => {
  return await api.get(`/tours`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

