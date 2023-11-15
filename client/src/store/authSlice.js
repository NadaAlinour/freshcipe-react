import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
  userId: "",
  username: "",
  cartId: "",
  favouritesId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userToken = action.payload.token;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.cartId = action.payload.cartId;
      state.favouritesId = action.payload.favouritesId;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("cartId", action.payload.cartId);
      localStorage.setItem("favouritesId", action.payload.favouritesId);
    },

    logoutUser: (state, action) => {
      state.userToken = "";
      state.userId = "";
      state.username = "";
      state.cartId = "";
      state.favouritesId = "";
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
      localStorage.removeItem("cartId");
      localStorage.removeItem("favouritesId");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
