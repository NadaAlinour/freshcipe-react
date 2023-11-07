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
      state.favourites = [action.payload.newFavourites, ...state.favourites];
    },

    // removeFavourites: (state, action) => {},
  },
});

export const { setFavourites, addFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
