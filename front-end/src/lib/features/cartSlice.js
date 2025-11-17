import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const foundItem = state.cartItems.find(
        (el) => el.product._id === newItem._id
      );

      if (!foundItem) {
        state.cartItems.push({ product: newItem, quantity: 1 });
      } else {
        foundItem.quantity += 1;
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (el) => el.product._id === action.payload
      );
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (el) => el.product._id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (el) => el.product._id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
