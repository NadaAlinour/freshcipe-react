import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userToken = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },

    logoutUser: (state, action) => {
      state.userToken = "";
      localStorage.removeItem("token");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
