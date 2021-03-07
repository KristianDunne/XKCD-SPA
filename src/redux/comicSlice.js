import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComic = createAsyncThunk("comics/getComic", (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json);
});

const comicsSlice = createSlice({
  name: "comics",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  extraReducers: {
    [fetchComic.pending]: (state) => {
      state.loading = true;
    },
    [fetchComic.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchComic.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
  },
});

export const getLoading = (state) => state.comic.loading;
export const getData = (state) => state.comic.data;
export const getError = (state) => state.comic.error;

export default comicsSlice.reducer;
