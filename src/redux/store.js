import { configureStore } from "@reduxjs/toolkit";
import comicReducer from "./comicSlice";

export default configureStore({
  reducer: {
    comic: comicReducer,
  },
});
