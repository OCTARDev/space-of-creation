import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user";
import appSlice from "./slices/app";

export const store = configureStore({
  reducer: {
    user: userSlice,
    app: appSlice
  },
});
