import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    name: null,
    description: null,
    image: null,
    rating: null,
    deliveryFee: null,
    discountPercent: null,
    discount: null,
    latitude: null,
    longitude: null,
    menu: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setRestaurant} = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant

export default restaurantSlice.reducer;
