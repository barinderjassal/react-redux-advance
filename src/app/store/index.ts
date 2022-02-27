import { configureStore } from '@reduxjs/toolkit';
import { uiSliceReducer } from './ui-slice';
import { cartReducer } from './cart-slice';

// merge all slice reducers in the configureStore object
export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    cart: cartReducer
  } 
});
