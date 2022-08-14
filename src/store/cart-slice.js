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
         const existingItem = state.item.find((item) => item.id === newItem.id)
         state.isCountVisible++;
         if(!existingItem) {
         state.item.push({
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            totalPrice: newItem.price,
            quantity: 1,
            description: newItem.description,
         })}
         else {
            existingItem.quantity++;
            existingItem.totalPrice = parseInt(existingItem.totalPrice) + parseInt(newItem.price);
         }
      },
      removeFromCart(state, action) {
         const newItem = action.payload;
         console.log("newItem", newItem.id);
         const existingItem = state.item.find((item) => item.id === newItem.id)
         state.isCountVisible--;
         console.log("existing Item",existingItem.quantity);
         if(existingItem.quantity === 1) {
            state.item.filter(item => item.id === newItem.id);
         }
         else {
            existingItem.totalPrice = parseInt(existingItem.totalPrice) - parseInt(newItem.price);
            existingItem.quantity--;
         }
         
      }
   }
});

export const cartActions = cartSlice.actions;


