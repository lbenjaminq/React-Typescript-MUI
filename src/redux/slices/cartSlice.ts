import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartAdd {
  title: string;
  author: string;
  urlToImage: string;
}

interface CartRemove {
  title: string;
}

const initialState: CartAdd[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,action: PayloadAction<CartAdd>) => {
      const { title } = action.payload
      const itemFind = state.filter((item)=> item.title === title)
      if(!state.length || !itemFind.length){
        state.push(action.payload)
      }
    },
    removeToCart: (state,action: PayloadAction<CartRemove>) => {
      const {title} = action.payload
      return state.filter((item)=> item.title !== title)
    }
  },
});

export const { addToCart, removeToCart } = cartSlice.actions