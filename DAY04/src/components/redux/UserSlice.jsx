/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: sessionStorage.getItem('username') || null,
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { username: action.payload };
      sessionStorage.setItem('username', action.payload);
    },
    logout: (state) => {
      state.user = { username: null };
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('auth');
      sessionStorage.removeItem('email');
    },
  },
});

export const { login, logout } = UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice.reducer;