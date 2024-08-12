import { createSlice } from "@reduxjs/toolkit";
import { getTomorrowNoon } from "../../../utils/dateUtils";
import { fetchBanner, updateBanner } from "./thunk";

const initialState = {
  link: "",
  countdown: getTomorrowNoon(),
  heading: "",
  description: "",
  isVisible: true,
  loading: false,
  error: null,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setLink: (state, action) => {
      state.link = action.payload;
    },
    setCountdown: (state, action) => {
      state.countdown = action.payload;
    },
    setHeading: (state, action) => {
      state.heading = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.link = action.payload.link;
        state.countdown = action.payload.countdown;
        state.heading = action.payload.heading;
        state.description = action.payload.description;
        state.isVisible = action.payload.isVisible;
      })
      .addCase(fetchBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.link = action.payload.link;
        state.countdown = action.payload.countdown;
        state.heading = action.payload.heading;
        state.description = action.payload.description;
        state.isVisible = action.payload.isVisible;
      })
      .addCase(updateBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setLink,
  setCountdown,
  setHeading,
  setDescription,
  toggleVisibility,
} = bannerSlice.actions;

export default bannerSlice.reducer;
