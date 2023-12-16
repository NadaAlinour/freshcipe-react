import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  localCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload.cart;
    },

    updateCart: (state, action) => {
      /*state.cartItems.push(action.payload);*/
      state.cartItems = [action.payload.cart, ...state.cartItems];
    },

    updateQuantity: (state, action) => {
      // payload has cart item id and quantity
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id == action.payload.cartItemId
      );
      state.cartItems[itemIndex].attributes.quantity = action.payload.quantity;

    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    setLocalCart: (state, action) => {
      state.localCart = action.payload.localCart;
    },

    addToLocalCart: (state, action) => {
      state.localCart = [action.payload.localCart, ...state.localCart];
    },
  },
});

export const {
  setCart,
  updateCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  setLocalCart,
  addToLocalCart,
} = cartSlice.actions;
export default cartSlice.reducer;
