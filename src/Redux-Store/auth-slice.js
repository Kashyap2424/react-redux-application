import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    userLogIn(state) {
      state.isLoggedIn = true;
    },
    userLogOut(state) {
      state.isLoggedIn = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
