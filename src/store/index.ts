import { createSlice, configureStore } from "@reduxjs/toolkit";
import { PRODUCTS } from "../constants.ts";
import { IProductState } from "../models.ts";

const initialState: IProductState = {
  products: PRODUCTS,
  selectedProductId: 1
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment(state) {
      state.selectedProductId++
    }
  }
});

const store = configureStore({
  reducer: productSlice.reducer
})

export const productActions = productSlice.actions;

export default store;
