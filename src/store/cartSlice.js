import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload.cart;
    },

    addToCart: (state, action) => {
      /*state.cartItems.push(action.payload);*/
      
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { setCart, addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;