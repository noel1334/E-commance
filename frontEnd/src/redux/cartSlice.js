import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
  id: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.cart.length < 1) {
        state.cart.push(action.payload);
        state.id.push(action.payload._id);
      } else if (state.id.includes(action.payload._id)) {
        toast.warning(`${action.payload.name} is already in your cart`);
      } else {
        state.cart.push(action.payload);
        state.id.push(action.payload._id);
        toast.success(`${action.payload.name} is added in your cart`);
      }
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item._id !== action.payload;
      });
    },
    increase: (state, action) => {
      let product = state.cart.find((item) => {
        return item._id === action.payload;
      });
      product.quantity += 1;
    },
    decrease: (state, action) => {
      let product = state.cart.find((item) => {
        return item._id === action.payload;
      });
      if (product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { add, remove, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;