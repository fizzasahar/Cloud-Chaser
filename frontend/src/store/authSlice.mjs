import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  userId: localStorage.getItem("userId") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.user = action.payload.user;
      state.isAuthenticated = true
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // ✅ save in storage
    },

    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("user");
      state.token = null;
      state.userId = null;
      state.user = null;
      state.isAuthenticated = false;
    }

  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;