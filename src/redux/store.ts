import { configureStore } from "@reduxjs/toolkit";
import appConfig from "./features/appConfig";
import auth from "./features/auth";

export const store = configureStore({
  reducer: {
    appConfig,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
