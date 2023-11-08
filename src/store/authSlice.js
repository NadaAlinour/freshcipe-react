import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
  userId: "",
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
      state.cartId = action.payload.cartId;
      state.favouritesId = action.payload.favouritesId;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("cartId", action.payload.cartId);
      localStorage.setItem("favouritesId", action.payload.favouritesId);
    },

    logoutUser: (state, action) => {
      state.userToken = "";
      state.userId = "";
      state.cartId = "";
      state.favouritesId = "";
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("cartId");
      localStorage.removeItem("favouritesId");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
