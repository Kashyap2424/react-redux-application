import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQauntity: 0,
    showCart: false,
  },
  reducers: {
    itemsAddToCart(state, action) {
      const newItems = action.payload;

      // if items is already existing then only increace they item
      const existingItem = state.itemList.find(
        (item) => item.id === newItems.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.price += newItems.price;
      } else {
        state.itemList.push({
          id: newItems.id,
          price: newItems.price,
          quantity: 1,
          totalQauntity: newItems.price,
          name: newItems.name,
        });
      }
    },
    itemsRemoveFormCart() {},
    showCartItmes(state) {
      state.showCart = true;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
