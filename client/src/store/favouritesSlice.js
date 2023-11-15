import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.favourites = action.payload.newFavourites;
    },
    
    addFavourites: (state, action) => {
      //state.favourites = [action.payload.newFavourites, ...state.favourites]; // :(
      state.favourites = action.payload.newFavourites; // this is exactly the same as the above but dfkljasdklf cuz i concatenate before i call dispatch
    },

    clearFavourites: (state) => {
      state.favourites = []
    }

    // removeFavourites: (state, action) => {},
  },
});

export const { setFavourites, addFavourites, clearFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
