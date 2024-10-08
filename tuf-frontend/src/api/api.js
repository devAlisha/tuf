import axios from "axios";

const API_ENDPOINT = `${import.meta.env.VITE_BACKEND_URI}/api/banner`;

export const fetchBannerData = async () => {
  const response = await axios.get(API_ENDPOINT, {
    headers: {
      'ngrok-skip-browser-warning': 'true'
    }
  });
  return response.data;
};

export const updateBannerData = async (bannerData) => {
  const response = await axios.put(API_ENDPOINT, bannerData, {
    headers: {
      'ngrok-skip-browser-warning': 'true'
    }
  });
  return response.data;
};
