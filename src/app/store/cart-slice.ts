import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

interface Action {
  payload: any;
  type: string;
}

interface State {
  items: any;
  totalQuantity: number;
  changed: boolean;
}

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state: State, action: Action) {
      // increase the totalQuantity
      state.totalQuantity++;
      state.changed = true;

      const newItem = action.payload;
      // find if an item is already in the cart or not
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title
        });
      } else {
        // if an item is already in the cart
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state: State, action: Action) {
      // decrease the totalQuantity
      state.totalQuantity--;
      state.changed = true;

      const id = action.payload;

      const existingItem = state.items.find((item: any) => item.id === id);

      if (existingItem.quantity === 1) {
        // remove the items by comparing the ids with the existing item id
        state.items = state.items.filter((item: any) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    replacecart(state: State, action: Action) {
      if (action.payload) {
        state.totalQuantity = action.payload.totalQuantity;
        state.items = action.payload.items;
      }
    }
  }
});

export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;
