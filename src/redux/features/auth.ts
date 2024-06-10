import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  active: false,
  image: "",
};

export const auth = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.active = action.payload.active;
      state.image = action.payload.image || "";
    },

    setLogout: (state) => {
      state.name = "";
      state.email = "";
      state.active = false;
    },
  },
});

export const { setLogin, setLogout } = auth.actions;
export default auth.reducer;
