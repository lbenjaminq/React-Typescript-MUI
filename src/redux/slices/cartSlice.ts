import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  name: string;
  image: string;
  info: string;
}

const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,action: PayloadAction<Cart>) => {
      
    },
    removeToCart: (state,action: PayloadAction<Cart>) => {}
  },
});

export const { addToCart, removeToCart } = cartSlice.actions