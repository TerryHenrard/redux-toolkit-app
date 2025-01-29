import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../features/picturesSlice";

export const store = configureStore({
  reducer: {
    pictures: picturesReducer,
  },
});
