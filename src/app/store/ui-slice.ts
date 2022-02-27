import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {
  isCartVisible: false,
  notification: null as any
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});

export const uiSliceReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
