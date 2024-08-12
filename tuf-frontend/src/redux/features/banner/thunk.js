import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBannerData, updateBannerData } from "../../../api/api";
import dayjs from "dayjs";

export const fetchBanner = createAsyncThunk(
  "banner/fetchBanner",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchBannerData();
      data.countdown = dayjs(data.countdown).valueOf();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error fetching banner data"
      );
    }
  }
);

export const updateBanner = createAsyncThunk(
  "banner/updateBanner",
  async (bannerData, { rejectWithValue }) => {
    try {
      const data = await updateBannerData(bannerData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Error updating banner data"
      );
    }
  }
);
