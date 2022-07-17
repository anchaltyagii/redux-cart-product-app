import { createSlice } from "@reduxjs/toolkit";

const initialState = {item: [], isCountVisible: 0};

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      countCart(state) {
        state.isCountVisible++;
      },
      addItemToCart(state, action) {
         const newItem = action.payload;
         state.isCountVisible++;
         state.item.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            description: newItem.description,
         })
      },
      removeFromCart(state, action) {
         state.isCountVisible--;
         state.item.pop();
      }
   }
});

export const cartActions = cartSlice.actions;


