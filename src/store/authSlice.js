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
    },

    logoutUser: (state, action) => {
      state.userToken = "";
      localStorage.removeItem("token");
    },

    setCartId: (state, action) => {
      state.cartId = action.payload.id;
    }

  },
});

export const { loginUser, logoutUser, setCartId } = authSlice.actions;
export default authSlice.reducer;
