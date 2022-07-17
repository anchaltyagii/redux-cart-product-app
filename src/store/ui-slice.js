import { createSlice } from "@reduxjs/toolkit";

const initialState = {isCartVisible: false};

export const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      toggle(state) {
        state.isCartVisible = !state.isCartVisible;
      }
   },
});

export const uiActions = uiSlice.actions;