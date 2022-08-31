import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state, action.payload];
    },
    removeFromBasket: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = BasketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export default BasketSlice.reducer;
