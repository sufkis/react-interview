import { createSlice, configureStore } from "@reduxjs/toolkit";
import { PRODUCTS } from "../constants.ts";
import { IProductState } from "../models.ts";

const initialState: IProductState = {
  products: PRODUCTS,
  selectedProduct: undefined
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    select(state, action) {
      state.selectedProduct = state.products.find(product => product.id === action.payload)
    }
  }
});

const store = configureStore({
  reducer: productSlice.reducer
})

export const productActions = productSlice.actions;

export default store;
