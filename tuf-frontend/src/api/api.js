import axios from "axios";

const API_ENDPOINT = "http://localhost:5000/api/banner";

export const fetchBannerData = async () => {
  const response = await axios.get(API_ENDPOINT);
  return response.data;
};

export const updateBannerData = async (bannerData) => {
  const response = await axios.put(API_ENDPOINT, bannerData);
  return response.data;
};
