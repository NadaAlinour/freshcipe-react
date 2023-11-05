import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: "",
  userId: "",
  cartId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userToken = action.payload.token;
      state.userId = action.payload.id;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userId", action.payload.id);
      localStorage.setItem("cartId", action.payload.cartId);
    },

    logoutUser: (state, action) => {
      state.userToken = "";
      state.userId = "";
      state.cartId = "";
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("cartId");
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
