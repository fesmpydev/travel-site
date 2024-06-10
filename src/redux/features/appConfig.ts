import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  themeColor: "dark" | "light";
}

const initialState: InitialState = {
  themeColor: "dark",
};

export const appConfig = createSlice({
  name: "AppConfig",
  initialState,
  reducers: {
    setThemeColor: (
      state,
      action: PayloadAction<InitialState["themeColor"]>
    ) => {
      state.themeColor = action.payload;
    },
  },
});

export const { setThemeColor } = appConfig.actions;
export default appConfig.reducer;
