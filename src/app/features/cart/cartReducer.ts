import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../../types/Item";

interface CartsState {
  cart: Item[];
  openModal: boolean;
}

const initialState: CartsState = {
  cart: [],
  openModal: false
};

const cartSystem = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index === -1) {
        const temp = { ...action.payload,totalCount: action.payload.price , numberCount: 1 };
        
        return {
          ...state,
          cart: [...state.cart, temp],          
        };
      }
    },
    RemoveCart: (state, action) => {
      const newArr = state.cart.filter(
        (item) => item._id !== action.payload.id
      );
      state.cart = newArr;
    },
    UpdateNumberCount: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if(index >= 0) {
        state.cart[index].numberCount = action.payload.numberCount
        state.cart[index].totalCount = action.payload.numberCount * state.cart[index].price
      }
    },
    OpenModalCart: (state, action) => {
      state.openModal = action.payload
    },
  },
});

export const { AddCart, RemoveCart, UpdateNumberCount, OpenModalCart } = cartSystem.actions;
export default cartSystem.reducer;