import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slice/BasketSlice'
import restaurantReducer from './slice/RestaurantSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer
  },
})